


import { Link } from "react-router";
import { useState } from "react";
import Sidebar from "~/components/Sidebar";
import BottomNav from "../../../components/BottomNav";
import DataTable from "~/components/DataTable";
import Button from "~/components/Button";
import { createColumnHelper } from "@tanstack/react-table";

export function loader() {
  const products = [
    { id: 1, name: "Wireless Headphones", avatar: "https://i.pravatar.cc/40?img=11", sku: "APX-1024", price: 199, stock: 128, status: "Active" },
    { id: 2, name: "Smart Watch Pro", avatar: "https://i.pravatar.cc/40?img=12", sku: "APX-2087", price: 349, stock: 64, status: "Active" },
    { id: 3, name: "Leather Backpack", avatar: "https://i.pravatar.cc/40?img=13", sku: "APX-3391", price: 129, stock: 0, status: "out-of-stock" },
    { id: 4, name: "Ceramic Coffee Set", avatar: "https://i.pravatar.cc/40?img=14", sku: "APX-4410", price: 59, stock: 212, status: "Active" },
    { id: 5, name: "Yoga Mat Bundle", avatar: "https://i.pravatar.cc/40?img=15", sku: "APX-5562", price: 45, stock: 18, status: "Pending" },
    { id: 6, name: "Standing Desk", avatar: "https://i.pravatar.cc/40?img=16", sku: "APX-6033", price: 499, stock: 7, status: "Active" },
    { id: 7, name: "Desk Lamp", avatar: "https://i.pravatar.cc/40?img=17", sku: "APX-7188", price: 39, stock: 0, status: "Draft" },
    { id: 8, name: "Mechanical Keyboard", avatar: "https://i.pravatar.cc/40?img=18", sku: "APX-8043", price: 119, stock: 95, status: "Active" },
  ];
  return products;
}

const columnHelper = createColumnHelper<any>();

function getStatusUI(status: string) {
  if (status === "out-of-stock") return "bg-red-500 text-white";
  if (status === "Pending") return "bg-yellow-100 text-yellow-700";
  if (status === "Draft") return "bg-gray-100 text-gray-500";
  return "bg-gray-100 text-gray-700";
}

// ========== DESKTOP COLUMNS ==========
const desktopProductColumns = [
  columnHelper.accessor("name", {
    header: "Product",
    cell: (info) => {
      const product = info.row.original;
      return (
        <Link to={`/edit-product/${product.id}`} className="flex items-center gap-3">
          <img
            src={product.avatar}
            alt={product.name}
            className="h-8 w-8 rounded-full object-cover"
          />
          <span className="text-sm font-medium text-gray-900">{info.getValue()}</span>
        </Link>
      );
    },
  }),
  columnHelper.accessor("sku", {
    header: "SKU",
    cell: (info) => <span className="text-sm text-gray-500">{info.getValue()}</span>,
  }),
  columnHelper.accessor("price", {
    header: "Price",
    cell: (info) => (
      <span className="text-sm font-semibold text-gray-900">${info.getValue().toFixed(2)}</span>
    ),
  }),
  columnHelper.accessor("stock", {
    header: "Stock",
    cell: (info) => <span className="text-sm text-gray-700">{info.getValue()}</span>,
  }),
  columnHelper.accessor("status", {
    header: "Status",
    cell: (info) => {
      const status = info.getValue();
      if (status === "out-of-stock") {
        return (
          <span className="inline-flex rounded-full bg-red-500 px-2 py-1 text-xs font-medium text-white">
            Out of stock
          </span>
        );
      } else if (status === "Pending") {
        return (
          <span className="inline-flex rounded-full bg-gray-100 px-2 py-1 text-xs font-medium text-gray-700">
            Pending
          </span>
        );
      } else if (status === "Draft") {
        return (
          <span className="inline-flex rounded-full bg-gray-100 px-2 py-1 text-xs font-medium text-gray-400">
            Draft
          </span>
        );
      } else {
        return (
          <span className="inline-flex rounded-full bg-gray-100 px-2 py-1 text-xs font-medium text-gray-900">
            Active
          </span>
        );
      }
    },
  }),
];

// ========== MOBILE COLUMNS ==========
const mobileProductColumns = [
  columnHelper.display({
    id: "mobileRow",
    header: "Products",
    cell: (info) => {
      const p = info.row.original;
      return (
        <div className="flex items-center justify-between">
          <Link to={`/edit-product/${p.id}`} className="flex items-center gap-3 min-w-0">
            <img
              src={p.avatar}
              alt={p.name}
              className="h-10 w-10 flex-shrink-0 rounded-full object-cover"
            />
            <div className="min-w-0">
              <p className="truncate text-sm font-semibold text-gray-900">{p.name}</p>
              <p className="truncate text-xs text-gray-400">{p.sku}</p>
            </div>
          </Link>
          <div className="text-right flex-shrink-0">
            <p className="text-sm font-semibold text-gray-900">${p.price.toFixed(2)}</p>
            <p className="text-xs text-gray-500">{p.stock} in stock</p>
            <span className={`inline-flex mt-1 rounded-full px-2.5 py-0.5 text-[10px] font-semibold ${getStatusUI(p.status)}`}>
              {p.status === "out-of-stock" ? "Out of stock" : p.status}
            </span>
          </div>
        </div>
      );
    },
  }),
];

