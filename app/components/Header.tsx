// components/Header.tsx

import { useState } from "react";
import {
  Globe,
  Heart,
  Menu,
  X,
} from "lucide-react";
import {
  NavLink,
  Link,
} from "react-router";

const navItems = [
  { label: "Shop Our Collection", path: "/shop" },
  { label: "Subscriptions", path: "/subscription" },
  { label: "Gift Subscriptions", path: "/gift" },
  { label: "Have a Question?", path: "/have-a-question" },
  { label: "Admin Panel", path: "/dashboard" },
];

const mobileNavItems = [
  {
    label: "Ship to: US ($)",
    icon: <Globe size={14} strokeWidth={1.5} className="text-gray-600" />,
  },
  { label: "Shop Our Collection", path: "/shop" },
  { label: "Subscriptions", path: "/subscription" },
  { label: "Gift Subscriptions", path: "/gift" },
  { label: "Have a Question?", path: "/have-a-question" },
  { label: "Admin Panel", path: "/dashboard" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [wishlistActive, setWishlistActive] = useState(false);

  return (
    <header className="w-full border-b border-gray-200 bg-white text-black">

      {/* TOP BAR */}
      <div className="hidden border-b border-gray-200 sm:block">

        <div className="mx-auto grid max-w-7xl grid-cols-3 items-center px-8 py-3">

          {/* LEFT */}
          <div className="flex items-center gap-2 text-[10px] text-gray-600">
            <Globe size={12} strokeWidth={1.5} className="text-gray-600" />
            <span>Ship to: US ($)</span>
          </div>

          {/* CENTER */}
          <div className="text-center">
            <NavLink to="/">
              {/* ✅ font-serif fallback + explicit text-black */}
              <h1 
                className="text-[15px] font-medium tracking-[0.55em] text-black"
                style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}
              >
                FLORISTA
              </h1>
            </NavLink>
          </div>

          {/* RIGHT */}
          <div className="flex items-center justify-end gap-5">

            {/* ✅ Heart icon with explicit text-black */}
            <button
              onClick={() => setWishlistActive(!wishlistActive)}
              className="text-black"
              type="button"
            >
              <Heart
                size={13}
                strokeWidth={1.6}
                className="text-black"
                fill={wishlistActive ? "currentColor" : "none"}
              />
            </button>

            {/* ✅ Shop Now button with explicit bg + text */}
            <Link to="/shop">
              <button 
                className="rounded-sm border border-gray-300 bg-white px-4 py-1.5 text-[10px] uppercase tracking-wider text-black transition hover:bg-black hover:text-white"
                type="button"
              >
                Shop Now
              </button>
            </Link>

          </div>

        </div>

      </div>

      {/* DESKTOP NAV */}
      <nav className="mx-auto hidden max-w-7xl sm:block">
        <ul className="flex items-center justify-center gap-16 py-4 text-[10px] uppercase tracking-wider text-black">
          {navItems.map(({ label, path }) => (
            <li key={path}>
              <NavLink
                to={path}
                className={({ isActive }) =>
                  `transition-colors ${
                    isActive
                      ? "font-semibold text-black"
                      : "text-gray-800 hover:text-black"
                  }`
                }
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      {/* MOBILE */}
      <div className="flex items-center justify-between px-4 py-3 sm:hidden">

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-black"
          type="button"
        >
          {menuOpen ? <X size={20} className="text-black" /> : <Menu size={20} className="text-black" />}
        </button>

        <NavLink to="/">
          <span 
            className="select-none text-sm font-bold uppercase tracking-[0.3em] text-black"
            style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}
          >
            Florista
          </span>
        </NavLink>

        <button
          onClick={() => setWishlistActive(!wishlistActive)}
          className="text-black"
          type="button"
        >
          <Heart
            size={20}
            className="text-black"
            fill={wishlistActive ? "currentColor" : "none"}
          />
        </button>

      </div>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="border-t border-gray-100 sm:hidden bg-white">
          <nav className="flex flex-col px-4 py-3 text-black">
            {mobileNavItems.map((item) => {
              if (!item.path) {
                return (
                  <div
                    key={item.label}
                    className="flex items-center gap-2 border-b border-gray-50 py-3 text-sm text-gray-700"
                  >
                    {item.icon}
                    {item.label}
                  </div>
                );
              }
              return (
                <NavLink
                  key={item.path}
                  to={item.path}
                  onClick={() => setMenuOpen(false)}
                  className={({ isActive }) =>
                    `flex items-center gap-2 border-b border-gray-50 py-3 text-sm transition-colors ${
                      isActive ? "font-semibold text-black" : "text-gray-700"
                    }`
                  }
                >
                  {item.icon}
                  {item.label}
                </NavLink>
              );
            })}

            {/* MOBILE SHOP BUTTON */}
            <Link to="/shop" onClick={() => setMenuOpen(false)}>
              <button 
                className="mt-4 w-full border border-gray-300 bg-white py-3 text-sm font-medium text-black transition hover:bg-black hover:text-white"
                type="button"
              >
                Shop Now
              </button>
            </Link>

          </nav>
        </div>
      )}

    </header>
  );
}


// import { useState } from "react";

// import {
//   Globe,
//   Heart,
//   Menu,
//   X,
// } from "lucide-react";

// import {
//   NavLink,
//   Link,
// } from "react-router";

// const navItems = [
//   {
//     label: "Shop Our Collection",
//     path: "/shop",
//   },
//   {
//     label: "Subscriptions",
//     path: "/subscription",
//   },
//   {
//     label: "Gift Subscriptions",
//     path: "/gift",
//   },
//   {
//     label: "Have a Question?",
//     path: "/have-a-question",
//   },
// ];

