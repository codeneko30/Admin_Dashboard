import { useState } from "react";
import Sidebar from "~/components/Sidebar";
import SettingsTabs from "~/components/SettingsTabs";
import StoreProfile from "~/components/StoreProfile";
import StoreAddress from "~/components/StoreAddress";



export default function Settings() {
    const [activeItem, setActiveItem] = useState("");
    

   
   

    return (
        <div className="min-h-screen bg-white font-sans ">
            {/* Sidebar */}
            <Sidebar activeItem={activeItem} setActiveItem={setActiveItem} />

            <main className=" ml-60  max-w-4xl mx-auto px-6 py-8">

                {/* ── Header ── */}
                <div className="mb-6">
                    <h1 className="text-2xl font-bold text-gray-900">Settings</h1>
                    <p className="text-sm text-gray-500 mt-0.5">
                        Manage your store and account preferences.
                    </p>
                </div>

                {/* ── Tabs ── */}
                
                <SettingsTabs/>

                {/* ── Main Content Grid ── */}
                <div className="grid grid-cols-3 gap-5">

                    {/* ── Left Column ── */}
                    <div className="col-span-2 space-y-5">

                        {/* Store Profile Card */}
                         <StoreProfile/>

                        {/* Store Address Card */}
                        <StoreAddress/>

                    </div>

                    {/* ── Right Column ── */}
                    <div className="col-span-1 space-y-5">

                        {/* Branding Card */}
                        <div className="border border-gray-200 rounded-xl p-5">
                            <h2 className="text-sm font-semibold text-gray-900">Branding</h2>
                            <p className="text-xs text-gray-500 mt-0.5 mb-4">
                                Your store logo and accent.
                            </p>

                            {/* Upload Logo */}
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-gray-900 rounded-lg flex items-center justify-center flex-shrink-0">
                                    <svg
                                        className="w-5 h-5 text-white"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={1.5}
                                            d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                                        />
                                    </svg>
                                </div>
                                <button className="flex-1 text-sm text-gray-700 border border-gray-200 rounded-lg px-3 py-2 hover:bg-gray-50 transition-colors font-medium text-left">
                                    Upload logo
                                </button>
                            </div>
                        </div>

                        {/* Danger Zone Card */}
                        <div className="border border-gray-200 rounded-xl p-5">
                            <h2 className="text-sm font-semibold text-gray-900">Danger zone</h2>
                            <p className="text-xs text-gray-500 mt-0.5 mb-4">
                                Irreversible actions.
                            </p>
                            <button className="w-full text-sm text-gray-700 border border-gray-200 rounded-lg px-3 py-2 hover:bg-red-50 hover:text-red-600 hover:border-red-200 transition-colors font-medium">
                                Delete store
                            </button>
                        </div>

                    </div>
                </div>
            </main>
        </div>
    );
};

