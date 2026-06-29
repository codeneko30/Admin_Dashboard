

export default function DefaultAddress() {

    const address = {
        name: "Olivia Bennett",
        line1: "248 Maple Avenue, Apt 12",
        line2: "Portland, OR 97201",
        country: "United States",
    };


    return (
        <div className="border border-gray-200 rounded-xl p-5">

            <h2 className="text-sm font-semibold text-gray-900 mb-4">
                Default address
            </h2>


            <div className="space-y-0.5">

                <p className="text-sm font-medium text-gray-900">
                    {address.name}
                </p>

                <p className="text-sm text-gray-600">
                    {address.line1}
                </p>

                <p className="text-sm text-gray-600">
                    {address.line2}
                </p>

                <p className="text-sm text-gray-600">
                    {address.country}
                </p>

            </div>

        </div>
    );
}