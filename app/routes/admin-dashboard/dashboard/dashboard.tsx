
import { useState } from "react";
import Sidebar from "~/components/Sidebar";
import BottomNav from "~/components/BottomNav";
import DesktopOrdersTable from "~/components/Desktop-OrdersTable";
import MobileOrdersTable from "~/components/Mobile-OrdersTable";
import ExportButton from "~/components/ExportButton";
import Button from "~/components/Button";
import Stats from "./_components/Stats";
import Revenue from "~/components/Revenue";

export function loader(){
const orders = [
  {
    id: 1,
    customer: "Olivia Bennett",
    avatar: "https://i.pravatar.cc/40?img=1",
    product: "Wireless Headphones",
    orderDate: "2026-02-08",
    total: 249,
    status: "Paid",
  },
  {
    id: 2,
    customer: "Marcus Chen",
    avatar: "https://i.pravatar.cc/40?img=2",
    product: "Smart Watch Pro",
    orderDate: "2026-02-07",
    total: 499,
    status: "Paid",
  },
  {
    id: 3,
    customer: "Sofia Reyes",
    avatar: "https://i.pravatar.cc/40?img=3",
    product: "Leather Backpack",
    orderDate: "2026-02-07",
    total: 189,
    status: "Pending",
  },
  {
    id: 4,
    customer: "Jordan Wright",
    avatar: "https://i.pravatar.cc/40?img=4",
    product: "Ceramic Coffee Set",
    orderDate: "2026-02-06",
    total: 84,
    status: "Paid",
  },
  {
    id: 5,
    customer: "Aisha Patel",
    avatar: "https://i.pravatar.cc/40?img=5",
    product: "Yoga Mat Bundle",
    orderDate: "2026-02-05",
    total: 65,
    status: "Refunded",
  },
  {
    id: 6,
    customer: "Lucas Hartmann",
    avatar: "https://i.pravatar.cc/40?img=6",
    product: "Standing Desk",
    orderDate: "2026-02-04",
    total: 620,
    status: "Paid",
  },
  {
    id: 7,
    customer: "Emma Johansson",
    avatar: "https://i.pravatar.cc/40?img=7",
    product: "Desk Lamp",
    orderDate: "2026-02-03",
    total: 48,
    status: "Pending",
  },
  {
    id: 8,
    customer: "Noah Kim",
    avatar: "https://i.pravatar.cc/40?img=8",
    product: "Mechanical Keyboard",
    orderDate: "2026-02-02",
    total: 129,
    status: "Paid",
  },
  {
    id: 9,
    customer: "Mia Rossi",
    avatar: "https://i.pravatar.cc/40?img=9",
    product: "Linen Bedding Set",
    orderDate: "2026-02-01",
    total: 215,
    status: "Paid",
  },


];
return orders

}



export default function DashboardPage({loaderData}) {
  const [activeItem, setActiveItem] = useState("");
  const orders = loaderData



  return (

    <>
      {/* DESKTOP VERSTION */}
      <div className="hidden md:block min-h-screen bg-gray-50">

        <Sidebar
          activeItem={activeItem}
          setActiveItem={setActiveItem}
        />

        <main className="md:ml-56 px-6 py-5 space-y-6 max-w-6xl mx-auto">

          {/* HEADER */}
          <div className="flex items-start justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">
                Dashboard
              </h1>
              <p className="text-sm text-gray-500">
                Overview of your store's performance.
              </p>
            </div>

            {/* export button */}
            {/* <ExportButton /> */}

            <Button variant='primary'>Export</Button>


          </div>
          {/* stats card */}
          <Stats />
          {/* revenue card */}
          <Revenue />
          {/* desktop orders table */}

          <DesktopOrdersTable data={orders} />

        </main>
        

      </div>

      {/* MOBILE VERSTION */}
      <div className="md:hidden min-h-screen bg-white pb-20">

        <main className="px-4 pt-5 space-y-4">

          {/* HEADER */}
          <div className="flex items-start justify-between">
            <div>
              <h1 className="text-lg font-semibold">
                Dashboard
              </h1>
              <p className="text-xs text-gray-500">
                Overview of your store's performance.
              </p>
            </div>

            {/* export buttn */}

            {/* <ExportButton /> */}

            <Button variant="primary" size="sm" className="px-3 sm:py-4 sm:text-sm">Export</Button>



          </div>
          {/* stats card */}

          <Stats />
          {/* revenue card */}
          <Revenue />
          {/* mobile orders table */}
          <MobileOrdersTable data={orders} />

        </main>

        {/* bottom nav */}

        <BottomNav activeItem={activeItem} setActiveItem={setActiveItem} />

      </div>
    </>
  );

}