


import { Link } from "react-router";

type Order = {
  id: number;
  customer: string;
  avatar: string;
  product: string;
  orderDate: string;
  total: number;

  status: "Paid" | "Pending" | "Refunded"
};



interface TableProps {
  data: Order[];
}


export default function Table({ data }: TableProps) {
  return (
    <div className="overflow-hidden rounded-lg border border-gray-200">
      <table className="w-full">
        {/* HEADER */}
        <thead className="bg-gray-50">
          <tr className="border-b border-gray-200 text-left text-xs text-gray-500">
            <th className="px-5 py-3 font-medium">Customer</th>
            <th className="px-5 py-3 font-medium">Product</th>
            <th className="px-5 py-3 font-medium">Order Date</th>
            <th className="px-5 py-3 font-medium">Total</th>
            <th className="px-5 py-3 font-medium">Status</th>
          </tr>
        </thead>

        {/* BODY */}
        <tbody>
          {data.map((order) => (
            <tr
              key={order.id}
              className="border-b border-gray-100 hover:bg-gray-50"
            >
              {/* CUSTOMER */}
              <td className="px-5 py-4">

                {/* before link */}

                {/* <div className="flex items-center gap-3">
                  <img
                    src={order.avatar}
                    alt={order.customer}
                    className="h-8 w-8 rounded-full object-cover"
                  />
                  <span className="text-sm font-medium text-gray-900">
                    {order.customer}
                  </span>
                </div> */}

                <Link
                  to={`/order-details/${order.id}`}
                  className="flex items-center gap-3"
                >
                  <img
                    src={order.avatar}
                    alt={order.customer}
                    className="h-8 w-8 rounded-full object-cover"
                  />
                  <span className="text-sm font-medium text-gray-900">
                    {order.customer}
                  </span>
                </Link>

              </td>

              {/* PRODUCT */}
              <td className="px-5 py-4 text-sm text-gray-700">
                {order.product}
              </td>

              {/* DATE */}
              <td className="px-5 py-4 text-sm text-gray-500">
                {order.orderDate}
              </td>

              {/* TOTAL */}
              <td className="px-5 py-4 text-sm font-semibold text-gray-900">
                ${order.total.toFixed(2)}
              </td>

              {/* STATUS */}
              <td className="px-5 py-4">
                {order.status === "Refunded" ? (
                  <span className="inline-flex rounded-full bg-red-500 px-2 py-1 text-xs font-medium text-white">
                    Refunded
                  </span>
                ) : order.status === "Pending" ? (
                  <span className="inline-flex rounded-full bg-gray-100 px-2 py-1 text-xs font-medium text-gray-700">
                    Pending
                  </span>
                ) : (
                  <span className="inline-flex rounded-full bg-gray-100 px-2 py-1 text-xs font-medium text-gray-900">
                    Paid
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








