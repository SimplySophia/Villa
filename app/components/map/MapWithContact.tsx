"use client";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { motion } from "framer-motion";

if (typeof window !== "undefined" && L) {
  const customIcon = L.icon({
    iconUrl: "/icons/marker-icon.png",     
    shadowUrl: "/icons/marker-shadow.png", 
    iconSize: [25, 41],
    iconAnchor: [12, 41],
  });

  L.Marker.prototype.options.icon = customIcon;
}
// Example properties with lat/lng
const properties = [
  {
    id: "1",
    title: "Modern Apartment",
    location: "Sunny Isles Beach, FL",
    lat: 25.9500,
    lng: -80.1200,
  },
  {
    id: "2",
    title: "Luxury Penthouse",
    location: "Collins Ave, Sunny Isles",
    lat: 25.9550,
    lng: -80.1220,
  },
];

export default function MapWithContact() {
  return (
    <section  id="map" >
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.10 }}
      viewport={{ once: true }}
      className="max-w-6xl mx-auto py-16 px-4 flex flex-col md:flex-row gap-10"
    >

      {/* Map Section */}
      <div className="md:w-1/2 h-[400px] rounded overflow-hidden shadow-lg">
        <MapContainer
          center={[25.951, -80.121]}
          zoom={14}
          scrollWheelZoom={false}
          className="w-full h-full z-10"
        >
          <TileLayer
            attribution='&copy; <a href="https://openstreetmap.org">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          {properties.map((property) => (
            <Marker key={property.id} position={[property.lat, property.lng]}>
              <Popup>
                <strong>{property.title}</strong>
                <br />
                {property.location}
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>

{/* Contact Section */}
      <div className="md:w-1/2 space-y-6">
        <h2 className="text-3xl font-bold text-gray-800">
          Reach Out to Our Agents
        </h2>
        <p className="text-gray-600">
          Have questions or want to schedule a visit? Our team is here to help
          you find the perfect space in Sunny Isles Beach.
        </p>
        <div className="space-y-2 text-gray-700">
          <p>📍 123 Collins Ave, Sunny Isles Beach, FL</p>
          <p>📞 +1 (305) 123-4567</p>
          <p>✉️ info@villaestate.com</p>
        </div>
      </div>
    </motion.div>
    </section>
  );
}
