import { useState } from "react";
import { Link } from "react-router";
import Sidebar from "../components/Sidebar";
import BlackButton from "~/components/BlackButton";
import CustomerTable from "~/components/CustomersTable";
import PreviousButton from "~/components/PreviousButton";
import NextButton from "~/components/NextButton";

const customers = [
    {
        id: 1,
        name: "Olivia Bennett",
        avatar: "https://i.pravatar.cc/40?img=1",
        email: "olivia.bennett@email.com",
        orders: 12,
        totalSpent: 2480.0,
        status: "Active",
    },
    {
        id: 2,
        name: "Marcus Chen",
        avatar: "https://i.pravatar.cc/40?img=2",
        email: "marcus.chen@email.com",
        orders: 8,
        totalSpent: 1920.0,
        status: "Active",
    },
    {
        id: 3,
        name: "Aisha Patel",
        avatar: "https://i.pravatar.cc/40?img=3",
        email: "aisha.patel@email.com",
        orders: 21,
        totalSpent: 4310.0,
        status: "VIP",
    },
    {
        id: 4,
        name: "Sofia Reyes",
        avatar: "https://i.pravatar.cc/40?img=4",
        email: "sofia.reyes@email.com",
        orders: 3,
        totalSpent: 540.0,
        status: "Active",
    },
    {
        id: 5,
        name: "Jordan Wright",
        avatar: "https://i.pravatar.cc/40?img=5",
        email: "jordan.wright@email.com",
        orders: 1,
        totalSpent: 84.0,
        status: "New",
    },
    {
        id: 6,
        name: "Lucas Hartmann",
        avatar: "https://i.pravatar.cc/40?img=6",
        email: "lucas.hartmann@email.com",
        orders: 5,
        totalSpent: 1240.0,
        status: "Active",
    },
    {
        id: 7,
        name: "Emma Johansson",
        avatar: "https://i.pravatar.cc/40?img=7",
        email: "emma.j@email.com",
        orders: 0,
        totalSpent: 0.0,
        status: "Inactive",
    },
    {
        id: 8,
        name: "Noah Kim",
        avatar: "https://i.pravatar.cc/40?img=8",
        email: "noah.kim@email.com",
        orders: 14,
        totalSpent: 3005.0,
        status: "Active",
    },
];

export default function CustomersPage() {
    const [activeItem, setActiveItem] = useState("");
    const [search, setSearch] = useState("");
    const [selected, setSelected] = useState("Select an item");
    const [dropdownOpen, setDropdownOpen] = useState(false);


    const totalCustomers = 1204;

    const dropdownOptions = ["All", "Active", "VIP", "New", "Inactive"];

    const filteredCustomers = customers.filter((customer) => {
        const matchesSearch =
            customer.name.toLowerCase().includes(search.toLowerCase()) ||
            customer.email.toLowerCase().includes(search.toLowerCase());

        const matchesFilter =
            selected === "Select an item" ||
            selected === "All" ||
            customer.status === selected;

        return matchesSearch && matchesFilter;
    });

    return (
        <div className="flex min-h-screen bg-white">
            {/* Sidebar */}
            <Sidebar
                activeItem={activeItem}
                setActiveItem={setActiveItem}
            />

            <main className="ml-56 flex-1 p-8">
                {/* Header */}
                <div className="mb-6 flex items-start justify-between">
                    <div>
                        <h1 className="text-2xl font-bold text-gray-900">
                            Customers
                        </h1>

                        <p className="mt-1 text-sm text-gray-500">
                            View and manage your customers.
                        </p>
                    </div>

                    {/* add customer */}

                    {/* <BlackButton label="Add customer"/> */}
                    <Link to="/add-customer">
                        <BlackButton label="Add customer" />
                    </Link>

                </div>

                {/* Search + Filter */}
                <div className="mb-4 flex gap-2">
                    <div className="flex-1">
                        <input
                            type="text"
                            placeholder="Search customers..."
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-300"
                        />
                    </div>

                    {/* Dropdown */}
                    <div className="relative">
                        <button
                            onClick={() => setDropdownOpen(!dropdownOpen)}
                            className="flex items-center gap-2 border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-600 bg-white hover:bg-gray-50 transition-colors min-w-[145px] justify-between"
                        >
                            <span>{selected}</span>

                            <svg
                                className="w-4 h-4 text-gray-400"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M19 9l-7 7-7-7"
                                />
                            </svg>
                        </button>

                        {dropdownOpen && (
                            <div className="absolute right-0 mt-1 w-44 bg-white border border-gray-200 rounded-lg shadow-lg z-10">
                                {dropdownOptions.map((option) => (
                                    <button
                                        key={option}
                                        onClick={() => {
                                            setSelected(option);
                                            setDropdownOpen(false);
                                        }}
                                        className="block w-full text-left px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 first:rounded-t-lg last:rounded-b-lg"
                                    >
                                        {option}
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>
                </div>


                {/* Table */}
                <CustomerTable data={filteredCustomers} />

                {/* Footer */}
                <div className="mt-4 flex items-center justify-between">
                    <p className="text-sm text-gray-500">
                        Showing 1–{filteredCustomers.length} of{" "}
                        {totalCustomers.toLocaleString()} customers
                    </p>

                    <div className="flex gap-2">

                        {/* previus button */}
                        <PreviousButton />

                        {/* next button */}
                        <NextButton />
                    </div>
                </div>
            </main>
        </div>
    );
}