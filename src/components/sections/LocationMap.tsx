"use client";

import { useEffect, useRef } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

interface LocationMapProps {
  lat: number;
  lng: number;
  name: string;
}

export default function LocationMap({ lat, lng, name }: LocationMapProps) {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<L.Map | null>(null);

  useEffect(() => {
    if (!mapRef.current || mapInstanceRef.current) return;

    const map = L.map(mapRef.current, {
      scrollWheelZoom: false,
    }).setView([lat, lng], 13);

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      maxZoom: 18,
    }).addTo(map);

    // Custom marker icon to match brand colour
    const icon = L.divIcon({
      className: "custom-map-marker",
      html: `<div style="
        width: 32px;
        height: 32px;
        background: var(--primary, #6b9cc4);
        border: 3px solid white;
        border-radius: 50% 50% 50% 0;
        transform: rotate(-45deg);
        box-shadow: 0 2px 8px rgba(0,0,0,0.3);
      "></div>`,
      iconSize: [32, 32],
      iconAnchor: [16, 32],
    });

    L.marker([lat, lng], { icon })
      .addTo(map)
      .bindPopup(
        `<strong>Herts Man With A Van</strong><br/>Serving ${name}`,
        { offset: [0, -20] }
      );

    mapInstanceRef.current = map;

    // Recalculate tile positions after container becomes visible
    // (fixes blank maps inside animated/hidden parents)
    const timer = setTimeout(() => map.invalidateSize(), 800);

    return () => {
      clearTimeout(timer);
      map.remove();
      mapInstanceRef.current = null;
    };
  }, [lat, lng, name]);

  return (
    <div
      ref={mapRef}
      className="absolute inset-0 w-full h-full"
      style={{ zIndex: 0 }}
    />
  );
}
