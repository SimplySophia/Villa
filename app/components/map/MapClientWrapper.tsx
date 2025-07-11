"use client";

import dynamic from "next/dynamic";

// Dynamically import MapWithContact with SSR disabled
const MapWithContact = dynamic(() => import("./MapWithContact"), {
  ssr: false,
});

export default function MapClientWrapper() {
  return <MapWithContact />;
}
