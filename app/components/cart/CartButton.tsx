"use client";

import { useCart } from "@/hooks/useCart";
import { CartItem } from "@/hooks/useCart";
import { toast } from "sonner";
import { ShoppingCart, Trash2 } from "lucide-react";

type Props = {
  item: CartItem;
};

export const CartButton = ({ item }: Props) => {
  const { toggleCart, isInCart } = useCart();
  const inCart = isInCart(item.id);

  const handleClick = () => {
    toggleCart(item);
    toast.success(inCart ? "Removed from Cart" : "Added to Cart");
  };

  return (
    <button
      onClick={handleClick}
      className={`flex items-center gap-2 text-sm px-4 py-2 rounded-full transition ${
        inCart ? "bg-red-500 hover:bg-red-600" : "bg-orange-600 hover:bg-orange-700"
      } text-white`}
    >
      {inCart ? <Trash2 size={16} /> : <ShoppingCart size={16} />}
      {inCart ? "Remove from Cart" : "Add to Cart"}
    </button>
  );
};
