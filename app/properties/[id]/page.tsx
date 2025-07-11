"use client";

import { useParams } from "next/navigation";
import { propertyData } from "@/lib/data/properties";
import { useEffect, useState } from "react";
import { PropertyGallery } from "../../components/Home/properties/Propertygallery";
import { Property } from "@/types/properties";
import { useFavorites } from "@/hooks/useFavorites";
import { Heart, HeartIcon } from "lucide-react";
import { toast } from "sonner";
import { CartButton } from "@/app/components/cart/CartButton";




export default function PropertyDetailsPage() {
  const params = useParams();
  const id = params?.id;

  const [loading, setLoading] = useState(true);
  const [property, setProperty] = useState<Property | null>(null);
  const { toggleFavorite, isFavorite } = useFavorites();



  useEffect(() => {
    setLoading(true);

    const timer = setTimeout(() => {
      const match = propertyData.find((p) => p.id === id);
      if (match) {
        setProperty({
          ...match,
          type: match.type as "apartment" | "penthouse" | "villa",
        });
      } else {
        setProperty(null);
      }
      setLoading(false);
    }, 800); // simulate loading

    return () => clearTimeout(timer);
  }, [id]);

  if (loading) {
    return (
      <div className="max-w-6xl mx-auto px-4 py-10 animate-pulse">
        <div className="h-80 bg-gray-200 rounded mb-6" />
        <div className="h-6 w-1/2 bg-gray-300 mb-2 rounded" />
        <div className="h-4 w-1/3 bg-gray-200 mb-4 rounded" />
        <div className="h-24 bg-gray-100 rounded" />
      </div>
    );
  }

  if (!property) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-20 text-center text-gray-600">
        <h1 className="text-3xl font-bold mb-4">Property Not Found</h1>
        <p>Please check the URL or return to the listings page.</p>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <PropertyGallery images={property.images} />

      <div className="mt-6">
        <h1 className="text-3xl font-bold text-gray-800">{property.title}</h1>
        <p className="text-orange-600 font-semibold text-xl mt-1">
          ${property.price.toLocaleString()}/mo
        </p>
        <p className="text-gray-500 mt-1">{property.location}</p>

        <div className="mt-4 flex items-center gap-2">
          <button
            onClick={() => {
              toggleFavorite(property.id);
              const alert = isFavorite(property.id)
                ? "Removed from Favorite"
                : "Added to Favorite"
              toast.success(alert)  
            }}
            
            className="text-orange-600 hover:text-orange-700 transition"
            aria-label="Save to favorites"
          >
            {isFavorite(property.id) ? (
            <Heart fill="currentColor" className="w-6 h-6" />
            ) : (
            <HeartIcon className="w-6 h-6" />
          )}
          </button>
        </div>
        <div className="mt-4 flex items-center gap-4">
          <div className="mt-4">
  <CartButton
    item={{
      id: property.id,
      title: property.title,
      price: property.price,
      image: property.images[0],
      location: property.location,
    }}
  />
</div>


        </div>


        <div className="mt-4 flex gap-4 text-sm text-gray-600">
          <span>🛏 {property.bedrooms} Beds</span>
          <span>📐 {property.area} m²</span>
          <span>🏢 Floor {property.floor}</span>
        </div>

        <p className="mt-6 text-gray-700 leading-relaxed">{property.description}</p>
      </div>
    </div>
  );
}

