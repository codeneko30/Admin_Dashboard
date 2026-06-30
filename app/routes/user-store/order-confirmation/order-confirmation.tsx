import Header from "~/components/Header";
import Footer from "~/components/Footer";
import { ImageIcon, FileText, Edit3 } from "lucide-react";

const ORDER_DATA = {
  orderNumber: "785773274",
  totalPages: 1,
  currentPage: 1,
  pointsEarned: 165,
  product: {
    name: "Pixie",
    description: "Mystic Melody with Birthday Candles",
    image: ""
  },
  message: {
    text: `Dearest mom,

Wishing you a super happy birthday, we wish you another beautiful new year of life. We are thinking of you from Mexico!

We love you!`
  }
};

export default function OrderConfirmationPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col">

      <Header />

      <main className="flex-grow pt-6 pb-10">

        {/* SUCCESS HEADER */}
        <section className="py-10 sm:py-16 px-4 text-center">
          <div className="max-w-2xl mx-auto space-y-4 sm:space-y-6">

            <h1 className="text-3xl sm:text-4xl font-bold sm:font-serif sm:font-medium text-black leading-tight">
              Thank you for your order!
            </h1>

            <p className="text-sm text-gray-500 leading-relaxed">
              This is your confirmation. We have sent you an email with the details of your order.
              (Can't find it? Check your spam folder.)
            </p>

            <div className="pt-2 sm:pt-4">
              <button className="bg-black text-white px-8 py-2.5 rounded-lg sm:rounded-md text-xs sm:text-sm font-semibold sm:font-medium hover:bg-gray-800 transition-colors">
                Earn {ORDER_DATA.pointsEarned} points
              </button>
            </div>

            <p className="text-xs text-gray-400">
              Your points will show as 'pending' until your order is on its way.
            </p>

          </div>
        </section>

        <div className="w-full border-t border-gray-100" />

        {/* ORDER DETAILS */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6 pb-16 sm:pb-24">

          <div className="flex justify-between items-center text-xs text-gray-500 mb-6 sm:mb-12 mt-5 sm:mt-6">
            <span>
              Order number:{" "}
              <span className="text-black font-medium">{ORDER_DATA.orderNumber}</span>
            </span>
            <span>{ORDER_DATA.currentPage} of {ORDER_DATA.totalPages}</span>
          </div>

          {/* Mobile: stacked; Desktop: side-by-side */}
          <div className="flex flex-col md:grid md:grid-cols-[240px_1fr] gap-6 md:gap-16">

            {/* Product Image */}
            <div className="aspect-[4/3] md:aspect-square bg-gray-100 rounded-xl md:rounded-lg flex items-center justify-center text-gray-300">
              <ImageIcon size={40} strokeWidth={1} className="sm:w-12 sm:h-12" />
            </div>

            {/* Product Info */}
            <div className="flex flex-col">

              <div className="mb-6 sm:mb-10">
                <h2 className="text-base sm:text-xl font-bold sm:font-medium text-black mb-1">
                  {ORDER_DATA.product.name}
                </h2>
                <p className="text-sm text-gray-500">
                  {ORDER_DATA.product.description}
                </p>
              </div>

              <div className="border-t border-gray-100 pt-5 md:border-0 md:pt-0 space-y-3 sm:space-y-4">
                <h3 className="text-sm font-semibold sm:font-bold sm:uppercase sm:tracking-wider text-black">
                  Message
                </h3>
                <div className="text-sm text-gray-600 leading-relaxed whitespace-pre-line">
                  {ORDER_DATA.message.text}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3 sm:gap-4 mt-8 sm:mt-12">
                <button className="flex-1 sm:flex-none flex items-center justify-center gap-2 border border-gray-200 sm:border-gray-200 px-4 sm:px-6 py-3 sm:py-2 rounded-lg sm:rounded-md text-sm font-medium text-gray-900 hover:bg-gray-50 transition">
                  <FileText size={16} />
                  Get invoice
                </button>
                <button className="flex-1 sm:flex-none flex items-center justify-center gap-2 border border-gray-200 sm:border-gray-200 px-4 sm:px-6 py-3 sm:py-2 rounded-lg sm:rounded-md text-sm font-medium text-gray-900 hover:bg-gray-50 transition">
                  <Edit3 size={16} />
                  Edit order
                </button>
              </div>

            </div>
          </div>

        </section>

      </main>

      <Footer />

    </div>
  );
}