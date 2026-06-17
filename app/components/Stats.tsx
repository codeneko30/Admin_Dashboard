
const stats = [
  {
    label: "Total Revenue",
    value: "$48,250",
    change: "+12.5%",
    positive: true,
  },
  {
    label: "Orders",
    value: "1,284",
    change: "+8.2%",
    positive: true,
  },
  {
    label: "Customers",
    value: "3,672",
    change: "+5.1%",
    positive: true,
  },
  {
    label: "Avg. Order Value",
    value: "$37.58",
    change: "-1.4%",
    positive: false,
  },
];

export default function Stats() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">

      {stats.map((item) => (
        <div
          key={item.label}
          className="bg-white border border-gray-100 rounded-xl p-4"
        >
          <p className="text-xs text-gray-500">
            {item.label}
          </p>

          <p className="mt-1 text-2xl font-bold text-gray-900">
            {item.value}
          </p>

          <div className="mt-2 flex gap-1">
            <span
              className={`text-xs font-semibold ${
                item.positive
                  ? "text-green-600"
                  : "text-red-500"
              }`}
            >
              {item.change}
            </span>

            <span className="text-xs text-gray-400">
              vs last month
            </span>
          </div>
        </div>
      ))}

    </div>
  );
}