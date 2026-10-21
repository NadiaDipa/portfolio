"use client";

import Image from "next/image";
import { useState } from "react";

type Props = {
  src: string;
  alt: string;
  fallback: React.ReactNode; // shown if the image file is missing or fails to load
  sizes?: string;
  priority?: boolean;
  className?: string;
};

// An image that fills its (relative) parent and shows a placeholder instead of a broken icon.
export default function SafeImage({
  src,
  alt,
  fallback,
  sizes,
  priority,
  className,
}: Props) {
  const [failed, setFailed] = useState(false);

  if (failed) return <>{fallback}</>;

  return (
    <Image
      src={src}
      alt={alt}
      fill
      sizes={sizes}
      priority={priority}
      className={className}
      onError={() => setFailed(true)}
    />
  );
}
