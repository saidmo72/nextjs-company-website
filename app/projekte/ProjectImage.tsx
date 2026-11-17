"use client";

import { useState } from "react";

export default function ProjectImage({
  src,
  alt,
}: {
  src: string;
  alt: string;
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="block w-full cursor-zoom-in"
        aria-label={`Bild vergrößern: ${alt}`}
      >
        <img
          src={src}
          alt={alt}
          className="h-48 w-full object-cover"
        />
      </button>

      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
          onClick={() => setIsOpen(false)}
        >
          <button
            type="button"
            onClick={() => setIsOpen(false)}
            className="absolute right-5 top-5 text-4xl text-white"
            aria-label="Bild schließen"
          >
            ×
          </button>

          <img
  src={src}
  alt={alt}
  className="h-[99vh] w-[99vw] object-contain"
  onClick={(e) => e.stopPropagation()}

          />
        </div>
      )}
    </>
  );
}