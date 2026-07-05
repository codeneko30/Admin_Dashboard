

import { useState } from "react";
import Sidebar from "~/components/Sidebar";
import BottomNav from "~/components/BottomNav";
import SettingsTabs from "./_components/SettingsTabs"
import StoreProfile from "./_components/StoreProfile"
import StoreAddress from "./_components/StoreAddress";
import Branding from "~/components/Branding ";
import Button from "~/components/Button";







export default function Settings() {
    const [activeItem, setActiveItem] = useState("");




    return (
        <div className="min-h-screen bg-white font-sans flex">

            {/* Sidebar */}
            <Sidebar activeItem={activeItem} setActiveItem={setActiveItem} />

            <main className="
                flex-1
                w-full
                ml-0 md:ml-60
                max-w-6xl
                mx-auto
                px-4 sm:px-6 lg:px-8
                py-6 sm:py-8
            ">

                {/* Header */}
                <div className="mb-6">
                    <h1 className="text-xl sm:text-2xl font-bold text-gray-900">
                        Settings
                    </h1>
                    <p className="text-xs sm:text-sm text-gray-500 mt-1 hidden md:block">
                        Manage your store and account preferences.
                    </p>
                </div>

                {/* Tabs (scrollable on mobile) */}

                <SettingsTabs />

                {/* GRID */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">

                    {/* LEFT */}
                    <div className="lg:col-span-2 space-y-5">




                        {/* Store Profile Card */}

                        <StoreProfile />




                        {/* Store Address Card */}

                        <StoreAddress />
                    </div>

                    {/* RIGHT  */}
                    <div className="space-y-5">

                        {/* Branding */}

                        <Branding />

                        {/* Danger zone */}

                        <div className="border border-gray-200 rounded-xl p-5">
                            <h2 className="text-sm font-semibold text-gray-900">Danger zone</h2>
                            <p className="text-xs text-gray-500 mt-0.5 mb-4">
                                Irreversible actions.
                            </p>

                            <button className="w-full text-sm text-gray-700 border border-gray-200 rounded-lg px-3 py-2 hover:bg-red-50 hover:text-red-600 hover:border-red-200 transition-colors font-medium">
                                Delete store
                            </button>
                        </div>



                        {/* Save button (Mobile only) */}

                        <div id="1" className="sm:hidden  rounded-xl p-4 mb-20 ">

                            {/* <button className="w-full bg-gray-900 text-white px-4 py-2 rounded-lg text-sm">
                                Save changes
                            </button> */}

                            <Button fullWidth>  Save changes</Button>


                        </div>

                        <div id="2">

                            {/* bottom nav */}

                            <BottomNav activeItem={activeItem} setActiveItem={setActiveItem} />

                        </div>





                    </div>
                </div>


            </main>




        </div>
    );
}