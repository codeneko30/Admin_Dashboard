

import { Link } from "react-router";

type Product = {
  id: number;
  name: string;
  avatar: string;
  sku: string;
  price: number;
  stock: number;
  status: "Active" | "Pending" | "Draft" | "out-of-stock";
};

interface TableProps {
  data: Product[];
}

export default function ProductTable({ data }: TableProps) {
  return (
    <div className="overflow-hidden rounded-lg border border-gray-200">
      <table className="w-full">

        {/* HEADER */}
        <thead className="bg-gray-50">
          <tr className="border-b border-gray-200 text-left text-xs text-gray-500">
            <th className="px-5 py-3 font-medium">Product</th>
            <th className="px-5 py-3 font-medium">SKU</th>
            <th className="px-5 py-3 font-medium">Price</th>
            <th className="px-5 py-3 font-medium">Stock</th>
            <th className="px-5 py-3 font-medium">Status</th>
          </tr>
        </thead>

        {/* BODY */}
        <tbody>
          {data.map((product) => (
            <tr
              key={product.id}
              className="border-b border-gray-100 hover:bg-gray-50"
            >

              {/* PRODUCT */}
              <td className="px-5 py-4">
                {/* before link */}
                {/* <div className="flex items-center gap-3">
                  <img
                    src={product.avatar}
                    alt={product.name}
                    className="h-8 w-8 rounded-full object-cover"
                  />
                  <span className="text-sm font-medium text-gray-900">
                    {product.name}
                  </span>

                  
                </div> */}

                <Link
                  to={`/edit-product/${product.id}`}
                  className="flex items-center gap-3"
                >
                  <img
                    src={product.avatar}
                    alt={product.name}
                    className="h-8 w-8 rounded-full object-cover"
                  />

                  <span className="text-sm font-medium text-gray-900">
                    {product.name}
                  </span>
                </Link>

              </td>



              {/* SKU */}
              <td className="px-5 py-4 text-sm text-gray-500">
                {product.sku}
              </td>

              {/* PRICE */}
              <td className="px-5 py-4 text-sm font-semibold text-gray-900">
                ${product.price.toFixed(2)}


              </td>

              {/* STOCK */}
              <td className="px-5 py-4 text-sm text-gray-700">
                {product.stock}
              </td>

              {/* STATUS (same pattern as Orders) */}

              <td className="px-5 py-4">
                {product.status === "out-of-stock" ? (
                  <span className="inline-flex rounded-full bg-red-500 px-2 py-1 text-xs font-medium text-white">
                    Out of stock
                  </span>
                ) : product.status === "Pending" ? (
                  <span className="inline-flex rounded-full bg-gray-100 px-2 py-1 text-xs font-medium text-gray-700">
                    Pending
                  </span>
                ) : product.status === "Draft" ? (
                  <span className="inline-flex rounded-full bg-gray-100 px-2 py-1 text-xs font-medium text-gray-400">
                    Draft
                  </span>
                ) : (
                  <span className="inline-flex rounded-full bg-gray-100 px-2 py-1 text-xs font-medium text-gray-900">
                    Active
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