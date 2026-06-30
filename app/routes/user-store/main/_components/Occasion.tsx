import { ImageIcon } from "lucide-react";

const occasions = [
  {
    title: "Birthday Blooms",
    count: "48 arrangements",
  },
  {
    title: "Anniversary",
    count: "36 arrangements",
  },
  {
    title: "Sympathy & Tribute",
    count: "24 arrangements",
  },
  {
    title: "Just Because",
    count: "52 arrangements",
  },
];

export default function OccasionSection() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-10 md:px-6 md:py-20">

      {/* Header */}
      <div className="mb-10">

        <h2 className="mb-2 text-2xl font-normal md:text-3xl">
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
            <div className="mb-3 flex aspect-square items-center justify-center rounded-lg bg-gray-100 text-gray-300 transition group-hover:bg-gray-200">
              <ImageIcon size={28} />
            </div>

            {/* Content */}
            <h3 className="text-sm font-medium">
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