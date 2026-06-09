
import { useState } from "react";
export default function PricingSection() {
    const [form, setForm] = useState({
        price: "",
        compareAtPrice: "",
        sku: "",
        quantity: "",
    });

    const handleChange = (field, value) => {
        setForm((prev) => ({ ...prev, [field]: value }));
    };

    return (
        <div className="border border-gray-200 rounded-xl p-5">
            <h2 className="text-sm font-semibold text-gray-900 mb-4">
                Pricing
            </h2>

            <div className="grid grid-cols-2 gap-3 mb-4">
                <div>
                    <label className="block text-xs font-medium text-gray-700 mb-1.5">
                        Price
                    </label>
                    <div className="relative">
                        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-sm text-gray-400">
                            $
                        </span>
                        <input
                            value={form.price}
                            onChange={(e) => handleChange("price", e.target.value)}
                            placeholder="0.00"
                            className="w-full border border-gray-200 rounded-lg pl-6 pr-3 py-2 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-300"
                        />
                    </div>
                </div>

                <div>
                    <label className="block text-xs font-medium text-gray-700 mb-1.5">
                        Compare-at price
                    </label>
                    <div className="relative">
                        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-sm text-gray-400">
                            $
                        </span>
                        <input
                            value={form.compareAtPrice}
                            onChange={(e) => handleChange("compareAtPrice", e.target.value)}
                            placeholder="0.00"
                            className="w-full border border-gray-200 rounded-lg pl-6 pr-3 py-2 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-300"
                        />
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
                <div>
                    <label className="block text-xs font-medium text-gray-700 mb-1.5">
                        SKU
                    </label>
                    <input
                        type="text"
                        value={form.sku}
                        onChange={(e) => handleChange("sku", e.target.value)}
                        placeholder="APX-0000"
                        className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-300"
                    />
                </div>

                <div>
                    <label className="block text-xs font-medium text-gray-700 mb-1.5">
                        Quantity
                    </label>
                    <input
                        value={form.quantity}
                        onChange={(e) => handleChange("quantity", e.target.value)}
                        placeholder="0"
                        className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-300"
                    />
                </div>
            </div>
        </div>
    );
}