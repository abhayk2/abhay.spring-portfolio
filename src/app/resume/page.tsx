import type { Metadata } from "next";
import ResumeViewerLoader from "@/components/resume-viewer-loader";
import { ThemeToggle } from "@/components/theme-toggle";
import { Code } from "lucide-react";

export const metadata: Metadata = {
  title: "Resume | abhay.spr",
  description:
    "View Abhay Kumar's professional resume — Full Stack Developer at TCS with expertise in Java, Spring Boot, Angular, and React.",
};

export default function ResumePage() {
  return (
    <div className="flex flex-col min-h-dvh bg-background">
      {/* Minimal header for the resume page */}
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container h-16 flex items-center justify-between">
          <a href="/" className="flex items-center space-x-2">
            <Code className="h-6 w-6 text-primary" />
            <span className="font-bold font-headline text-lg">abhay.spr</span>
          </a>
          <ThemeToggle />
        </div>
      </header>

      {/* Viewer */}
      <main className="flex-1">
        <ResumeViewerLoader />
      </main>
    </div>
  );
}
