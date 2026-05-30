"use client";

import dynamic from "next/dynamic";

// react-pdf relies on browser APIs (DOMMatrix, canvas) that don't exist in Node.js,
// so we must skip SSR and only render the viewer on the client.
const ResumeViewer = dynamic(() => import("@/components/resume-viewer"), {
  ssr: false,
  loading: () => (
    <div className="flex items-center justify-center h-[60vh]">
      <div className="flex flex-col items-center gap-4">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent" />
        <p className="text-sm text-muted-foreground">Loading viewer…</p>
      </div>
    </div>
  ),
});

export default function ResumeViewerLoader() {
  return <ResumeViewer />;
}
