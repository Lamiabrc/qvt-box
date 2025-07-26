import { Star, ShoppingCart, Plus, Minus } from "lucide-react";
import { Product } from "@/data/shopProducts";
import { DEFAULT_PRODUCT_IMAGE } from "@/data/realProductImages"; // ✅ remplacement

<img
  src={product.image ?? DEFAULT_PRODUCT_IMAGE}
  alt={product.name}
  className="w-full h-48 object-cover rounded-xl"
/>
