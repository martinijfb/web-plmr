"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

type MosaicImage = {
  src: string;
  alt: string;
  href?: string;
};

type GridPosition = {
  id: string;
  imageIndex: number;
  x: number;
  y: number;
};

type BlueCapsuleMosaicProps = {
  images: MosaicImage[];
  capsuleColor?: string;
  className?: string;
};

/** Circle diameter as a percentage of container width (181 / 899). */
const CIRCLE_SIZE = 20.13;

/**
 * Staggered grid positions derived from the Figma design (899 × 735 canvas).
 * x, y = circle centre as a percentage of container width / height.
 */
const GRID: GridPosition[] = [
  // Row 0 – 4 circles
  { id: "c1",  imageIndex: 0,  x: 27.8,  y: 8.5  },
  { id: "c2",  imageIndex: 1,  x: 52.3,  y: 8.5  },
  { id: "c3",  imageIndex: 2,  x: 76.9,  y: 8.5  },
  { id: "c4",  imageIndex: 3,  x: 101.3, y: 8.5  },
  // Row 1 – 4 circles (shifted left)
  { id: "c5",  imageIndex: 4,  x: 13.1,  y: 36.5 },
  { id: "c6",  imageIndex: 5,  x: 37.7,  y: 36.5 },
  { id: "c7",  imageIndex: 6,  x: 62.2,  y: 36.5 },
  { id: "c8",  imageIndex: 7,  x: 86.7,  y: 36.5 },
  // Row 2 – 5 circles (widest row)
  { id: "c9",  imageIndex: 8,  x: 3.2,   y: 64.2 },
  { id: "c10", imageIndex: 9,  x: 27.8,  y: 64.1 },
  { id: "c11", imageIndex: 10, x: 52.3,  y: 64.1 },
  { id: "c12", imageIndex: 11, x: 76.7,  y: 64.1 },
  { id: "c13", imageIndex: 12, x: 101.3, y: 64.1 },
  // Row 3 – 4 circles
  { id: "c14", imageIndex: 13, x: 15.3,  y: 91.5 },
  { id: "c15", imageIndex: 14, x: 39.9,  y: 91.5 },
  { id: "c16", imageIndex: 15, x: 64.6,  y: 91.5 },
  { id: "c17", imageIndex: 16, x: 89.2,  y: 91.5 },
];

export function BlueCapsuleMosaic({
  images,
  capsuleColor = "#205081",
  className = "",
}: BlueCapsuleMosaicProps) {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  if (!images.length) return null;

  return (
    <div
      className={`relative ${className}`}
      style={{ aspectRatio: "899 / 735" }}
    >
      {/* Capsule shape: rounded left side, flat right side */}
      <div
        className="absolute inset-0 overflow-hidden"
        style={{
          backgroundColor: capsuleColor,
          borderRadius: "50% 0 0 50%",
        }}
      >
        {GRID.map((item) => {
          const image = images[item.imageIndex % images.length];
          const dimmed = hoveredId !== null && hoveredId !== item.id;

          return (
            <Link
              key={item.id}
              href={image.href ?? "#"}
              aria-label={image.alt}
              className="absolute overflow-hidden rounded-full bg-[#1F9DD8] transition-[transform,opacity] duration-300 ease-out focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-white"
              style={{
                width: `${CIRCLE_SIZE}%`,
                aspectRatio: "1",
                left: `${item.x}%`,
                top: `${item.y}%`,
                opacity: dimmed ? 0.5 : 1,
                transform: `translate(-50%, -50%)${hoveredId === item.id ? " scale(1.04)" : ""}`,
              }}
              onMouseEnter={() => setHoveredId(item.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 768px) 130px, 190px"
                className="object-contain"
              />
            </Link>
          );
        })}
      </div>
    </div>
  );
}
