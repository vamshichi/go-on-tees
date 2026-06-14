"use client";

import { useState } from "react";
import Image from "next/image";

export default function ProductGallery({
  images,
  name,
}: {
  images: string[];
  name: string;
}) {
  const [selected, setSelected] = useState(0);

  return (
    <div className="flex gap-4 h-full">
      {/* Thumbnails */}
      <div className="flex flex-col gap-3 z-10">
        {images.map((img, index) => (
          <button
            key={index}
            onClick={() => setSelected(index)}
            className={`border-2 overflow-hidden rounded-lg ${
              selected === index
                ? "border-white"
                : "border-gray-700"
            }`}
          >
            <Image
              src={img}
              alt={name}
              width={80}
              height={80}
              className="object-cover"
            />
          </button>
        ))}
      </div>

      {/* Main Image */}
      <div className="relative flex-1 h-full">
        <Image
          src={images[selected]}
          alt={name}
          fill
          priority
          className="object-cover"
        />
      </div>
    </div>
  );
}