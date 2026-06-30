import Header from "~/components/Header";
import Footer from "~/components/Footer";
import { Star, Image as ImageIcon, ChevronRight } from "lucide-react";
import StarRating from "./_components/StarRating";

const REVIEWS = [
  {
    id: 1,
    name: "Sophie Laurent",
    date: "January 6, 2023",
    rating: 5,
    comment:
      "Bought this as a birthday gift for my mother and she absolutely loved it. The candle smells divine and the hand cream is so luxurious. Beautiful packaging too — not your typical gift."
  },
  {
    id: 2,
    name: "Anna de Vries",
    date: "February 2, 2023",
    rating: 4,
    comment:
      "The scent is subtle and elegant — not overpowering at all. I keep the hand cream on my desk and use it throughout the day. The linen pouch is a lovely touch. Would buy again as a treat for myself."
  }
];

// const StarRating = ({ rating, max = 5, size = 16 }) => (
//   <div className="flex gap-0.5">
//     {[...Array(max)].map((_, i) => (
//       <Star
//         key={i}
//         size={size}
//         className={i >= rating ? "text-gray-50 fill-transparent" : ""}
//       />
//     ))}
//   </div>
// );

export default function ProductDetailPage() {
  const price = "26.95";

  return (
    <div className="min-h-screen bg-white flex flex-col">

      <Header />

      <main className="flex-grow pt-6 sm:pt-8 pb-10">
        <div className="max-w-7xl mx-auto px-4">

          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-gray-400 mb-6 sm:mb-10">
            <a href="#" className="hover:text-black">Collection</a>
            <ChevronRight size={10} />
            <span className="text-gray-600">Bouquets</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-20">

            {/* LEFT — Product Image */}
            <div className="aspect-[4/3] sm:aspect-[4/5] bg-[#F5F5F5] flex items-center justify-center rounded-sm overflow-hidden">
              <div className="text-gray-300">
                <ImageIcon size={48} strokeWidth={1} className="sm:w-16 sm:h-16" />
              </div>
            </div>

            {/* RIGHT — Product Info */}
            <div className="flex flex-col">

              {/* Title + Add button */}
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4 mb-6 sm:mb-8">
                <h1 className="text-2xl sm:text-3xl font-serif tracking-tight">
                  Obra Rose & Vetiver Gift Set
                </h1>
                <button className="self-start sm:self-auto bg-black text-white px-6 py-2 text-sm font-medium rounded-xl hover:bg-gray-800 transition-colors whitespace-nowrap">
                  Add €{price}
                </button>
              </div>

              {/* ABOUT */}
              <section className="mb-8 sm:mb-10">
                <h2 className="text-sm font-bold uppercase tracking-wider mb-3">
                  About
                </h2>
                <p className="text-sm text-gray-600 leading-relaxed">
                  A beautifully curated gift set, featuring our signature rose and vetiver
                  hand cream, a botanical candle, and a linen pouch. The rose is sourced
                  from Turkish gardens, blended with earthy vetiver and a hint of autumn
                  petals. Perfect for someone who appreciates the finer things.
                </p>
              </section>

              {/* REVIEWS */}
              <section className="mb-10 sm:mb-12">
                <h2 className="text-sm font-bold uppercase tracking-wider mb-4">
                  Reviews
                </h2>

                <div className="flex items-center gap-3 sm:gap-4 mb-6 sm:mb-8">
                  <span className="text-xl font-medium">4.7</span>
                  <StarRating rating={4.7} size={16} />
                  <span className="text-xs text-gray-400">54 reviews</span>
                </div>

                <div className="space-y-8 sm:space-y-10">
                  {REVIEWS.map((review) => (
                    <div key={review.id} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <h3 className="text-sm font-bold font-serif">{review.name}</h3>
                        <StarRating rating={review.rating} size={13} />
                      </div>
                      <p className="text-[10px] text-gray-400 uppercase tracking-widest">
                        {review.date}
                      </p>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        {review.comment}
                      </p>
                    </div>
                  ))}
                </div>

                <button className="mt-8 sm:mt-10 border border-gray-200 px-6 py-2 text-xs font-medium hover:border-black transition-colors">
                  View all 54 reviews
                </button>
              </section>

            </div>
          </div>
        </div>
      </main>

      {/* BOTTOM BAR */}
      <section className="bg-white border-t border-gray-100 py-4 px-4 sm:px-6 md:px-12">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div>
            <span className="text-[10px] uppercase text-gray-400 block mb-1">
              Total amount
            </span>
            <span className="text-lg font-medium">€{price}</span>
          </div>
          <button className="border border-gray-300 px-6 sm:px-8 py-2 text-sm hover:bg-gray-50 transition-colors">
            Skip
          </button>
        </div>
      </section>

      <Footer />

    </div>
  );
}