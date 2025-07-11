"use client";

import { useFavorites } from "@/hooks/useFavorites";
import { propertyData } from "@/lib/data/properties";
import Image from "next/image";
import Link from "next/link";

export default function FavoritesPage() {
  const { favorites, toggleFavorite } = useFavorites();

  const favoriteProperties = propertyData.filter((p) =>
    favorites.includes(p.id)
  );

  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Your Saved Listings ❤️</h1>

      {favoriteProperties.length === 0 ? (
        <p className="text-gray-500">No saved listings yet.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {favoriteProperties.map((property) => (
            <div
              key={property.id}
              className="bg-white rounded-lg shadow hover:shadow-md transition overflow-hidden"
            >
              <div className="relative w-full h-56">
                <Image
                  src={property.images[0]}
                  alt={property.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold">{property.title}</h3>
                <p className="text-gray-500 text-sm">{property.location}</p>
                <p className="text-orange-600 font-bold mt-1">
                  ${property.price.toLocaleString()}/mo
                </p>

                <div className="flex items-center justify-between mt-4">
                  <Link
                    href={`/properties/${property.id}`}
                    className="text-sm bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded-full"
                  >
                    View Details
                  </Link>
                  <button
                    onClick={() => toggleFavorite(property.id)}
                    className="text-red-500 text-sm"
                  >
                    Remove ❤️
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
