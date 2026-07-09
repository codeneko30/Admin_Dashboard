









import { Link } from "react-router";
import { useState } from "react";
import Sidebar from "~/components/Sidebar";
import BottomNav from "../../../components/BottomNav";
import DataTable from "~/components/DataTable";
import Button from "~/components/Button";
import { ChevronRight } from "lucide-react";
import { createColumnHelper } from "@tanstack/react-table";

export function loader() {
  const customers = [
    { id: 1, name: "Olivia Bennett", avatar: "https://i.pravatar.cc/100?img=1", email: "olivia.bennett@email.com", orders: 12, totalSpent: 2480, status: "Active" },
    { id: 2, name: "Marcus Chen", avatar: "https://i.pravatar.cc/100?img=2", email: "marcus.chen@email.com", orders: 8, totalSpent: 1920, status: "Active" },
    { id: 3, name: "Aisha Patel", avatar: "https://i.pravatar.cc/100?img=3", email: "aisha.patel@email.com", orders: 21, totalSpent: 4310, status: "VIP" },
    { id: 4, name: "Sofia Reyes", avatar: "https://i.pravatar.cc/100?img=4", email: "sofia.reyes@email.com", orders: 3, totalSpent: 540, status: "Active" },
    { id: 5, name: "Jordan Wright", avatar: "https://i.pravatar.cc/100?img=5", email: "jordan.wright@email.com", orders: 1, totalSpent: 84, status: "New" },
    { id: 6, name: "Lucas Hartmann", avatar: "https://i.pravatar.cc/100?img=6", email: "lucas.hartmann@email.com", orders: 5, totalSpent: 1240, status: "Active" },
    { id: 7, name: "Emma Johansson", avatar: "https://i.pravatar.cc/100?img=7", email: "emma.j@email.com", orders: 0, totalSpent: 0, status: "Inactive" },
    { id: 8, name: "Noah Kim", avatar: "https://i.pravatar.cc/100?img=8", email: "noah.kim@email.com", orders: 14, totalSpent: 3005, status: "Active" },
  ];
  return customers;
}

const columnHelper = createColumnHelper<any>();

// ========== DESKTOP COLUMNS ==========
const desktopCustomerColumns = [
  columnHelper.accessor("name", {
    header: "Customer",
    cell: (info) => {
      const customer = info.row.original;
      return (
        <Link to={`/customer-details/${customer.id}`} className="flex items-center gap-3">
          <img
            src={customer.avatar}
            alt={customer.name}
            className="w-8 h-8 rounded-full object-cover"
          />
          <span className="text-sm font-semibold text-gray-900">
            {info.getValue()}
          </span>
        </Link>
      );
    },
  }),
  columnHelper.accessor("email", {
    header: "Email",
    cell: (info) => <span className="text-sm text-gray-500">{info.getValue()}</span>,
  }),
  columnHelper.accessor("orders", {
    header: "Orders",
    cell: (info) => <span className="text-sm text-gray-700">{info.getValue()}</span>,
  }),
  columnHelper.accessor("totalSpent", {
    header: "Total spent",
    cell: (info) => (
      <span className="text-sm font-medium text-gray-900">
        ${info.getValue().toLocaleString("en-US", { minimumFractionDigits: 2 })}
      </span>
    ),
  }),
  columnHelper.accessor("status", {
    header: "Status",
    cell: (info) => {
      const status = info.getValue();
      if (status === "VIP") {
        return (
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-gray-800 text-white">
            VIP
          </span>
        );
      } else if (status === "Inactive") {
        return <span className="text-sm text-gray-400">Inactive</span>;
      } else if (status === "Active") {
        return <span className="text-sm text-gray-700">Active</span>;
      } else {
        return <span className="text-sm text-gray-700">New</span>;
      }
    },
  }),
];

// ========== MOBILE COLUMNS ==========
const mobileCustomerColumns = [
  columnHelper.display({
    id: "mobileRow",
    header: "Customers",
    cell: (info) => {
      const customer = info.row.original;
      return (
        <Link
          to={`/customer-details/${customer.id}`}
          className="flex items-center justify-between"
        >
          {/* LEFT */}
          <div className="flex min-w-0 flex-1 items-center gap-3">
            <img
              src={customer.avatar}
              alt={customer.name}
              className="h-12 w-12 rounded-full object-cover flex-shrink-0"
            />
            <div className="min-w-0">
              <p className="font-semibold text-gray-900 whitespace-nowrap">{customer.name}</p>
              <p className="truncate text-sm text-gray-500">{customer.email}</p>
              <p className="mt-2 text-xs text-gray-400">{customer.orders} orders</p>
            </div>
          </div>

          {/* RIGHT */}
          <div className="flex items-center gap-3 flex-shrink-0">
            <div className="text-right">
              <p className="text-lg font-bold text-gray-900">
                ${customer.totalSpent.toLocaleString()}
              </p>
              <div className="mt-2">
                {customer.status === "VIP" ? (
                  <span className="rounded-full bg-gray-900 px-3 py-1 text-xs font-semibold text-white">
                    VIP
                  </span>
                ) : customer.status === "Inactive" ? (
                  <span className="inline-flex rounded-full bg-gray-100 px-2 py-1 text-[10px] font-semibold text-gray-700">
                    Inactive
                  </span>
                ) : customer.status === "New" ? (
                  <span className="inline-flex rounded-full bg-gray-50 px-2 py-1 text-[10px] font-semibold text-gray-700">
                    New
                  </span>
                ) : (
                  <span className="inline-flex rounded-full bg-gray-100 px-2 py-1 text-[10px] font-semibold text-gray-700">
                    Active
                  </span>
                )}
              </div>
            </div>
            <ChevronRight className="h-4 w-4 text-gray-300 flex-shrink-0" />
          </div>
        </Link>
      );
    },
  }),
];

