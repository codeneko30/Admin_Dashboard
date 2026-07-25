


// import {
//   LayoutGrid,
//   ShoppingCart,
//   Package,
//   Users,
//   Settings,
// } from "lucide-react";

// import { Link, useLocation } from "react-router";

// export default function BottomNav() {
//   const location = useLocation();

//   const navItems = [
//     {
//       label: "Dashboard",
//       icon: LayoutGrid,
//       path: "/",
//     },
//     {
//       label: "Orders",
//       icon: ShoppingCart,
//       path: "/orders",
//     },
//     {
//       label: "Products",
//       icon: Package,
//       path: "/products",
//     },
//     {
//       label: "Customers",
//       icon: Users,
//       path: "/customers",
//     },
//     {
//       label: "Settings",
//       icon: Settings,
//       path: "/settings",
//     },
//   ];

//   const isActive = (path: string) => {
//     if (path === "/") {
//       return location.pathname === "/";
//     }

//     return location.pathname.startsWith(path);
//   };

//   return (
//     <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-gray-200 bg-white md:hidden">
//       <div className="mx-auto max-w-md px-2 py-1">

//         <div className="flex items-center justify-around">

//           {navItems.map(({ label, icon: Icon, path }) => (
//             <Link
//               key={path}
//               to={path}
//               className={`relative flex flex-col items-center rounded-xl px-3 py-2 transition-all ${
//                 isActive(path)
//                   ? "text-gray-900"
//                   : "text-gray-400 hover:text-gray-600"
//               }`}
//             >
//               <Icon className="mb-1 h-5 w-5" />

//               <span className="text-[10px] font-medium tracking-tight">
//                 {label}
//               </span>

//               {isActive(path) && (
//                 <div className="absolute bottom-1 left-1/2 h-0.5 w-5 -translate-x-1/2 rounded-full bg-gray-900" />
//               )}
//             </Link>
//           ))}

//         </div>

//       </div>
//     </div>
//   );
// }














import {
  LayoutGrid,
  ShoppingCart,
  Package,
  Users,
  Settings,
} from "lucide-react";

import { NavLink } from "react-router";

export default function BottomNav() {
  const navItems = [
    {
      label: "Dashboard",
      icon: LayoutGrid,
      path: "/dashboard",
    },
    {
      label: "Orders",
      icon: ShoppingCart,
      path: "/orders",
    },
    {
      label: "Products",
      icon: Package,
      path: "/products",
    },
    {
      label: "Customers",
      icon: Users,
      path: "/customers",
    },
    {
      label: "Settings",
      icon: Settings,
      path: "/settings",
    },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-gray-200 bg-white md:hidden">

      <div className="mx-auto max-w-md px-2 py-1">

        <div className="flex items-center justify-around">

          {navItems.map(({ label, icon: Icon, path }) => (

            <NavLink
              key={path}
              to={path}
              end={path === "/"}
              className={({ isActive }) =>
                `relative flex flex-col items-center rounded-xl px-3 py-2 transition-all ${
                  isActive
                    ? "text-gray-900"
                    : "text-gray-400 hover:text-gray-600"
                }`
              }
            >

              {({ isActive }) => (
                <>
                  <Icon className="mb-1 h-5 w-5" />

                  <span className="text-[10px] font-medium tracking-tight">
                    {label}
                  </span>

                  {isActive && (
                    <div className="absolute bottom-1 left-1/2 h-0.5 w-5 -translate-x-1/2 rounded-full bg-gray-900" />
                  )}
                </>
              )}

            </NavLink>

          ))}

        </div>

      </div>

    </div>
  );
}