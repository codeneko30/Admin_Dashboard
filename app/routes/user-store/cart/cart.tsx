
import Header from "~/components/Header";
import Footer from "~/components/Footer"
import CartItems from "./_components/Cart-Items";
import { Link } from "react-router";

export default function ShoppingCart() {
  

  return (
    <div className="min-h-screen bg-white flex flex-col">

      <Header />

      <main className="flex-grow pt-6 pb-10">

        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 lg:grid-cols-[1fr_300px] p-4 sm:p-6">

          {/* Cart */}
          <CartItems/>

          {/* Summary */}
          <div className="h-fit rounded-lg border border-gray-200 p-4 sm:p-5">
            <h2 className="mb-5 sm:mb-6 text-xl sm:text-2xl font-semibold text-gray-900">
              Summary
            </h2>

            <div className="space-y-4 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-600">Subtotal</span>
                <span>$69.00</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Shipping</span>
                <span className="text-right text-gray-500">
                  Calculated<br />at checkout
                </span>
              </div>
            </div>

            <div className="my-5 border-t border-gray-200" />

            <div className="mb-5 flex justify-between font-semibold">
              <span>Total</span>
              <span>$69.00</span>
            </div>

            <Link to='/checkout'>

            <button className="w-full rounded-md bg-black px-4 py-3 text-sm font-medium text-white transition hover:bg-gray-900">
              Checkout
            </button>
            
            
            </Link>

            
          </div>

        </div>
      </main>

      <Footer />

    </div>
  );
}