export default function ProductsPage({ loaderData }) {
  const products = loaderData;
  const [activeItem, setActiveItem] = useState("Products");
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState("All");

  const filteredProducts = products.filter((p) => {
    const q = search.toLowerCase();
    const matchSearch = p.name.toLowerCase().includes(q) || p.sku.toLowerCase().includes(q);
    const matchStatus = selected === "All" || p.status === selected;
    return matchSearch && matchStatus;
  });

  return (
    <>
      {/* ================= DESKTOP — UNCHANGED ================= */}
      <div className="hidden md:block min-h-screen bg-gray-50">
        <Sidebar activeItem={activeItem} setActiveItem={setActiveItem} />
        <main className="md:ml-56 p-6 space-y-6 max-w-6xl mx-auto">
          <div className="flex items-start justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Products</h1>
              <p className="text-sm text-gray-500 mt-1">Manage your store's catalog.</p>
            </div>
            <Link to="/add-product">
              <Button variant="primary">Add Product</Button>
            </Link>
          </div>

          <div className="flex gap-2">
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search products..."
              className="flex-1 rounded-md border border-gray-200 px-3 py-2 text-sm outline-none focus:border-gray-400"
            />
            <select
              value={selected}
              onChange={(e) => setSelected(e.target.value)}
              className="w-40 rounded-md border border-gray-200 px-3 py-2 text-sm text-gray-600"
            >
              <option value="All">All Status</option>
              <option value="Active">Active</option>
              <option value="Pending">Pending</option>
              <option value="Draft">Draft</option>
              <option value="out-of-stock">Out of stock</option>
            </select>
          </div>

          <DataTable data={filteredProducts} columns={desktopProductColumns} />

          <div className="mt-4 flex items-center justify-between">
            <p className="text-sm text-gray-500">
              Showing 1–{filteredProducts.length} of 64 products
            </p>
            <div className="flex gap-2">
              <Button variant="secondary">Previous</Button>
              <Button variant="secondary">Next</Button>
            </div>
          </div>
        </main>
      </div>

      {/* ================= MOBILE — FIXED FOR BRAVE/CHROME ================= */}
      <div className="md:hidden min-h-screen bg-white pb-20 overflow-x-hidden">
        {/* FIXED: Added overflow-x-hidden to prevent horizontal scroll */}
        <main className="w-full px-4 pt-5 space-y-4 box-border">
          {/* FIXED: w-full instead of implicit width, box-border for proper sizing */}
          
          {/* HEADER — FIXED */}
          <div className="flex items-start justify-between gap-2 min-w-0">
            {/* FIXED: gap-2 instead of default, min-w-0 to allow shrinking */}
            <div className="min-w-0 flex-1">
              {/* FIXED: min-w-0 + flex-1 to prevent overflow */}
              <h1 className="text-lg font-semibold text-gray-900 whitespace-nowrap">
                {/* FIXED: Added text-gray-900 explicitly + whitespace-nowrap */}
                Products
              </h1>
              <p className="text-xs text-gray-500 truncate">
                {/* FIXED: truncate to prevent overflow */}
                Manage your catalog.
              </p>
            </div>
            <div className="flex-shrink-0">
              {/* FIXED: flex-shrink-0 to prevent button shrinking */}
              <Link to="/add-product">
                <Button variant="primary" size="sm">Add product</Button>
              </Link>
            </div>
          </div>

          {/* SEARCH — FIXED */}
          <div className="flex gap-2 min-w-0 w-full">
            {/* FIXED: min-w-0 + w-full */}
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search..."
              className="flex-1 min-w-0 rounded-md border border-gray-200 px-3 py-2 text-sm outline-none"
            />
            <select
              value={selected}
              onChange={(e) => setSelected(e.target.value)}
              className="w-auto flex-shrink-0 rounded-md border border-gray-200 px-3 py-2 text-sm text-gray-600"
            >
              {/* FIXED: w-auto instead of w-[120px], flex-shrink-0 */}
              <option value="All">All</option>
              <option value="Active">Active</option>
              <option value="Pending">Pending</option>
              <option value="Draft">Draft</option>
              <option value="out-of-stock">Out</option>
            </select>
          </div>

          {/* MOBILE TABLE */}
          <DataTable data={filteredProducts} columns={mobileProductColumns} enableSorting={false} />
        </main>
        
        {/* FIXED: BottomNav with w-full */}
        <div className="w-full">
          <BottomNav activeItem={activeItem} setActiveItem={setActiveItem} />
        </div>
      </div>
    </>
  );
}