
export type Property = {
  id: string;
  title: string;
  location: string;
  type: "apartment" | "penthouse" | "villa";
  price: number;
  bedrooms: number;
  area: number; // square meters
  floor: number;
  images: string[];
  description: string;
};

