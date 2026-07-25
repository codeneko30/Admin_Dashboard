






// routes/main.tsx

import Header from "~/components/Header";
import Footer from "~/components/Footer";
import HeroSection from "./_components/Hero";
import OccasionSection from "./_components/Occasion";
import ValuesSection from "./_components/Value";
import ProductGrid from "~/components/Product-Grid"

export default function FloristaPage() {
    return (
        <div className="min-h-screen bg-white">

            <Header />

            {/* ── HERO ── */}
            <HeroSection />

            {/* ── SHOP BY OCCASION ── */}
            <OccasionSection />

            {/* ── THIS WEEK'S FAVORITES ── */}
            <section className="mx-auto max-w-7xl px-5 py-10 md:px-6 md:py-20">

                <div className="mb-8 flex items-end justify-between">
                    <div>



                        <h2 className="mb-1 text-2xl font-normal text-black md:text-3xl">
                            This week's favorites
                        </h2>
                        <p className="text-sm text-gray-500">

                            Fresh picks our florists love.
                        </p>
                    </div>
                    <button className="text-sm underline">View all</button>
                </div>

                {/* 
                  ✅ Desktop: centered with same width as shop.tsx content area
                  9.5rem = (w-64 + gap-12) / 2  →  exactly matches shop's flex-1 width
                */}
                <div className="lg:mx-[9.5rem]">
                    <ProductGrid />
                </div>
            </section>

            {/* ── VALUE PROPS ── */}
            <ValuesSection />

            
        


            {/* ── NEWSLETTER ── */}
            <section className="px-5 py-10 text-center md:py-20">
                {/* ✅ explicit text-black */}
                <h2 className="mb-3 text-2xl font-normal text-black md:text-4xl">
                    Get 10% off your first order
                </h2>
                <p className="mb-8 text-sm text-gray-500">Join Bloom Mail.</p>

                <div className="mx-auto flex max-w-md flex-col gap-3 sm:flex-row sm:gap-2">
                    {/* ✅ explicit text-gray-900 for input text + placeholder color */}
                    <input
                        type="email"
                        placeholder="you@email.com"
                        className="flex-1 border border-gray-300 px-4 py-3 text-sm text-gray-900 outline-none placeholder:text-gray-400 focus:border-gray-500"
                    />
                    <button className="bg-black px-8 py-3 text-sm text-white transition hover:bg-gray-800">
                        Subscribe
                    </button>
                </div>
            </section>

            <Footer />
        </div>
    );
}