
export default function Customer_Details_Stats() {

    const stats = [
        {
            label: "Total spent",
            value: "$2,480",
            change: "+12.5%",
            sub: "Lifetime value",
        },
        {
            label: "Orders",
            value: "12",
            change: "+2",
            sub: "last 90 days",
        },
        {
            label: "Avg. order value",
            value: "$206",
            change: "+31%",
            sub: "per order",
        },
    ];


    return (
        <div className="grid grid-cols-3 gap-4">

            {stats.map((stat, i) => (
                <div 
                    key={i}
                    className="border border-gray-200 rounded-xl p-4"
                >

                    <p className="text-xs text-gray-500 mb-1">
                        {stat.label}
                    </p>

                    <p className="text-2xl font-bold text-gray-900 mb-1">
                        {stat.value}
                    </p>

                    <div className="flex items-center gap-1.5">

                        <span className="text-xs font-semibold text-green-600">
                            {stat.change}
                        </span>

                        <span className="text-xs text-gray-400">
                            {stat.sub}
                        </span>

                    </div>

                </div>
            ))}

        </div>
    );
}