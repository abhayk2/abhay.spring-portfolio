"use client";

import { useState, useCallback, useEffect, useRef } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";
import { Button } from "@/components/ui/button";
import {
  ChevronLeft,
  ChevronRight,
  ZoomIn,
  ZoomOut,
  Download,
  Printer,
  ArrowLeft,
  Maximize,
  Minimize,
  RotateCw,
  Loader2,
} from "lucide-react";

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

const ZOOM_STEP = 0.2;
const MIN_ZOOM = 0.5;
const MAX_ZOOM = 3.0;

export default function ResumeViewer() {
  const [numPages, setNumPages] = useState<number>(0);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [scale, setScale] = useState<number>(1.2);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [containerWidth, setContainerWidth] = useState<number>(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const viewerRef = useRef<HTMLDivElement>(null);

  // Responsive: measure container width
  useEffect(() => {
    const updateWidth = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.clientWidth);
      }
    };
    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  // Auto-fit scale for mobile
  const getResponsiveWidth = useCallback(() => {
    if (containerWidth < 640) {
      // mobile: fit to container width with padding
      return containerWidth - 32;
    }
    return undefined; // use scale on desktop
  }, [containerWidth]);

  const onDocumentLoadSuccess = useCallback(({ numPages }: { numPages: number }) => {
    setNumPages(numPages);
    setIsLoading(false);
  }, []);

  const goToPrevPage = useCallback(() => {
    setCurrentPage((prev) => Math.max(1, prev - 1));
  }, []);

  const goToNextPage = useCallback(() => {
    setCurrentPage((prev) => Math.min(numPages, prev + 1));
  }, [numPages]);

  const zoomIn = useCallback(() => {
    setScale((prev) => Math.min(MAX_ZOOM, prev + ZOOM_STEP));
  }, []);

  const zoomOut = useCallback(() => {
    setScale((prev) => Math.max(MIN_ZOOM, prev - ZOOM_STEP));
  }, []);

  const resetZoom = useCallback(() => {
    setScale(1.2);
  }, []);

  const handleDownload = useCallback(() => {
    const link = document.createElement("a");
    link.href = "/resume.pdf";
    link.download = "Abhay_Kumar_Resume.pdf";
    link.click();
  }, []);

  const handlePrint = useCallback(() => {
    const printWindow = window.open("/resume.pdf", "_blank");
    if (printWindow) {
      printWindow.addEventListener("load", () => {
        printWindow.print();
      });
    }
  }, []);

  const toggleFullscreen = useCallback(async () => {
    if (!viewerRef.current) return;
    if (!document.fullscreenElement) {
      await viewerRef.current.requestFullscreen();
      setIsFullscreen(true);
    } else {
      await document.exitFullscreen();
      setIsFullscreen(false);
    }
  }, []);

  // Listen for fullscreen exit via Escape
  useEffect(() => {
    const handler = () => {
      if (!document.fullscreenElement) {
        setIsFullscreen(false);
      }
    };
    document.addEventListener("fullscreenchange", handler);
    return () => document.removeEventListener("fullscreenchange", handler);
  }, []);

  // Keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Don't intercept if user is typing in an input
      if (
        e.target instanceof HTMLInputElement ||
        e.target instanceof HTMLTextAreaElement
      )
        return;

      switch (e.key) {
        case "ArrowLeft":
          e.preventDefault();
          goToPrevPage();
          break;
        case "ArrowRight":
          e.preventDefault();
          goToNextPage();
          break;
        case "+":
        case "=":
          e.preventDefault();
          zoomIn();
          break;
        case "-":
          e.preventDefault();
          zoomOut();
          break;
        case "0":
          e.preventDefault();
          resetZoom();
          break;
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [goToPrevPage, goToNextPage, zoomIn, zoomOut, resetZoom]);

  const responsiveWidth = getResponsiveWidth();
  const zoomPercent = Math.round(scale * 100);

  return (
    <div
      ref={viewerRef}
      className="flex flex-col h-[calc(100dvh-4rem)] bg-background"
    >
      {/* Toolbar */}
      <div className="sticky top-0 z-10 border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex items-center justify-between h-14 px-4 gap-2">
          {/* Left: Back link */}
          <Button variant="ghost" size="sm" asChild className="shrink-0">
            <a href="/">
              <ArrowLeft className="mr-2 h-4 w-4" />
              <span className="hidden sm:inline">Portfolio</span>
            </a>
          </Button>

          {/* Center: Page navigation */}
          <div className="flex items-center gap-1 sm:gap-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={goToPrevPage}
              disabled={currentPage <= 1}
              className="h-8 w-8"
              aria-label="Previous page"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <span className="text-sm text-muted-foreground font-medium min-w-[80px] text-center tabular-nums">
              {isLoading ? "—" : `${currentPage} / ${numPages}`}
            </span>
            <Button
              variant="ghost"
              size="icon"
              onClick={goToNextPage}
              disabled={currentPage >= numPages}
              className="h-8 w-8"
              aria-label="Next page"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>

          {/* Right: Zoom + Actions */}
          <div className="flex items-center gap-1 sm:gap-2">
            {/* Zoom controls — hidden on mobile (auto-fit used instead) */}
            <div className="hidden sm:flex items-center gap-1 border-r border-border pr-2 mr-1">
              <Button
                variant="ghost"
                size="icon"
                onClick={zoomOut}
                disabled={scale <= MIN_ZOOM}
                className="h-8 w-8"
                aria-label="Zoom out"
              >
                <ZoomOut className="h-4 w-4" />
              </Button>
              <button
                onClick={resetZoom}
                className="text-xs text-muted-foreground font-medium min-w-[42px] text-center tabular-nums hover:text-foreground transition-colors"
                aria-label="Reset zoom"
              >
                {zoomPercent}%
              </button>
              <Button
                variant="ghost"
                size="icon"
                onClick={zoomIn}
                disabled={scale >= MAX_ZOOM}
                className="h-8 w-8"
                aria-label="Zoom in"
              >
                <ZoomIn className="h-4 w-4" />
              </Button>
            </div>

            <Button
              variant="ghost"
              size="icon"
              onClick={toggleFullscreen}
              className="h-8 w-8 hidden sm:inline-flex"
              aria-label={isFullscreen ? "Exit fullscreen" : "Fullscreen"}
            >
              {isFullscreen ? (
                <Minimize className="h-4 w-4" />
              ) : (
                <Maximize className="h-4 w-4" />
              )}
            </Button>

            <Button
              variant="ghost"
              size="icon"
              onClick={handlePrint}
              className="h-8 w-8 hidden sm:inline-flex"
              aria-label="Print resume"
            >
              <Printer className="h-4 w-4" />
            </Button>

            <Button
              variant="default"
              size="sm"
              onClick={handleDownload}
              className="shrink-0"
            >
              <Download className="mr-1.5 h-4 w-4" />
              <span className="hidden sm:inline">Download</span>
            </Button>
          </div>
        </div>
      </div>

      {/* PDF Viewport */}
      <div
        ref={containerRef}
        className="flex-1 overflow-auto flex justify-center bg-muted/50"
      >
        <div className="py-6 sm:py-10">
          <Document
            file="/resume.pdf"
            onLoadSuccess={onDocumentLoadSuccess}
            loading={
              <div className="flex flex-col items-center justify-center h-[60vh] gap-4">
                <Loader2 className="h-8 w-8 animate-spin text-primary" />
                <p className="text-sm text-muted-foreground">Loading resume…</p>
              </div>
            }
            error={
              <div className="flex flex-col items-center justify-center h-[60vh] gap-4">
                <p className="text-sm text-destructive">
                  Failed to load resume PDF.
                </p>
                <Button variant="outline" size="sm" onClick={handleDownload}>
                  <Download className="mr-2 h-4 w-4" />
                  Download Instead
                </Button>
              </div>
            }
          >
            <div
              className="shadow-2xl rounded-lg overflow-hidden transition-transform duration-200"
              style={{
                boxShadow:
                  "0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(0, 0, 0, 0.05)",
              }}
            >
              <Page
                pageNumber={currentPage}
                scale={responsiveWidth ? undefined : scale}
                width={responsiveWidth}
                renderTextLayer={true}
                renderAnnotationLayer={true}
                loading={
                  <div className="flex items-center justify-center h-[80vh] w-[60vw] max-w-[612px]">
                    <Loader2 className="h-6 w-6 animate-spin text-primary" />
                  </div>
                }
              />
            </div>
          </Document>
        </div>
      </div>

      {/* Mobile bottom bar for extra actions */}
      <div className="sm:hidden border-t border-border bg-background px-4 py-2 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={zoomOut}
            disabled={scale <= MIN_ZOOM}
            className="h-9 w-9"
          >
            <ZoomOut className="h-4 w-4" />
          </Button>
          <span className="text-xs text-muted-foreground tabular-nums min-w-[36px] text-center">
            {zoomPercent}%
          </span>
          <Button
            variant="ghost"
            size="icon"
            onClick={zoomIn}
            disabled={scale >= MAX_ZOOM}
            className="h-9 w-9"
          >
            <ZoomIn className="h-4 w-4" />
          </Button>
        </div>
        <Button variant="ghost" size="icon" onClick={handlePrint} className="h-9 w-9">
          <Printer className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}
