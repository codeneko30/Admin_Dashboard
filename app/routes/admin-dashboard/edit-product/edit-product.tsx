



// import { useParams } from "react-router";
// import { useState } from "react";
// import Sidebar from "~/components/Sidebar";
// import BottomNav from "~/components/BottomNav";
// import DesktopBackButton from "~/components/Desktop-BackButton";
// import DesktopSecondaryButton from "../../../components/Desktop-SecondaryButton";
// import DesktopBlackButton from "~/components/Desktop-BlackButton";
// import ProductDetails from "~/components/ProductDetails";
// import MediaSection from "~/components/MediaSection";
// import PricingSection from "~/components/PricingSection";
// import StatusCard from "~/components/StatusCard";
// import OrganizationSection from "~/components/OrganizationSection";
// import { ChevronLeft, Search, ChevronDown, Image } from "lucide-react";


// export default function Edit_product() {


//   const [activeItem, setActiveItem] = useState("");
//   const { id } = useParams()


//   return (
//     <div className="min-h-screen bg-gray-50 font-sans">

//       {/* ── Mobile sticky header (hidden on md+) ── */}
//       <div className="sticky top-0 z-10 flex items-center justify-between border-b border-gray-200 bg-white px-4 py-3 md:hidden">
//         <button className="text-gray-500" aria-label="Back">
//           <ChevronLeft size={20} />
//         </button>
//         <h1 className="text-base font-semibold text-gray-900">Edit product</h1>
//         <Search size={20} className="text-gray-400" />
//       </div>

//       <Sidebar activeItem={activeItem} setActiveItem={setActiveItem} />

//       <main className="mx-auto max-w-4xl px-4 py-4 md:ml-60 md:px-6 md:py-8">

//         {/* Back button (hidden on mobile) */}

//         <DesktopBackButton label='  Products' />

//         {/* ── Header ── */}
//         <div className="mb-6 flex items-center justify-between gap-4">
//           <h1 className="text-2xl font-semibold text-gray-900 hidden md:block">Add product</h1>

//           {/* Desktop action buttons (hidden on mobile) */}
//           <div className="hidden gap-2 md:flex">


//             <DesktopSecondaryButton label=' Discard' />


//             <DesktopBlackButton label='  Save product' />

//           </div>
//         </div>

//         {/* ── Main Grid ── */}
//         <div className="grid gap-5 lg:grid-cols-3">

//           {/* ── Left Column ── */}
//           <div className="space-y-5 lg:col-span-2">

//             {/* Product Details */}
//             <ProductDetails />

//             {/* Media */}
//             <MediaSection />

//             {/* Pricing */}
//             <PricingSection />
//           </div>

//           {/* ── Right Column ── */}
//           <div className="space-y-5">

//             {/* Status */}
//             <StatusCard />

//             {/* Organization */}
//             <OrganizationSection />
//           </div>
//         </div>

//         {/* ── Mobile bottom Save button (hidden on md+) ── */}
//         <div id="1" className="mt-6 md:hidden mb-20">
//           <button className="w-full rounded-xl bg-gray-900 py-3.5 text-sm font-medium text-white transition-colors hover:bg-gray-800">
//             Save product
//           </button>
//         </div>

//         <div id="2">
//           <BottomNav activeItem={activeItem} setActiveItem={setActiveItem} />

//         </div>

//       </main>
//     </div>
//   );
// }




import { useState } from "react";
import Sidebar from "~/components/Sidebar";
import BottomNav from "~/fully-codebase/responsive-admin/botom-nav";
import DesktopBackButton from "~/components/Desktop-BackButton";
import DesktopSecondaryButton from "../../../components/Desktop-SecondaryButton";
import DesktopBlackButton from "~/components/Desktop-BlackButton";
import ProductDetails from "~/components/ProductDetails";
import MediaSection from "~/components/MediaSection";
import PricingSection from "~/components/PricingSection";
import StatusCard from "~/components/StatusCard";
import OrganizationSection from "~/components/OrganizationSection";
import { ChevronLeft, Search, ChevronDown, Image } from "lucide-react";



export default function EditProductPage() {


    const [activeItem, setActiveItem] = useState("");



    return (
        <div className="min-h-screen bg-gray-50 font-sans">

            {/* ── Mobile sticky header (hidden on md+) ── */}
            <div className="sticky top-0 z-10 flex items-center justify-between border-b border-gray-200 bg-white px-4 py-3 md:hidden">
                <button className="text-gray-500" aria-label="Back">
                    <ChevronLeft size={20} />
                </button>
                <h1 className="text-base font-semibold text-gray-900">Edit product</h1>
                <Search size={20} className="text-gray-400" />
            </div>

            <Sidebar activeItem={activeItem} setActiveItem={setActiveItem} />

            <main className="mx-auto max-w-4xl px-4 py-4 md:ml-60 md:px-6 md:py-8">

                {/* Back button (hidden on mobile) */}

                <DesktopBackButton label='  Products' />

                {/* ── Header ── */}
                <div className="mb-6 flex items-center justify-between gap-4">
                    <h1 className="text-2xl font-semibold text-gray-900 hidden md:block  ">Edit product</h1>

                    {/* Desktop action buttons (hidden on mobile) */}
                    <div className="hidden gap-2 md:flex">


                        <DesktopSecondaryButton label='Discard' />


                        <DesktopBlackButton label='Save product' />

                    </div>
                </div>

                {/* ── Main Grid ── */}
                <div className="grid gap-5 lg:grid-cols-3">

                    {/* ── Left Column ── */}
                    <div className="space-y-5 lg:col-span-2">

                        {/* Product Details */}
                        <ProductDetails />

                        {/* Media */}

                        <MediaSection />

                        {/* Pricing */}
                        <PricingSection />
                    </div>

                    {/* ── Right Column ── */}
                    <div className="space-y-5">

                        {/* Status */}
                        <StatusCard />

                        {/* Organization */}
                        <OrganizationSection />
                    </div>
                </div>

                {/* ── Mobile bottom Save button (hidden on md+) ── */}
                <div id="1" className="mt-6 md:hidden mb-20">
                    <button className="w-full rounded-xl bg-gray-900 py-3.5 text-sm font-medium text-white transition-colors hover:bg-gray-800">
                        Save product
                    </button>
                </div>

                <div id="2">
                    <BottomNav activeItem={activeItem} setActiveItem={setActiveItem} />
                </div>


            </main>
        </div>
    );
}