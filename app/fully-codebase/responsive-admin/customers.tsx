

import { useState } from "react";
import { ChevronRight } from "lucide-react";

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

export default function CustomersPage() {
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState("All");

  const filteredCustomers = customers.filter((customer) => {
    const matchSearch =
      customer.name
        .toLowerCase()
        .includes(search.toLowerCase()) ||
      customer.email
        .toLowerCase()
        .includes(search.toLowerCase());

    const matchStatus =
      selected === "All" ||
      customer.status === selected;

    return matchSearch && matchStatus;
  });

  return (
    <div className="min-h-screen bg-gray-50 pb-16 font-sans">

      {/* HEADER */}
      <div className="sticky top-0 z-10 border-b bg-white">
        <div className="mx-auto max-w-2xl px-4 py-4">

          <h1 className="text-2xl font-bold text-gray-900">
            Customers
          </h1>

          {/* desktop search + select pattern */}
          <div className="mt-4 flex gap-2">

            <input
              value={search}
              onChange={(e) =>
                setSearch(e.target.value)
              }
              placeholder="Search customers..."
              className="flex-1 rounded-md border border-gray-200 px-3 py-2 text-sm outline-none focus:border-gray-400"
            />

            <select
              value={selected}
              onChange={(e) =>
                setSelected(e.target.value)
              }
              className="w-40 rounded-md border border-gray-200 px-3 py-2 text-sm text-gray-600"
            >
              <option>All</option>
              <option>Active</option>
              <option>VIP</option>
              <option>New</option>
              <option>Inactive</option>
            </select>

          </div>
        </div>
      </div>

      {/* LIST → desktop table render pattern */}
      <div className="mx-auto max-w-2xl px-4 pt-4">

        <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white">

          <table className="w-full">
            <tbody>

              {filteredCustomers.map(
                (customer) => (
                  <tr
                    key={customer.id}
                    className="border-b border-gray-100 hover:bg-gray-50"
                  >
                    <td className="px-4 py-4">

                      <div className="flex items-center justify-between">

                        {/* LEFT */}
                        <div className="flex min-w-0 flex-1 items-center gap-3">

                          <img
                            src={customer.avatar}
                            alt={customer.name}
                            loading="lazy"
                            referrerPolicy="no-referrer"
                            className="h-12 w-12 rounded-full object-cover"
                          />

                          <div className="min-w-0">

                            <p className="font-semibold text-gray-900">
                              {customer.name}
                            </p>

                            <p className="truncate text-sm text-gray-500">
                              {customer.email}
                            </p>

                            <p className="mt-2 text-xs text-gray-400">
                              {customer.orders}
                              {" "}
                              order
                              {customer.orders !== 1
                                ? "s"
                                : ""}
                            </p>

                          </div>

                        </div>

                        {/* RIGHT */}
                        <div className="flex items-center gap-3">

                          <div className="text-right">

                            <p className="text-lg font-bold text-gray-900">
                              $
                              {customer.totalSpent.toLocaleString()}
                            </p>

                            <div className="mt-2">

                              {customer.status ===
                              "VIP" ? (
                                <span className="rounded-full bg-gray-900 px-3 py-1 text-xs font-semibold text-white">
                                  VIP
                                </span>
                              ) : customer.status ===
                                "Inactive" ? (
                                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-gray-100 text-gray-700 mt-1" >
                                  Inactive
                                </span>
                              ) : customer.status ===
                                "New" ? (
                                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-gray-50 text-gray-700 mt-1"  >
                                  New
                                </span>
                              ) : (
                                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-gray-100 text-gray-700 mt-1" >
                                  Active
                                </span>
                              )}

                            </div>

                          </div>

                          <ChevronRight className="h-4 w-4 text-gray-300" />

                        </div>

                      </div>

                    </td>
                  </tr>
                )
              )}

            </tbody>
          </table>

        </div>

      </div>

    </div>
  );
}