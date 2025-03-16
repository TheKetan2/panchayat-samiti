"use client";

import dynamic from "next/dynamic";
import { Suspense } from "react";

// Fix for marker icons
const DEFAULT_CENTER: [number, number] = [
  19.871920262491606, 79.62383285950945,
]; // Pombhurna coordinates

interface MapProps {
  address: string;
  className?: string;
}

// Dynamically import Leaflet with no SSR to fix window is not defined error
const MapComponent = dynamic(() => import("@/app/components/MapComponent"), {
  ssr: false,
  loading: () => (
    <div className="flex items-center justify-center h-[400px] bg-gray-100">
      Loading map...
    </div>
  ),
});

export default function Map({ address, className = "" }: MapProps) {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <MapComponent address={address} className={className} />
    </Suspense>
  );
}
