import { ChevronRight } from "lucide-react";
import { Link } from "react-router";

type Customer = {
  id: number;
  name: string;
  avatar: string;
  email: string;
  orders: number;
  totalSpent: number;
  status: string;
};

type Props = {
  customers: Customer[];
};

export default function MobileCustomersTable({
  customers,
}: Props) {
  return (
    <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white md:hidden">

      <table className="w-full">

        <tbody>

          {customers.map((customer) => (
            <tr
              key={customer.id}
              className="border-b border-gray-100 hover:bg-gray-50 transition-colors"
            >
              <td className="px-4 py-4">

                <Link
                  to={`/customer-details/${customer.id}`}
                  className="flex items-center justify-between"
                >

                  {/* LEFT */}
                  <div className="flex min-w-0 flex-1 items-center gap-3">

                    <img
                      src={customer.avatar}
                      alt={customer.name}
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
                        {customer.orders} orders
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

                        {customer.status === "VIP" ? (
                          <span className="rounded-full bg-black px-3 py-1 text-xs font-semibold text-white">
                            VIP
                          </span>
                        ) : customer.status === "Inactive" ? (
                          <span className="inline-flex rounded-full bg-gray-100 px-2 py-1 text-[10px] text-gray-700">
                            Inactive
                          </span>
                        ) : customer.status === "New" ? (
                          <span className="inline-flex rounded-full bg-gray-50 px-2 py-1 text-[10px] text-gray-700">
                            New
                          </span>
                        ) : (
                          <span className="inline-flex rounded-full bg-gray-100 px-2 py-1 text-[10px] text-gray-700">
                            Active
                          </span>
                        )}

                      </div>

                    </div>

                    <ChevronRight
                      className="h-4 w-4 text-gray-300"
                    />

                  </div>

                </Link>

              </td>
            </tr>
          ))}

        </tbody>

      </table>

    </div>
  );
}