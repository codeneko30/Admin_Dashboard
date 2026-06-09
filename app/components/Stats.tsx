

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
  
  export default function StatsSection() {
    return (
      <div className="border border-gray-200 rounded-xl overflow-hidden grid grid-cols-4 divide-x divide-gray-200">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="bg-white px-6 py-5"
          >
            <p className="text-xs text-gray-500 mb-2">
              {stat.label}
            </p>
  
            <p className="text-3xl font-bold text-gray-900 mb-2">
              {stat.value}
            </p>
  
            <div className="flex items-center gap-1.5">
              <span
                className={`text-xs font-semibold ${
                  stat.positive
                    ? "text-green-600"
                    : "text-red-500"
                }`}
              >
                {stat.change}
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