"use client";

import { useEffect } from "react";
import { createPortal } from "react-dom";

type BackdropProps = {
  open: boolean;
  onClose?: () => void;
  children?: React.ReactNode;
};

export default function Backdrop({ open, onClose, children }: BackdropProps) {
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  if (!open) return null;

  return createPortal(
    <div className="fixed inset-0 z-40 pointer-events-auto">
      {/* animated layer */}
      <div
        className="absolute inset-0 backdrop-blur-sm bg-black/20 opacity-0 animate-[fadeIn_300ms_linear_forwards]"
        onClick={onClose}
        aria-hidden
      />
      <div className="relative z-50 pointer-events-none">{children}</div>
    </div>,
    document.body
  );
}
