import { useState } from "react";
import Sidebar from "~/components/Sidebar";
import BackButton from "~/components/BackButton";
import SecondaryButton from "~/components/SecondaryButton";
import BlackButton from "~/components/BlackButton";
import CustomerDetails from "~/components/CustomerDetails";
import Addres from "../components/Address"
import CustomerStatus from "../components/CustomerStatus"
import Marketing from "~/components/Marketing";


export default function AddCustomerPage() {


    const [form, setForm] = useState({

        address: "",
        city: "",
        state: "",
        zipCode: "",
        country: "",
        status: "",
        tags: "",
    });
 

    const [activeItem, setActiveItem] = useState("");

    const handleChange = (field, value) => {
        setForm((prev) => ({ ...prev, [field]: value }));
    };



    return (
        <div className="min-h-screen bg-white font-sans">

            <Sidebar activeItem={activeItem} setActiveItem={setActiveItem} />

            <main className=" ml-56 max-w-4xl mx-auto px-6 py-8">

                {/* ── Back Button ── */}


                <BackButton label="Customers" />


                {/* ── Header ── */}
                <div className="flex justify-between items-center mb-6">
                    <h1 className="text-2xl font-bold text-gray-900">Add customer</h1>

                    <div className="flex gap-2">

                        {/* discard button */}

                        <SecondaryButton label="Discard" />

                        {/* save customer button */}


                        <BlackButton label="Save customer" />

                    </div>
                </div>

                {/* ── Main Grid ── */}
                <div className="grid grid-cols-3 gap-5">

                    {/* ── Left Column ── */}
                    <div className="col-span-2 space-y-5">

                        {/* Customer Details Card */}

                        <CustomerDetails />

                        {/* Address Card */}

                        <Addres />
                    </div>

                    {/* ── Right Column ── */}
                    <div className="col-span-1 space-y-5">

                        {/* Status Card */}

                        <CustomerStatus/>

                        {/* Marketing Card */}

                        <Marketing/>

                        {/* Tags Card */}
                        <div className="border border-gray-200 rounded-xl p-5">
                            <h2 className="text-sm font-semibold text-gray-900 mb-3">Tags</h2>
                            <div>
                                <label className="block text-xs font-medium text-gray-700 mb-1.5">
                                    Tags
                                </label>
                                <input
                                    type="text"
                                    placeholder="Add tags"
                                    value={form.tags}
                                    onChange={(e) => handleChange("tags", e.target.value)}
                                    className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-300"
                                />
                            </div>
                        </div>

                    </div>
                </div>
            </main>
        </div>
    );
};

