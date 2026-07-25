





// routes/_components/Hero.tsx

import { ImageIcon } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="mx-auto grid max-w-7xl items-center gap-14 px-5 py-10 md:px-6 md:py-20 lg:grid-cols-2">
      {/* LEFT */}
      <div>
        <p className="mb-4 text-[10px] uppercase tracking-[0.3em] text-gray-500">
          New · Spring Collection
        </p>

        {/* ✅ explicit text-black added */}
        <h1 className="mb-5 text-4xl font-normal leading-tight text-black md:text-6xl">
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

          {/* ✅ explicit bg-white + text-black added */}
          <button className="w-full border border-gray-300 bg-white px-8 py-3.5 text-sm text-black transition hover:bg-gray-50 sm:w-auto">
            How it works
          </button>
        </div>

        {/* MOBILE IMAGE */}
        <div className="mt-6 flex aspect-[4/3] items-center justify-center overflow-hidden rounded-xl bg-gray-100 text-gray-300 lg:hidden">
          <img
            src="https://img.magnific.com/premium-photo/baby-is-wicker-chair-with-flowers-it_636537-236664.jpg?semt=ais_hybrid&w=740&q=80"
            alt="Spring Collection"
            className="h-full w-full object-cover"
            loading="lazy"
          />
        </div>
      </div>

      {/* DESKTOP IMAGE */}
      <div className="hidden aspect-[4/5] items-center justify-center overflow-hidden rounded-2xl bg-gray-100 text-gray-300 lg:flex">
        <img
          src="https://img.magnific.com/premium-photo/baby-is-wicker-chair-with-flowers-it_636537-236664.jpg?semt=ais_hybrid&w=740&q=80"
          alt="Spring Collection"
          className="h-full w-full object-cover"
          loading="lazy"
        />
      </div>
    </section>
  );
}