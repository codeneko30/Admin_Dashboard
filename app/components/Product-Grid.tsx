

import { useState } from "react";
import { Heart, ImageIcon } from "lucide-react";
import { Link } from "react-router";

const favorites = [
  {
    id: 1,
    name: "Orange Blossom Peony",
    price: "€24.05",
    image: "https://m.media-amazon.com/images/I/81akPeqLWLL.jpg",
  },
  {
    id: 2,
    name: "Blush Peony Mix",
    price: "€32.08",
    image: "https://m.media-amazon.com/images/I/81z5KzrH3VL.jpg",
  },
  {
    id: 3,
    name: "Ranunculus Bundle",
    price: "€21.85",
    image: "https://designedbytheboss.com/cdn/shop/products/mini-ranunculus-bundle-6-stems-293255.jpg?v=1695798554&width=320",
  },
  {
    id: 4,
    name: "Anemone & Thistle",
    price: "€28.05",
    image: "https://m.media-amazon.com/images/I/61SUPnGe2lL.jpg",
  },
  {
    id: 5,
    name: "Roseflower Petal",
    price: "€22.05",
    image: "https://m.media-amazon.com/images/I/71OoYNoAiLL.jpg",
  },
  {
    id: 6,
    name: "Lavender Dreams",
    price: "€19.85",
    image: "https://i.pinimg.com/originals/f1/1e/40/f11e405933102d900e761cb726513dc6.jpg",
  },
  {
    id: 7,
    name: "Custom Rose Trio",
    price: "€44.05",
    image: "https://media.gettyimages.com/id/88169168/photo/bridal-bouquet-of-roses.jpg?s=612x612&w=0&k=20&c=zl2qxqA7J-wlvUB8pxDR5A_GsEdzJCEYZBwr8SZDpDs=",
  },
  {
    id: 8,
    name: "Lavender Wreath",
    price: "€38.05",
    image: "https://www.gardenia.net/wp-content/uploads/2023/05/Continuously-Blooming-Lavenders-300x300.webp",
  },
  {
    id: 9,
    name: "Wildflower Bunch",
    price: "€13.85",
    image: "https://media.gettyimages.com/id/489738484/vector/wild-rose-19-century-illustration.jpg?s=612x612&w=0&k=20&c=WsXZ8pqDkPbK3-DQy9FASHiPBh1rnYO-po8nvITMkc0=",
  },
];

export default function FavoritesGrid() {
  const [activeProduct, setActiveProduct] = useState<number | null>(null);
  const [wishlist, setWishlist] = useState<number[]>([]);

  const handleProductClick = (id: number) => {
    setActiveProduct((prev) => (prev === id ? null : id));
  };

  const handleWishlist = (e: React.MouseEvent, id: number) => {
    e.stopPropagation();
    setWishlist((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <section>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-x-6 md:gap-y-12">
        {favorites.map((item) => {
          const isActive = activeProduct === item.id;
          const isLiked = wishlist.includes(item.id);

          return (
            <div
              key={item.id}
              onClick={() => handleProductClick(item.id)}
              className="group relative flex cursor-pointer flex-col"
            >
              {/* Image Container */}
              <div className="relative mb-3 flex aspect-square items-center justify-center overflow-hidden rounded-xl bg-gray-100 text-gray-300 md:aspect-[4/5] md:rounded-lg md:bg-[#F5F5F5]">
                
                {/* ✅ Actual Image — replaces the placeholder icons */}
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />

                {/* Wishlist */}
                <button
                  onClick={(e) => handleWishlist(e, item.id)}
                  className={`absolute right-2 top-2 z-20 flex h-7 w-7 items-center justify-center rounded-full bg-white shadow-sm transition ${
                    isLiked
                      ? "text-red-500"
                      : "text-gray-400 hover:text-gray-900"
                  }`}
                >
                  <Heart
                    size={16}
                    fill={isLiked ? "currentColor" : "none"}
                  />
                </button>

                {/* Actions Overlay */}
                <div
                  className={`absolute inset-0 flex items-center justify-center gap-2 bg-black/5 transition-opacity duration-200 md:opacity-0 md:group-hover:opacity-100 ${
                    isActive ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <Link
                    to="/product-details"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <button className="bg-white px-4 py-2 text-xs font-bold text-black shadow-sm hover:bg-gray-100">
                      Quick View
                    </button>
                  </Link>
                  <Link to="/cart" onClick={(e) => e.stopPropagation()}>
                    <button className="bg-black px-4 py-2 text-xs font-bold text-white shadow-sm hover:bg-gray-800">
                      Add to Cart
                    </button>
                  </Link>
                </div>
              </div>

              {/* Info */}
              <div className="flex items-start justify-between gap-2">
                <h3 className="text-sm font-medium leading-snug text-gray-800">
                  {item.name}
                </h3>
                <span className="shrink-0 text-sm text-gray-900 md:font-medium">
                  {item.price}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}