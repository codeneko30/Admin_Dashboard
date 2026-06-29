

import { Link } from "react-router";
import { useState } from "react";
import Sidebar from "~/components/Sidebar";
import BottomNav from "../../../components/BottomNav";
import DesktopCustomersTable from "./_components/Desktop-CustomersTable"
import  MobileCustomersTable  from "./_components/Mobile-CustomersTable"
import PreviousButton from "~/components/PreviousButton";
import NextButton from "~/components/NextButton";
import DesktopBlackButton from "~/components/Desktop-BlackButton";
import MobileBlackButton from "~/components/Mobile-BlackButton";

export function loader(){
const customers = [
  {
    id: 1,
    name: "Olivia Bennett",
    avatar: "https://i.pravatar.cc/100?img=1",
    email: "olivia.bennett@email.com",
    orders: 12,
    totalSpent: 2480,
    status: "Active",
  },

  {
    id: 2,
    name: "Marcus Chen",
    avatar: "https://i.pravatar.cc/100?img=2",
    email: "marcus.chen@email.com",
    orders: 8,
    totalSpent: 1920,
    status: "Active",
  },

  {
    id: 3,
    name: "Aisha Patel",
    avatar: "https://i.pravatar.cc/100?img=3",
    email: "aisha.patel@email.com",
    orders: 21,
    totalSpent: 4310,
    status: "VIP",
  },

  {
    id: 4,
    name: "Sofia Reyes",
    avatar: "https://i.pravatar.cc/100?img=4",
    email: "sofia.reyes@email.com",
    orders: 3,
    totalSpent: 540,
    status: "Active",
  },

  {
    id: 5,
    name: "Jordan Wright",
    avatar: "https://i.pravatar.cc/100?img=5",
    email: "jordan.wright@email.com",
    orders: 1,
    totalSpent: 84,
    status: "New",
  },

  {
    id: 6,
    name: "Lucas Hartmann",
    avatar: "https://i.pravatar.cc/100?img=6",
    email: "lucas.hartmann@email.com",
    orders: 5,
    totalSpent: 1240,
    status: "Active",
  },

  {
    id: 7,
    name: "Emma Johansson",
    avatar: "https://i.pravatar.cc/100?img=7",
    email: "emma.j@email.com",
    orders: 0,
    totalSpent: 0,
    status: "Inactive",
  },

  {
    id: 8,
    name: "Noah Kim",
    avatar: "https://i.pravatar.cc/100?img=8",
    email: "noah.kim@email.com",
    orders: 14,
    totalSpent: 3005,
    status: "Active",
  },
];
return customers

}

export default function CustomersPage({loaderData}) {
const customers = loaderData
  const [activeItem, setActiveItem] = useState("")
  const [search, setSearch] = useState("")
  const [selected, setSelected] = useState("All")



  const filteredCustomers =
    customers.filter((customer) => {

      const matchSearch = customer.name.toLocaleLowerCase().includes(search.toLocaleLowerCase())
        ||
        customer.email.toLocaleLowerCase().includes(search.toLocaleLowerCase())


      const matchStatus =
        selected === "All" || customer.status === selected;
      return (
        matchSearch && matchStatus
      );
    });

  const totalCustomers = 1204;

  return (

    <>
      {/* ================= DESKTOP ================= */}
      <div className="hidden md:block min-h-screen bg-gray-50">

        <Sidebar
          activeItem={activeItem}
          setActiveItem={setActiveItem}
        />

        <main className="md:ml-56 p-6 space-y-6 max-w-6xl mx-auto">

          {/* HEADER */}
          <div className="flex items-start justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">
                Customers
              </h1>
              <p className="text-sm text-gray-500 mt-1">
                View and manage your customers.
              </p>
            </div>


            {/* add customer */}

            <Link to="/add-customer">
              <DesktopBlackButton label='Add customer' />
            </Link>

          </div>

          {/* SEARCH + FILTER */}
          <div className="flex gap-2">
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search customers..."
              className="flex-1 rounded-md border border-gray-200 px-3 py-2 text-sm outline-none focus:border-gray-400"
            />

            <select
              value={selected}
              onChange={(e) => setSelected(e.target.value)}
              className="w-40 rounded-md border border-gray-200 px-3 py-2 text-sm"
            >
              <option value="All">All</option>
              <option value="Active">Active</option>
              <option value="VIP">VIP</option>
              <option value="New">New</option>
              <option value="Inactive">Inactive</option>
            </select>
          </div>

          {/* desktop customer table */}
          <DesktopCustomersTable data={filteredCustomers} />


          {/* Footer */}
          <div className="mt-4 flex items-center justify-between">
            <p className="text-sm text-gray-500">
              Showing 1–{filteredCustomers.length} of{" "}
              {totalCustomers.toLocaleString()}customers
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
                Customers
              </h1>
              <p className="text-xs text-gray-500">
                Manage customers
              </p>
            </div>


            {/* add customer */}
            <Link to='/add-customer'>
              <MobileBlackButton label="Add customer" />

            </Link>


          </div>

          {/* SEARCH + FILTER */}
          <div className="flex gap-2">
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search..."
              className="flex-1 rounded-md border border-gray-200 px-3 py-2 text-sm outline-none"
            />

            <select
              value={selected}
              onChange={(e) => setSelected(e.target.value)}
              className="w-[120px] rounded-md border border-gray-200 px-3 py-2 text-sm text-gray-600"
            >
              <option value="All">All</option>
              <option value="Active">Active</option>
              <option value="VIP">VIP</option>
              <option value="New">New</option>
              <option value="Inactive">Inactive</option>
            </select>
          </div>

          {/* mobile customers table */}
          <MobileCustomersTable customers={filteredCustomers} />

        </main>

        <BottomNav
          activeItem={activeItem}
          setActiveItem={setActiveItem}
        />
      </div>
    </>





  );
}