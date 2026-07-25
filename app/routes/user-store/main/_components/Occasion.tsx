






import { ImageIcon } from "lucide-react";

const occasions = [
  {
    title: "Birthday Blooms",
    count: "48 arrangements",
    image: "https://i.pinimg.com/originals/37/a6/95/37a69550d2e8c1e75091b40e1bb97686.jpg",
  },
  {
    title: "Anniversary",
    count: "36 arrangements",
    image: "https://marketplace.canva.com/MADFsHDMLM0/1/thumbnail_large/canva-happy-anniversary-card-and-spring-flowers-MADFsHDMLM0.jpg",
  },
  {
    title: "Sympathy & Tribute",
    count: "24 arrangements",
    image: "https://cdn11.bigcommerce.com/s-rbwjt1wcra/images/stencil/160w/products/335/1498/20171013_130640__55956__95898.1671483414.jpg?c=1",
  },
  {
    title: "Just Because",
    count: "52 arrangements",
    image: "https://i.pinimg.com/originals/6f/94/3f/6f943fa7a63b38a664efa34b1e116d1e.jpg",
  },
];

export default function OccasionSection() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-10 md:px-6 md:py-20">
      {/* Header */}
      <div className="mb-10">
        {/* ✅ explicit text-black */}
        <h2 className="mb-2 text-2xl font-normal text-black md:text-3xl">
          Shop by occasion
        </h2>
        <p className="text-sm text-gray-500">
          Find the right arrangement.
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-8">
        {occasions.map((item) => (
          <div
            key={item.title}
            className="group cursor-pointer"
          >
            {/* Image */}
            <div className="mb-3 flex aspect-square items-center justify-center overflow-hidden rounded-lg bg-gray-100 text-gray-300 transition group-hover:bg-gray-200">
              <img
                src={item.image}
                alt={item.title}
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>

            {/* Content */}
            {/* ✅ explicit text-black */}
            <h3 className="text-sm font-medium text-black">
              {item.title}
            </h3>
            <p className="mt-0.5 text-xs text-gray-400">
              {item.count}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}