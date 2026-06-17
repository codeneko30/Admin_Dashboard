
import { Link } from "react-router";

type Order = {
  id: number;
  customer: string;
  avatar: string;
  product: string;
  orderDate: string;
  total: number;
  status: "Paid" | "Pending" | "Refunded";
};

interface TableProps {
  data: Order[];
}

export default function MobileOrdersTable({
  data,
}: TableProps) {
  return (
    <div className="overflow-hidden rounded-xl border border-gray-200 md:hidden">
      <table className="w-full">

        <tbody>
          {data.map((order) => (
            <tr
              key={order.id}
              className="border-b border-gray-100 hover:bg-gray-50 transition-colors duration-150 active:bg-gray-100"
            >
              <td className="px-4 py-3">

                <Link
                  to={`/order-details/${order.id}`}
                  className="flex items-start justify-between"
                >

                  {/* LEFT */}
                  <div className="flex min-w-0 items-start gap-3">

                    <img
                      src={order.avatar}
                      alt={order.customer}
                      className="h-8 w-8 flex-shrink-0 rounded-full object-cover"
                    />

                    <div className="min-w-0">

                      <div className="truncate text-xs font-semibold text-gray-900">
                        {order.customer}
                      </div>

                      <div className="truncate text-[11px] text-gray-500">
                        {order.product}
                      </div>

                      <div className="mt-0.5 text-[11px] text-gray-400">
                        {order.orderDate}
                      </div>

                    </div>

                  </div>

                  {/* RIGHT */}
                  <div className="flex items-center gap-2">

                    <div className="text-right">

                      <div className="text-xs font-semibold text-gray-900">
                        ${order.total.toFixed(2)}
                      </div>

                      {order.status === "Refunded" ? (
                        <span className="mt-1 inline-flex rounded-full bg-red-500 px-2.5 py-0.5 text-[10px] font-semibold text-white">
                          Refunded
                        </span>
                      ) : order.status === "Pending" ? (
                        <span className="mt-1 inline-flex rounded-full bg-gray-50 px-2.5 py-0.5 text-[10px] font-semibold text-gray-700">
                          Pending
                        </span>
                      ) : (
                        <span className="mt-1 inline-flex rounded-full bg-gray-100 px-2.5 py-0.5 text-[10px] font-semibold text-gray-700">
                          Paid
                        </span>
                      )}

                    </div>

                    <svg
                      className="h-4 w-4 text-gray-300"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 18l6-6-6-6"
                      />
                    </svg>

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










