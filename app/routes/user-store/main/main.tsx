



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
                        <h2 className="mb-1 text-2xl font-normal md:text-3xl">This week's favorites</h2>
                        <p className="text-sm text-gray-500">Fresh picks our florists love.</p>
                    </div>
                    <button className="text-sm underline">View all</button>
                </div>

                {/* ProductGrid */}
                 <ProductGrid/>
            </section> 
          

            {/* ── VALUE PROPS ── */}

            <ValuesSection />
            {/* ── NEWSETTER ── */}

            <section className="px-5 py-10 text-center md:py-20">
                <h2 className="mb-3 text-2xl font-normal md:text-4xl">
                    Get 10% off your first order
                </h2>
                <p className="mb-8 text-sm text-gray-500">Join Bloom Mail.</p>

                <div className="mx-auto flex max-w-md flex-col gap-3 sm:flex-row sm:gap-2">
                    <input
                        type="email"
                        placeholder="you@email.com"
                        className="flex-1 border border-gray-300 px-4 py-3 text-sm outline-none focus:border-gray-500"
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