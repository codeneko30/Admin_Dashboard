
import { useState } from "react";


export default function Marketing() {


    const [marketing, setMarketing] = useState({
        emailSubscribed: false,
        smsUpdates: false,
    });



    const toggleMarketing = (field: string) => {
        setMarketing((prev) => ({
            ...prev,
            [field]: !prev[field],
        }));
    };



    function Toggle({ enabled, onToggle }) {

        return (

            <button
                onClick={onToggle}
                className={`relative inline-flex h-5 w-9 items-center rounded-full transition-colors duration-200 focus:outline-none ${
                    enabled 
                    ? "bg-gray-900" 
                    : "bg-gray-200"
                }`}
            >

                <span
                    className={`inline-block h-3.5 w-3.5 transform rounded-full bg-white shadow transition-transform duration-200 ${
                        enabled 
                        ? "translate-x-4" 
                        : "translate-x-1"
                    }`}
                />

            </button>

        );

    }



    return (

        <div className="border border-gray-200 rounded-xl p-5">

            <h2 className="text-sm font-semibold text-gray-900 mb-4">
                Marketing
            </h2>



            {/* Email subscribed */}
            <div className="flex items-center justify-between mb-3">

                <span className="text-sm text-gray-700">
                    Email subscribed
                </span>


                <Toggle
                    enabled={marketing.emailSubscribed}
                    onToggle={() =>
                        toggleMarketing("emailSubscribed")
                    }
                />

            </div>




            {/* SMS updates */}
            <div className="flex items-center justify-between">

                <span className="text-sm text-gray-700">
                    SMS updates
                </span>


                <Toggle
                    enabled={marketing.smsUpdates}
                    onToggle={() =>
                        toggleMarketing("smsUpdates")
                    }
                />

            </div>


        </div>

    );
}