import { useState } from "react";

export default function Address() {

    const [form, setForm] = useState({
        address: "",
        city: "",
        state: "",
        zipCode: "",
        country: "",
    });


    const handleChange = (field: string, value: string) => {
        setForm((prev) => ({
            ...prev,
            [field]: value,
        }));
    };


    return (
        <div className="border border-gray-200 rounded-xl p-5">
            <h2 className="text-sm font-semibold text-gray-900 mb-4">
                Address
            </h2>


            {/* Street Address */}
            <div className="mb-4">
                <label className="block text-xs font-medium text-gray-700 mb-1.5">
                    Address
                </label>

                <input
                    type="text"
                    placeholder="Street address"
                    value={form.address}
                    onChange={(e) =>
                        handleChange("address", e.target.value)
                    }
                    className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-300"
                />
            </div>


            {/* City + State */}
            <div className="grid grid-cols-2 gap-3 mb-4">

                <div>
                    <label className="block text-xs font-medium text-gray-700 mb-1.5">
                        City
                    </label>

                    <input
                        type="text"
                        placeholder="City"
                        value={form.city}
                        onChange={(e) =>
                            handleChange("city", e.target.value)
                        }
                        className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-300"
                    />
                </div>


                <div>
                    <label className="block text-xs font-medium text-gray-700 mb-1.5">
                        State
                    </label>

                    <input
                        type="text"
                        placeholder="State"
                        value={form.state}
                        onChange={(e) =>
                            handleChange("state", e.target.value)
                        }
                        className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-300"
                    />
                </div>

            </div>


            {/* ZIP + Country */}
            <div className="grid grid-cols-2 gap-3">

                <div>
                    <label className="block text-xs font-medium text-gray-700 mb-1.5">
                        ZIP code
                    </label>

                    <input
                        type="text"
                        placeholder="ZIP"
                        value={form.zipCode}
                        onChange={(e) =>
                            handleChange("zipCode", e.target.value)
                        }
                        className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-300"
                    />
                </div>


                <div>
                    <label className="block text-xs font-medium text-gray-700 mb-1.5">
                        Country
                    </label>

                    <input
                        type="text"
                        placeholder="Country"
                        value={form.country}
                        onChange={(e) =>
                            handleChange("country", e.target.value)
                        }
                        className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-300"
                    />
                </div>

            </div>

        </div>
    );
}