export default function CustomersPage({ loaderData }) {
  const customers = loaderData;
  const [activeItem, setActiveItem] = useState("");
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState("All");

  const filteredCustomers = customers.filter((customer) => {
    const matchSearch =
      customer.name.toLocaleLowerCase().includes(search.toLocaleLowerCase()) ||
      customer.email.toLocaleLowerCase().includes(search.toLocaleLowerCase());
    const matchStatus = selected === "All" || customer.status === selected;
    return matchSearch && matchStatus;
  });

  const totalCustomers = 1204;

  return (
    <>
      {/* DESKTOP */}
      <div className="hidden md:block min-h-screen bg-gray-50">
        <Sidebar activeItem={activeItem} setActiveItem={setActiveItem} />
        <main className="md:ml-56 p-6 space-y-6 max-w-6xl mx-auto">
          <div className="flex items-start justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Customers</h1>
              <p className="text-sm text-gray-500 mt-1">
                View and manage your customers.
              </p>
            </div>
            <Link to="/add-customer">
              <Button variant="primary">Add customer</Button>
            </Link>
          </div>

          {/* SEARCH + FILTER — FIXED with min-w-0 and bg-white */}
          <div className="flex gap-2 min-w-0">
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search customers..."
              className="flex-1 min-w-0 rounded-md border border-gray-200 bg-white px-3 py-2 text-sm outline-none focus:border-gray-400 text-gray-900 placeholder-gray-400"
            />
            <select
              value={selected}
              onChange={(e) => setSelected(e.target.value)}
              className="w-40 flex-shrink-0 rounded-md border border-gray-200 bg-white px-3 py-2 text-sm text-gray-700"
            >
              <option value="All">All</option>
              <option value="Active">Active</option>
              <option value="VIP">VIP</option>
              <option value="New">New</option>
              <option value="Inactive">Inactive</option>
            </select>
          </div>

          {/* DESKTOP TABLE */}
          <DataTable data={filteredCustomers} columns={desktopCustomerColumns} />

          {/* FOOTER — FIXED buttons */}
          <div className="mt-4 flex items-center justify-between">
            <p className="text-sm text-gray-500">
              Showing 1–{filteredCustomers.length} of {totalCustomers.toLocaleString()} customers
            </p>
            <div className="flex gap-2">
              <Button variant="outline" size="sm">Previous</Button>
              <Button variant="outline" size="sm">Next</Button>
            </div>
          </div>
        </main>
      </div>

      {/* MOBILE */}
      <div className="md:hidden min-h-screen bg-white pb-20">
        <main className="p-4 space-y-4">
          <div className="flex items-start justify-between">
            <div>
              <h1 className="text-lg font-semibold text-gray-900">Customers</h1>
              <p className="text-xs text-gray-500">Manage customers</p>
            </div>
            <Link to="/add-customer">
              <Button variant="primary" size="sm" className="px-3 py-2">
                Add customer
              </Button>
            </Link>
          </div>

          {/* SEARCH + FILTER — FIXED */}
          <div className="flex gap-2 min-w-0">
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search..."
              className="flex-1 min-w-0 rounded-md border border-gray-200 bg-white px-3 py-2 text-sm outline-none text-gray-900 placeholder-gray-400"
            />
            <select
              value={selected}
              onChange={(e) => setSelected(e.target.value)}
              className="w-[120px] flex-shrink-0 rounded-md border border-gray-200 bg-white px-3 py-2 text-sm text-gray-700"
            >
              <option value="All">All</option>
              <option value="Active">Active</option>
              <option value="VIP">VIP</option>
              <option value="New">New</option>
              <option value="Inactive">Inactive</option>
            </select>
          </div>

          {/* MOBILE TABLE */}
          <DataTable data={filteredCustomers} columns={mobileCustomerColumns} enableSorting={false} />
        </main>
        <BottomNav activeItem={activeItem} setActiveItem={setActiveItem} />
      </div>
    </>
  );
}