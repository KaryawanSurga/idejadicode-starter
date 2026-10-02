"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";

export function CopyCommand({ text, label }: { text: string; label: string }) {
  const [status, setStatus] = useState<"idle" | "copied" | "error">("idle");

  async function copy() {
    try {
      await navigator.clipboard.writeText(text);
      setStatus("copied");
      window.setTimeout(() => setStatus("idle"), 2000);
    } catch {
      setStatus("error");
    }
  }

  return (
    <button
      type="button"
      onClick={copy}
      className="inline-flex h-7 shrink-0 items-center gap-1.5 rounded-full border border-white/10 px-3 text-xs text-neutral-300 transition-colors hover:bg-white/[0.06] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/40"
    >
      {status === "copied" ? (
        <Check className="size-3.5" aria-hidden="true" />
      ) : (
        <Copy className="size-3.5" aria-hidden="true" />
      )}
      {status === "copied"
        ? "Copied"
        : status === "error"
          ? "Copy failed"
          : label}
      <span role="status" className="sr-only">
        {status === "copied" ? "Copied to clipboard." : ""}
      </span>
    </button>
  );
}
