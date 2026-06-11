

import { useState } from "react";

export default function CustomerDetails() {

    const [form, setForm] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
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
                Customer details
            </h2>


            {/* First + Last Name */}
            <div className="grid grid-cols-2 gap-3 mb-4">

                <div>
                    <label className="block text-xs font-medium text-gray-700 mb-1.5">
                        First name
                    </label>

                    <input
                        type="text"
                        placeholder="e.g. Olivia"
                        value={form.firstName}
                        onChange={(e) =>
                            handleChange("firstName", e.target.value)
                        }
                        className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-300"
                    />
                </div>


                <div>
                    <label className="block text-xs font-medium text-gray-700 mb-1.5">
                        Last name
                    </label>

                    <input
                        type="text"
                        placeholder="e.g. Bennett"
                        value={form.lastName}
                        onChange={(e) =>
                            handleChange("lastName", e.target.value)
                        }
                        className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-300"
                    />
                </div>

            </div>



            {/* Email */}
            <div className="mb-4">

                <label className="block text-xs font-medium text-gray-700 mb-1.5">
                    Email
                </label>

                <input
                    type="email"
                    placeholder="name@email.com"
                    value={form.email}
                    onChange={(e) =>
                        handleChange("email", e.target.value)
                    }
                    className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-300"
                />

            </div>



            {/* Phone */}
            <div>

                <label className="block text-xs font-medium text-gray-700 mb-1.5">
                    Phone
                </label>

                <input
                    type="text"
                    placeholder="+1 (555) 000-0000"
                    value={form.phone}
                    onChange={(e) =>
                        handleChange("phone", e.target.value)
                    }
                    className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-300"
                />

            </div>


        </div>
    );
}