import { ImageIcon } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="mx-auto grid max-w-7xl items-center gap-14 px-5 py-10 md:px-6 md:py-20 lg:grid-cols-2">

      {/* LEFT */}
      <div>

        <p className="mb-4 text-[10px] uppercase tracking-[0.3em] text-gray-500">
          New · Spring Collection
        </p>

        <h1 className="mb-5 text-4xl font-normal leading-tight md:text-6xl">
          Flowers that say
          <br />
          it better.
        </h1>

        <p className="mb-8 max-w-md text-sm leading-relaxed text-gray-500 md:text-base">
          Hand-tied arrangements from local growers,
          delivered fresh to your door.
        </p>

        {/* ACTION */}
        <div className="flex flex-col gap-3 sm:flex-row sm:gap-4">

          <button className="w-full bg-black px-8 py-3.5 text-sm text-white transition hover:bg-gray-800 sm:w-auto">
            Shop the collection
          </button>

          <button className="w-full border border-gray-300 px-8 py-3.5 text-sm transition hover:bg-gray-50 sm:w-auto">
            How it works
          </button>

        </div>

        {/* MOBILE IMAGE */}
        <div className="mt-6 flex aspect-[4/3] items-center justify-center rounded-xl bg-gray-100 text-gray-300 lg:hidden">
          <ImageIcon size={40} />
        </div>

      </div>

      {/* DESKTOP IMAGE */}
      <div className="hidden aspect-[4/5] items-center justify-center rounded-2xl bg-gray-100 text-gray-300 lg:flex">
        <ImageIcon size={70} />
      </div>

    </section>
  );
}