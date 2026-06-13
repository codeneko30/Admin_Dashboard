
import { Link } from "react-router";
type Customer = {
  id: number;
  name: string;
  avatar: string;
  email: string;
  orders: number;
  totalSpent: number;
  status: "Active" | "VIP" | "New" | "Inactive";
};

interface CustomerTableProps {
  data: Customer[];
}

export default function CustomerTable({ data }: CustomerTableProps) {
  return (
    <div className="overflow-hidden rounded-lg border border-gray-200">
      <table className="w-full">
        {/* HEADER */}
        <thead className="bg-gray-50">
          <tr className="border-b border-gray-100 text-left text-xs text-gray-400">
            <th className="px-5 py-3 font-medium">Customer</th>
            <th className="px-5 py-3 font-medium">Email</th>
            <th className="px-5 py-3 font-medium">Orders</th>
            <th className="px-5 py-3 font-medium">Total spent</th>
            <th className="px-5 py-3 font-medium">Status</th>
          </tr>
        </thead>

        {/* BODY */}
        <tbody>
          {data.map((customer) => (
            <tr
              key={customer.id}
              className="border-b border-gray-100 hover:bg-gray-50"
            >
              {/* Customer */}
              <td className="px-5 py-4">

                {/* before link */}

                {/* <div className="flex items-center gap-3">

                  <img
                    src={customer.avatar}
                    alt={customer.name}
                    className="w-8 h-8 rounded-full object-cover"
                  />
                  <span className="text-sm font-semibold text-gray-900">
                    {customer.name}
                  </span>
                </div>
                 */}


                <Link
                  to={`/customer-details/${customer.id}`}
                  className="flex items-center gap-3"
                >
                  <img
                    src={customer.avatar}
                    alt={customer.name}
                    className="w-8 h-8 rounded-full object-cover"
                  />
                  <span className="text-sm font-semibold text-gray-900">
                    {customer.name}
                  </span>
                </Link>


              </td>

              {/* Email */}
              <td className="px-5 py-4 text-sm text-gray-500">
                {customer.email}
              </td>

              {/* Orders */}
              <td className="px-5 py-4 text-sm text-gray-700">
                {customer.orders}
              </td>

              {/* Total Spent */}
              <td className="px-5 py-4 text-sm font-medium text-gray-900">
                $
                {customer.totalSpent.toLocaleString("en-US", {
                  minimumFractionDigits: 2,
                })}
              </td>

              {/* Status */}
              <td className="px-5 py-4">
                {customer.status === "VIP" ? (
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-gray-800 text-white">
                    VIP
                  </span>
                ) : customer.status === "Inactive" ? (
                  <span className="text-sm text-gray-400">
                    Inactive
                  </span>
                ) : customer.status === "Active" ? (
                  <span className="text-sm text-gray-700">
                    Active
                  </span>
                ) : (
                  <span className="text-sm text-gray-700">
                    New
                  </span>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}