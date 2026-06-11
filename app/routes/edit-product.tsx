

import { useState } from "react";
import Sidebar from "~/components/Sidebar";

import BackButton from "~/components/BackButton";
import SecondaryButton from "../components/SecondaryButton";
import BlackButton from "~/components/BlackButton";
import ProductDetails from "~/components/ProductDetails";
import MediaSection from "~/components/MediaSection";
import PricingSection from "~/components/PricingSection";
import StatusCard from "~/components/StatusCard";
import OrganizationSection from "~/components/OrganizationSection";



export default function AddProductPage() {


    const [activeItem, setActiveItem] = useState("");

    return (
        <div className="min-h-screen bg-white font-sans">

            <Sidebar activeItem={activeItem} setActiveItem={setActiveItem} />

            <main className=" ml-60 max-w-4xl mx-auto px-6 py-8">

              <BackButton label="products"/>

                <div className="flex justify-between items-center mb-6">
                    <h1 className="text-2xl font-bold text-gray-900">Edit product</h1>
                    <div className="flex gap-2">
                        <SecondaryButton label="Delete" />
                        <SecondaryButton label="Discard" />
                        <BlackButton label="Save Product" />
                    </div>
                </div>

                <div className="grid grid-cols-3 gap-5">

                    <div className="col-span-2 space-y-5">

                        <ProductDetails />

                        {/* Media Card */}
                        <MediaSection/>

                        {/* Pricing Card */}
                        <PricingSection/>
                    </div>

                    <div className="col-span-1 space-y-5">

                        {/* status card */}

                       <StatusCard/>

                       {/* Organization */}

                       <OrganizationSection/>

                        
                    </div>
                </div>
            </main>
        </div>
    );
}