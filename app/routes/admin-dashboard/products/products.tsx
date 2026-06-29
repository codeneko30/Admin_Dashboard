

import { Link } from "react-router";
import { useState } from "react";
import Sidebar from "../../../components/Sidebar";
import BottomNav from "../../../components/BottomNav";
import DesktopProductsTable from "./_components/Desktop-ProductsTable"
import MobileProductsTable from "./_components/Mobile-ProductsTable";
import PreviousButton from "~/components/PreviousButton";
import NextButton from "~/components/NextButton";
import DesktopBlackButton from "~/components/Desktop-BlackButton";
import MobileBlackButton from "../../../components/Mobile-BlackButton"


export function loader() {
  const products = [
    {
      id: 1,
      name: "Wireless Headphones",
      avatar:
        "https://i.pravatar.cc/40?img=11",
      sku: "APX-1024",
      price: 199,
      stock: 128,
      status: "Active",
    },
    {
      id: 2,
      name: "Smart Watch Pro",
      avatar:
        "https://i.pravatar.cc/40?img=12",
      sku: "APX-2087",
      price: 349,
      stock: 64,
      status: "Active",
    },
    {
      id: 3,
      name: "Leather Backpack",
      avatar:
        "https://i.pravatar.cc/40?img=13",
      sku: "APX-3391",
      price: 129,
      stock: 0,
      status: "out-of-stock",
    },
    {
      id: 4,
      name: "Ceramic Coffee Set",
      avatar:
        "https://i.pravatar.cc/40?img=14",
      sku: "APX-4410",
      price: 59,
      stock: 212,
      status: "Active",
    },
    {
      id: 5,
      name: "Yoga Mat Bundle",
      avatar:
        "https://i.pravatar.cc/40?img=15",
      sku: "APX-5562",
      price: 45,
      stock: 18,
      status: "Pending",
    },
    {
      id: 6,
      name: "Standing Desk",
      avatar:
        "https://i.pravatar.cc/40?img=16",
      sku: "APX-6033",
      price: 499,
      stock: 7,
      status: "Active",
    },
    {
      id: 7,
      name: "Desk Lamp",
      avatar:
        "https://i.pravatar.cc/40?img=17",
      sku: "APX-7188",
      price: 39,
      stock: 0,
      status: "Draft",
    },
    {
      id: 8,
      name: "Mechanical Keyboard",
      avatar:
        "https://i.pravatar.cc/40?img=18",
      sku: "APX-8043",
      price: 119,
      stock: 95,
      status: "Active",
    },
  ];
  return products

}



export default function ProductsPage({ loaderData }) {
  const products = loaderData
  const [activeItem, setActiveItem] = useState("Products");
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState("All");



  const filteredProducts = products.filter((p) => {
    const q = search.toLowerCase();
    const matchSearch = p.name.toLowerCase().includes(q) || p.sku.toLowerCase().includes(q);
    const matchStatus = selected === "All" || p.status === selected;
    return (
      matchSearch && matchStatus

    );
  });



  return (

    <>
      {/* ================= DESKTOP ================= */}
      <div className="hidden md:block min-h-screen bg-gray-50">

        <Sidebar activeItem={activeItem} setActiveItem={setActiveItem} />


        <main className="md:ml-56 p-6 space-y-6 max-w-6xl mx-auto">

          {/* HEADER */}
          <div className="flex items-start justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">
                Products
              </h1>
              <p className="text-sm text-gray-500 mt-1">
                Manage your store's catalog.
              </p>
            </div>


            {/* add product  */}


            <Link to="/add-product">
              <DesktopBlackButton label="Add Product" />
            </Link>


          </div>

          {/* SEARCH */}
          <div className="flex gap-2">

            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search products..."
              className="flex-1 rounded-md border border-gray-200 px-3 py-2 text-sm outline-none focus:border-gray-400 "
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

          {/* TABLE */}
          <DesktopProductsTable data={filteredProducts} />

          {/* Footer */}
          <div className="mt-4 flex items-center justify-between">
            <p className="text-sm text-gray-500">
              Showing 1–{filteredProducts.length} of 64 products
            </p>

            <div className="flex gap-2">

              {/* previous */}

              <PreviousButton />

              {/* next */}
              <NextButton />


            </div>
          </div>



        </main>
      </div>

      {/* ================= MOBILE ================= */}
      <div className="md:hidden min-h-screen bg-white pb-20">

        <main className="p-4 space-y-4">

          {/* HEADER */}
          <div className="flex items-start justify-between">
            <div>
              <h1 className="text-lg font-semibold">
                Products
              </h1>
              <p className="text-xs text-gray-500">
                Manage your catalog.
              </p>
            </div>



            {/* add product */}
            <Link to='/add-product'>
              <MobileBlackButton label="Add product" />

            </Link>



          </div>

          {/* SEARCH */}
          <div className="flex gap-2">
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search..."
              className="flex-1 rounded-md border border-gray-200 px-3 py-2 text-sm outline-none "
            />

            <select
              value={selected}
              onChange={(e) => setSelected(e.target.value)}
              className="w-[120px] rounded-md border border-gray-200 px-3 py-2 text-sm text-gray-600"
            >
              <option value="All">All</option>
              <option value="Active">Active</option>
              <option value="Pending">Pending</option>
              <option value="Draft">Draft</option>
              <option value="out-of-stock">Out</option>
            </select>
          </div>

          {/* MOBILE TABLE */}
          <MobileProductsTable data={filteredProducts} />
        </main>

        <BottomNav activeItem={activeItem} setActiveItem={setActiveItem} />

      </div>
    </>



  );
}

