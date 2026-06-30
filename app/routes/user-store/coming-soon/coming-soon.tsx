import Header from "~/components/Header";
import Footer from "~/components/Footer";

export default function ComingSoon() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />

      <main className="flex-1 flex items-center justify-center px-5 py-16 sm:py-20">
        <div className="w-full max-w-2xl text-center">

          {/* Heading */}
          <h1 className="text-5xl sm:text-6xl font-serif text-gray-900 mb-5">
            Coming Soon
          </h1>

          {/* Subtitle */}
          <p className="text-lg text-gray-500 leading-relaxed max-w-xl mx-auto mb-8">
            We're working hard to bring you an amazing new product.
            Sign up to be the first to know when we launch.
          </p>

          {/* Signup form */}
          <form className="w-full flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              required
              className="flex-1 px-4 py-2.5 border border-gray-300 rounded-lg text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-900/10"
            />

            <button
              type="submit"
              className="px-6 py-2.5 bg-gray-900 text-white text-sm font-semibold rounded-lg hover:bg-gray-800 transition whitespace-nowrap"
            >
              Notify Me
            </button>
          </form>

          
        </div>
      </main>

      <Footer />
    </div>
  );
}