"use client";

import { useEffect } from "react";
import { MapContainer, TileLayer, CircleMarker, useMap, Tooltip } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { mapPins } from "./network-map";

// Component to fit bounds to Indonesia
function SetBounds() {
  const map = useMap();

  useEffect(() => {
    // Disable keyboard navigation to prevent focus stealing
    map.keyboard.disable();

    const bounds = L.latLngBounds(L.latLng(-10, 95), L.latLng(6, 141));
    map.fitBounds(bounds, { padding: [20, 20], animate: false });
  }, [map]);

  return null;
}

export default function IndonesiaMap() {
  const center: [number, number] = [-2.5, 118];

  return (
    <div className="relative rounded-2xl overflow-hidden indonesia-map-container" tabIndex={-1}>
      <div className="aspect-[16/9] md:aspect-[21/9]" tabIndex={-1}>
        <MapContainer
          center={center}
          zoom={5}
          scrollWheelZoom={false}
          className="h-full w-full"
          zoomControl={false}
          attributionControl={false}
          keyboard={false}
          dragging={false}
          doubleClickZoom={false}
          touchZoom={false}
        >
          <TileLayer url="https://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}{r}.png" />
          <SetBounds />

          {mapPins.map((pin) => (
            <CircleMarker
              key={pin.id}
              center={[pin.lat, pin.lng]}
              radius={pin.isMain ? 8 : 6}
              pathOptions={{
                fillColor: pin.type === "PBF" ? "#10b981" : "#f97316",
                color: "white",
                weight: 2,
                opacity: 1,
                fillOpacity: 1,
              }}
            >
              <Tooltip direction="top" offset={[0, -10]} className="custom-tooltip">
                <div className="text-center">
                  <span className={`inline-block text-[10px] font-semibold px-2 py-0.5 rounded mb-1 ${
                    pin.type === "PBF" ? "bg-emerald-100 text-emerald-700" : "bg-orange-100 text-orange-700"
                  }`}>
                    {pin.type}
                  </span>
                  <p className="text-gray-900 font-bold text-sm">{pin.name}</p>
                  <p className="text-gray-500 text-xs mt-1">{pin.address}</p>
                </div>
              </Tooltip>
            </CircleMarker>
          ))}
        </MapContainer>
      </div>

      {/* Legend */}
      <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-2 shadow-md z-[1000]">
        <div className="flex items-center gap-4 text-xs">
          <div className="flex items-center gap-1.5">
            <div className="w-3 h-3 rounded-full bg-emerald-500 border-2 border-white shadow"></div>
            <span className="text-gray-700 font-medium">PBF</span>
          </div>
          <div className="flex items-center gap-1.5">
            <div className="w-3 h-3 rounded-full bg-orange-500 border-2 border-white shadow"></div>
            <span className="text-gray-700 font-medium">Sales Point</span>
          </div>
        </div>
      </div>

      <style jsx global>{`
        .indonesia-map-container {
          background: #1E3A5F;
          position: relative;
          z-index: 0;
        }

        .indonesia-map-container .leaflet-container {
          background: #E8F4F8 !important;
          z-index: 0 !important;
          outline: none !important;
        }

        .indonesia-map-container .leaflet-pane {
          z-index: 0 !important;
        }

        .indonesia-map-container .leaflet-top,
        .indonesia-map-container .leaflet-bottom {
          z-index: 10 !important;
        }

        .indonesia-map-container .leaflet-tile-pane {
          filter: invert(1) grayscale(1) sepia(0.3) hue-rotate(180deg)
            saturate(3) brightness(1.1) contrast(0.9);
        }

        .leaflet-control-attribution {
          display: none;
        }

        .leaflet-interactive:hover {
          cursor: pointer;
        }

        .leaflet-tooltip.custom-tooltip {
          background: white;
          border: none;
          border-radius: 8px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
          padding: 12px;
          min-width: 280px;
          max-width: 350px;
          white-space: normal;
          word-wrap: break-word;
        }

        .leaflet-tooltip.custom-tooltip::before {
          border-top-color: white;
        }

        .leaflet-tooltip.custom-tooltip p {
          margin: 0;
          white-space: normal;
          word-wrap: break-word;
        }
      `}</style>
    </div>
  );
}
