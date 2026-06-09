const revenueData = [
    { month: "Jan", online: 280, inStore: 120 },
    { month: "Feb", online: 200, inStore: 150 },
    { month: "Mar", online: 320, inStore: 160 },
    { month: "Apr", online: 140, inStore: 200 },
    { month: "May", online: 130, inStore: 260 },
    { month: "Jun", online: 240, inStore: 310 },
  ];
  
  export default function RevenueSection() {
    const maxValue = Math.max(...revenueData.flatMap((d) => [d.online, d.inStore]))
      
  
    return (
      <div className="border border-gray-200 rounded-xl p-6">
        <h2 className="text-base font-semibold text-gray-900 mb-6">
          Revenue overview
        </h2>
  
        <div className="flex items-end justify-between gap-3 h-52">
          {revenueData.map((d) => (
            <div
              key={d.month}
              className="flex-1 flex flex-col items-center gap-2"
            >
              <div className="w-full flex items-end justify-center gap-1.5 h-44">
                <div
                  className="flex-1 bg-orange-500 rounded-t-sm"
                  style={{
                    height: `${(d.online / maxValue) * 100}%`,
                  }}
                />
  
                <div
                  className="flex-1 bg-teal-500 rounded-t-sm"
                  style={{
                    height: `${(d.inStore / maxValue) * 100}%`,
                  }}
                />
              </div>
  
              <span className="text-xs text-gray-400">
                {d.month}
              </span>
            </div>
          ))}
        </div>
      </div>
    );
  }