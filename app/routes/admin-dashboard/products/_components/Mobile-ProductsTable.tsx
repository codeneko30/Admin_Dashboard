import { Link } from "react-router";

type Product = {
  id: number;
  name: string;
  sku: string;
  price: number;
  stock: number;
  status: string;
  avatar: string;
};

type Props = {
  data?: Product[];
};

function getStatusUI(status: string) {
  if (status === "out-of-stock") {
    return "bg-red-500 text-white";
  }

  if (status === "Pending") {
    return "bg-yellow-100 text-yellow-700";
  }

  if (status === "Draft") {
    return "bg-gray-100 text-gray-500";
  }

  return "bg-gray-100 text-gray-700";
}

export default function MobileProductsTable({ data = [] }: Props) {
  return (
    <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white">
      <table className="w-full">
        <tbody>
          {data.map((p, index) => (
            <tr
              key={p.id}
              className={`hover:bg-gray-50 ${
                index !== data.length - 1
                  ? "border-b border-gray-100"
                  : ""
              }`}
            >
              <td className="px-4 py-4">
                <div className="flex items-center justify-between">
                  
                  {/* LEFT (LINK ADDED LIKE DESKTOP) */}
                  <Link
                    to={`/edit-product/${p.id}`}
                    className="flex items-center gap-3 min-w-0"
                  >
                    <img
                      src={p.avatar}
                      alt={p.name}
                      className="h-10 w-10 flex-shrink-0 rounded-full object-cover"
                    />

                    <div className="min-w-0">
                      <p className="truncate text-sm font-semibold text-gray-900">
                        {p.name}
                      </p>

                      <p className="truncate text-xs text-gray-400">
                        {p.sku}
                      </p>
                    </div>
                  </Link>

                  {/* RIGHT */}
                  <div className="text-right flex-shrink-0">
                    <p className="text-sm font-semibold text-gray-900">
                      ${p.price.toFixed(2)}
                    </p>

                    <p className="text-xs text-gray-500">
                      {p.stock} in stock
                    </p>

                    <span
                      className={`inline-flex mt-1 rounded-full px-2.5 py-0.5 text-[10px] font-semibold ${getStatusUI(
                        p.status
                      )}`}
                    >
                      {p.status === "out-of-stock"
                        ? "Out of stock"
                        : p.status}
                    </span>
                  </div>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}