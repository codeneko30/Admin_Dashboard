





import { useState } from "react";
import { Heart, ImageIcon } from "lucide-react";
import { Link } from "react-router";

const favorites = [
  { id: 1, name: "Orange Blossom Peony", price: "€24.05" },
  { id: 2, name: "Blush Peony Mix", price: "€32.08" },
  { id: 3, name: "Ranunculus Bundle", price: "€21.85" },
  { id: 4, name: "Anemone & Thistle", price: "€28.05" },
  { id: 5, name: "Roseflower Petal", price: "€22.05" },
  { id: 6, name: "Lavender Dreams", price: "€19.85" },
  { id: 7, name: "Custom Rose Trio", price: "€44.05" },
  { id: 8, name: "Lavender Wreath", price: "€38.05" },
  { id: 9, name: "Wildflower Bunch", price: "€13.85" },
];

export default function FavoritesGrid() {
  const [activeProduct, setActiveProduct] = useState<number | null>(null);


  const [wishlist, setWishlist] =
    useState<number[]>([]);

  const handleProductClick = (id: number) => {
    setActiveProduct((prev) =>
      prev === id ? null : id
    );
  };

  const handleWishlist = (
    e: React.MouseEvent,
    id: number
  ) => {
    e.stopPropagation();

    setWishlist((prev) =>
      prev.includes(id)
        ? prev.filter((item) => item !== id)
        : [...prev, id]
    );
  };

  return (
    <section>

      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-x-6 md:gap-y-12">

        {favorites.map((item) => {
          const isActive =
            activeProduct === item.id;

          const isLiked =
            wishlist.includes(item.id);

          return (
            <div
              key={item.id}
              onClick={() =>
                handleProductClick(item.id)
              }
              className="group relative flex cursor-pointer flex-col"
            >

              {/* Image */}
              <div className="relative mb-3 flex aspect-square items-center justify-center overflow-hidden rounded-xl bg-gray-100 text-gray-300 md:aspect-[4/5] md:rounded-lg md:bg-[#F5F5F5]">

                {/* Mobile */}
                <ImageIcon
                  size={32}
                  className="md:hidden"
                />

                {/* Desktop */}
                <svg
                  className="hidden h-10 w-10 md:block"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1"
                >
                  <rect
                    x="3"
                    y="3"
                    width="18"
                    height="18"
                    rx="2"
                  />

                  <circle
                    cx="8.5"
                    cy="8.5"
                    r="1.5"
                  />

                  <polyline points="21 15 16 10 5 21" />
                </svg>

                {/* Wishlist */}
                <button
                  onClick={(e) =>
                    handleWishlist(
                      e,
                      item.id
                    )
                  }
                  className={`
                    absolute right-2 top-2 z-20
                    flex h-7 w-7 items-center justify-center
                    rounded-full bg-white shadow-sm
                    transition
                    ${isLiked
                      ? "text-red-500"
                      : "text-gray-400 hover:text-gray-900"
                    }
                  `}
                >
                  <Heart
                    size={16}
                    fill={
                      isLiked
                        ? "currentColor"
                        : "none"
                    }
                  />
                </button>

                {/* Actions */}
                <div
                  className={`
                    absolute inset-0
                    flex items-center justify-center gap-2
                    bg-black/5
                    transition-opacity
                    duration-200

                    md:opacity-0
                    md:group-hover:opacity-100

                    ${isActive
                      ? "opacity-100"
                      : "opacity-0"
                    }
                  `}
                >

                  <Link
                    to="/product-details"
                    onClick={(e) =>
                      e.stopPropagation()
                    }
                  >

                    <button className="bg-white px-4 py-2 text-xs font-bold text-black shadow-sm hover:bg-gray-100">

                      Quick View

                    </button>

                  </Link>

                  <Link to="/cart" onClick={(e) =>
                    e.stopPropagation()
                  }>

                    <button

                      className="bg-black px-4 py-2 text-xs font-bold text-white shadow-sm hover:bg-gray-800"
                    >
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