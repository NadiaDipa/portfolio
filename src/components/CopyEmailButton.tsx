"use client";

import { useState } from "react";
import { FaCheck, FaRegCopy } from "react-icons/fa";

// Small button that copies the email address to the clipboard.
export default function CopyEmailButton({ email }: { email: string }) {
  const [copied, setCopied] = useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard can be blocked by the browser; the address is still visible on the page.
    }
  }

  return (
    <button
      type="button"
      onClick={copy}
      className="inline-flex items-center gap-2 rounded-lg border border-border bg-surface px-3 py-1.5 text-sm font-medium transition hover:border-accent hover:text-accent"
      aria-label="Copy email address"
    >
      {copied ? (
        <FaCheck className="text-accent" aria-hidden="true" />
      ) : (
        <FaRegCopy aria-hidden="true" />
      )}
      {copied ? "Copied" : "Copy"}
    </button>
  );
}