// const mobileNavItems = [
//   {
//     label: "Ship to: US ($)",
//     icon: (
//       <Globe
//         size={14}
//         strokeWidth={1.5}
//       />
//     ),
//   },

//   {
//     label: "Shop Our Collection",
//     path: "/shop",
//   },

//   {
//     label: "Subscriptions",
//     path: "/subscription",
//   },

//   {
//     label: "Gift Subscriptions",
//     path: "/gift",
//   },

//   {
//     label: "Have a Question?",
//     path: "/have-a-question",
//   },
// ];

// export default function Header() {
//   const [menuOpen, setMenuOpen] =
//     useState(false);

//   const [
//     wishlistActive,
//     setWishlistActive,
//   ] = useState(false);

//   return (
//     <header className="w-full border-b border-gray-200 bg-white">

//       {/* TOP BAR */}
//       <div className="hidden border-b border-gray-200 sm:block">

//         <div className="mx-auto grid max-w-7xl grid-cols-3 items-center px-8 py-3">

//           {/* LEFT */}
//           <div className="flex items-center gap-2 text-[10px] text-gray-600">

//             <Globe
//               size={12}
//               strokeWidth={1.5}
//             />

//             <span>
//               Ship to: US ($)
//             </span>

//           </div>

//           {/* CENTER */}
//           <div className="text-center">

//             <NavLink to="/">

//               <h1 className="font-serif text-[15px] font-medium tracking-[0.55em] text-black">
//                 FLORISTA
//               </h1>

//             </NavLink>

//           </div>

//           {/* RIGHT */}
//           <div className="flex items-center justify-end gap-5">

//             <button
//               onClick={() =>
//                 setWishlistActive(
//                   !wishlistActive
//                 )
//               }
//             >
//               <Heart
//                 size={13}
//                 strokeWidth={1.6}
//                 fill={
//                   wishlistActive
//                     ? "currentColor"
//                     : "none"
//                 }
//               />
//             </button>

//             {/* SHOP BUTTON */}
//             <Link to="/shop">

//               <button className="rounded-sm border border-gray-300 px-4 py-1.5 text-[10px] uppercase tracking-wider transition hover:bg-black hover:text-white">

//                 Shop Now

//               </button>

//             </Link>

//           </div>

//         </div>

//       </div>

//       {/* DESKTOP NAV */}
//       <nav className="mx-auto hidden max-w-7xl sm:block">

//         <ul className="flex items-center justify-center gap-16 py-4 text-[10px] uppercase tracking-wider">

//           {navItems.map(
//             ({
//               label,
//               path,
//             }) => (
//               <li key={path}>

//                 <NavLink
//                   to={path}
//                   className={({
//                     isActive,
//                   }) =>
//                     `
//                     transition-colors
//                     ${
//                       isActive
//                         ? "text-black font-semibold"
//                         : "text-gray-800 hover:text-black"
//                     }
//                   `
//                   }
//                 >
//                   {label}
//                 </NavLink>

//               </li>
//             )
//           )}

//         </ul>

//       </nav>

//       {/* MOBILE */}
//       <div className="flex items-center justify-between px-4 py-3 sm:hidden">

//         <button
//           onClick={() =>
//             setMenuOpen(
//               !menuOpen
//             )
//           }
//         >
//           {menuOpen
//             ? <X size={20} />
//             : <Menu size={20} />}
//         </button>

//         <NavLink to="/">

//           <span className="select-none text-sm font-bold uppercase tracking-[0.3em]">
//             Florista
//           </span>

//         </NavLink>

//         <button
//           onClick={() =>
//             setWishlistActive(
//               !wishlistActive
//             )
//           }
//         >
//           <Heart
//             size={20}
//             fill={
//               wishlistActive
//                 ? "currentColor"
//                 : "none"
//             }
//           />
//         </button>

//       </div>

//       {/* MOBILE MENU */}
//       {menuOpen && (

//         <div className="border-t border-gray-100 sm:hidden">

//           <nav className="flex flex-col px-4 py-3">

//             {mobileNavItems.map(
//               (item) => {

//                 if (
//                   !item.path
//                 ) {
//                   return (
//                     <div
//                       key={
//                         item.label
//                       }
//                       className="flex items-center gap-2 border-b border-gray-50 py-3 text-sm text-gray-700"
//                     >
//                       {item.icon}

//                       {
//                         item.label
//                       }

//                     </div>
//                   );
//                 }

//                 return (
//                   <NavLink
//                     key={
//                       item.path
//                     }
//                     to={
//                       item.path
//                     }
//                     onClick={() =>
//                       setMenuOpen(
//                         false
//                       )
//                     }
//                     className={({
//                       isActive,
//                     }) =>
//                       `
//                       flex items-center
//                       gap-2
//                       border-b
//                       border-gray-50
//                       py-3
//                       text-sm
//                       transition-colors
//                       ${
//                         isActive
//                           ? "font-semibold text-black"
//                           : "text-gray-700"
//                       }
//                     `
//                     }
//                   >
//                     {
//                       item.icon
//                     }

//                     {
//                       item.label
//                     }

//                   </NavLink>
//                 );
//               }
//             )}

//             {/* MOBILE SHOP BUTTON */}
//             <Link
//               to="/shop"
//               onClick={() =>
//                 setMenuOpen(
//                   false
//                 )
//               }
//             >

//               <button className="mt-4 w-full border border-gray-300 py-3 text-sm font-medium transition hover:bg-black hover:text-white">

//                 Shop Now

//               </button>

//             </Link>

//           </nav>

//         </div>

//       )}

//     </header>
//   );
// }







