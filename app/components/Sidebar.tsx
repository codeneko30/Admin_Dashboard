// import {
//     LayoutDashboard,
//     ShoppingCart,
//     Package,
//     Users,
//     Settings,
//     HelpCircle,
//     ChevronLeft,

// } from "lucide-react";


// type Props = {
//     activeItem: string;
//     setActiveItem: (value: string) => void;
// };


// export default function Sidebar({ activeItem, setActiveItem }: Props) {

//     const navItems = [
//         { name: "Dashboard", icon: LayoutDashboard },
//         { name: "Orders", icon: ShoppingCart, badge: 1 },
//         { name: "Products", icon: Package },
//         { name: "Customers", icon: Users },
//     ];

//     return (
//         <aside className="fixed left-0 top-0 flex h-screen w-56 flex-col border-r border-gray-200 bg-white">

//             {/* Logo */}
//             <div className="flex items-center gap-2 border-b border-gray-100 px-4 py-4">
//                 <div className="flex h-6 w-6 items-center justify-center rounded bg-black">
//                     <Package size={14} className="text-white" />
//                 </div>
//                 <span className="text-sm font-semibold">
//                     Apex Store
//                 </span>
//             </div>

//             {/* Nav */}
//             <nav className="flex-1 px-3 py-3">

//                 {navItems.map(({ name, icon: Icon, badge }) => (

//                     <button key={name} onClick={() => setActiveItem(name)} className={`mb-1 flex w-full items-center justify-between rounded-md px-3 py-2 text-sm ${activeItem === name ? "bg-gray-100 font-medium text-gray-900" : "text-gray-600 hover:bg-gray-50"}`}>

//                         <div className="flex items-center gap-2">
//                             <Icon size={16} />
//                             <span>{name}</span>
//                         </div>


//                         {badge && (
//                             <span className="flex h-4 w-4 items-center justify-center rounded-full bg-black text-xs text-white">
//                                 {badge}
//                             </span>
//                         )}

//                     </button>

//                 ))}
//             </nav>

//             {/* Bottom */}
//             <div className="px-3 py-2">
//                 <button className="rounded-md p-2 text-gray-500 hover:bg-gray-50">
//                     <ChevronLeft size={16} />
//                 </button>
//             </div>

//             <div className="border-t border-gray-100 px-3 py-3">
//                 <button className="mb-1 flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm text-gray-600 hover:bg-gray-50">
//                     <Settings size={16} />
//                     Settings
//                 </button>

//                 <button className="flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm text-gray-600 hover:bg-gray-50">
//                     <HelpCircle size={16} />
//                     Help
//                 </button>
//             </div>

//             {/* User */}
//             <div className="border-t border-gray-100 px-3 py-3">
//                 <div className="flex items-center gap-3">
//                     <div className="flex h-7 w-7 items-center justify-center rounded-full bg-gray-300 text-xs font-semibold">
//                         JC
//                     </div>

//                     <div>
//                         <p className="text-xs font-medium">
//                             Jane Cooper
//                         </p>
//                         <p className="text-xs text-gray-500">
//                             jane@apexstore.io
//                         </p>
//                     </div>
//                 </div>
//             </div>


//         </aside>

//     )


// }












import {
    LayoutDashboard,
    ShoppingCart,
    Package,
    Users,
    Settings,
    HelpCircle,
    ChevronLeft,
} from "lucide-react";

import { Link, useLocation } from "react-router";

export default function Sidebar() {

    const location = useLocation();

    const navItems = [
        { name: "Dashboard", icon: LayoutDashboard, path: "/" },// index route
        { name: "Orders", icon: ShoppingCart, path: "/orders" }, 
        { name: "Products", icon: Package, path: "/products" },
        { name: "Customers", icon: Users, path: "/customers" },
    ];

    const isActive = (path: string) => {
        if (path === "/") return location.pathname === "/";
        return location.pathname.startsWith(path);
    };

    return (
        <aside className="fixed left-0 top-0 flex h-screen w-56 flex-col border-r border-gray-200 bg-white">

            {/* Logo */}
            <div className="flex items-center gap-2 border-b border-gray-100 px-4 py-4">
                <div className="flex h-6 w-6 items-center justify-center rounded bg-black">
                    <Package size={14} className="text-white" />
                </div>
                <span className="text-sm font-semibold">Apex Store</span>
            </div>

            {/* Nav */}
            <nav className="flex-1 px-3 py-3">
                {navItems.map(({ name, icon: Icon, path }) => (
                    <Link
                        key={name}
                        to={path}
                        className={`mb-1 flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm transition
                            ${isActive(path)
                                ? "bg-gray-100 text-black font-medium"
                                : "text-gray-600 hover:bg-gray-50"
                            }`}
                    >
                        <Icon size={16} />
                        <span>{name}</span>
                    </Link>
                ))}
            </nav>

            {/* Bottom button */}
            <div className="px-3 py-2">
                <button className="rounded-md p-2 text-gray-500 hover:bg-gray-50">
                    <ChevronLeft size={16} />
                </button>
            </div>

            {/* Settings + Help */}
            <div className="border-t border-gray-100 px-3 py-3">

                <Link
                    to="/settings"
                    className={`mb-1 flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm
                        ${location.pathname === "/settings"
                            ? "bg-gray-100 text-black font-medium"
                            : "text-gray-600 hover:bg-gray-50"
                        }`}
                >
                    <Settings size={16} />
                    Settings
                </Link>

                <Link
                    to="/help"
                    className={`flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm
                        ${location.pathname === "/help"
                            ? "bg-gray-100 text-black font-medium"
                            : "text-gray-600 hover:bg-gray-50"
                        }`}
                >
                    <HelpCircle size={16} />
                    Help
                </Link>

            </div>

            {/* User */}
            <div className="border-t border-gray-100 px-3 py-3">
                <div className="flex items-center gap-3">
                    <div className="flex h-7 w-7 items-center justify-center rounded-full bg-gray-300 text-xs font-semibold">
                        JC
                    </div>

                    <div>
                        <p className="text-xs font-medium">Jane Cooper</p>
                        <p className="text-xs text-gray-500">jane@apexstore.io</p>
                    </div>
                </div>
            </div>

        </aside>
    );
}