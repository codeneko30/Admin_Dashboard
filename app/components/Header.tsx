// import { useState } from "react";
// import { Globe, Heart, Menu, X } from "lucide-react";

// const navItems = [
//   "Shop Our Collection",
//   "Subscriptions",
//   "Gift Subscriptions",
//   "Business",
//   "Have a Question?",
// ];

// const mobileNavItems = [
//   { label: "Ship to: US ($)", icon: <Globe size={14} strokeWidth={1.5} /> },
//   { label: "Shop Our Collection" },
//   { label: "Subscriptions" },
//   { label: "Gift Subscriptions" },
//   { label: "Business" },
//   { label: "Have a Question?" },
// ];

// export default function Header() {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [wishlistActive, setWishlistActive] = useState(false);

//   return (
//     <header className="w-full border-b border-gray-200 bg-white">

//       {/* ── TOP BAR (hidden on mobile) ── */}
//       <div className="hidden border-b border-gray-200 sm:block">
//         <div className="mx-auto grid max-w-7xl grid-cols-3 items-center px-8 py-3">

//           {/* LEFT */}
//           <div className="flex items-center gap-2 text-[10px] text-gray-600">
//             <Globe size={12} strokeWidth={1.5} />
//             <span>Ship to: US ($)</span>
//           </div>

//           {/* CENTER */}
//           <div className="text-center">
//             <h1 className="font-serif text-[15px] font-medium tracking-[0.55em] text-black">
//               FLORISTA
//             </h1>
//           </div>

//           {/* RIGHT */}
//           <div className="flex items-center justify-end gap-5">
//             <button
//               onClick={() => setWishlistActive(!wishlistActive)}
//               aria-label="Wishlist"
//               className="text-black transition"
//             >
//               <Heart
//                 size={13}
//                 strokeWidth={1.6}
//                 fill={wishlistActive ? "currentColor" : "none"}
//               />
//             </button>

//             <button className="rounded-sm border border-gray-300 px-4 py-1.5 text-[10px] uppercase tracking-wider transition hover:bg-black hover:text-white">
//               Shop Now
//             </button>
//           </div>

//         </div>
//       </div>

//       {/* ── DESKTOP NAVBAR (hidden on mobile) ── */}
//       <nav className="mx-auto hidden max-w-7xl sm:block">
//         <ul className="flex items-center justify-center gap-16 py-4 text-[10px] uppercase tracking-wider text-gray-800">
//           {navItems.map((item) => (
//             <li key={item}>
//               <a href="#" className="hover:text-black transition-colors">
//                 {item}
//               </a>
//             </li>
//           ))}
//         </ul>
//       </nav>

//       {/* ── MOBILE HEADER (hidden on sm+) ── */}
//       <div className="flex items-center justify-between px-4 py-3 sm:hidden">

//         {/* Hamburger */}
//         <button
//           onClick={() => setMenuOpen(!menuOpen)}
//           aria-label={menuOpen ? "Close menu" : "Open menu"}
//           className="text-gray-700 transition hover:text-gray-900"
//         >
//           {menuOpen ? <X size={20} /> : <Menu size={20} />}
//         </button>

//         {/* Logo */}
//         <span className="select-none text-sm font-bold uppercase tracking-[0.3em] text-gray-900">
//           Florista
//         </span>

//         {/* Wishlist */}
//         <button
//           onClick={() => setWishlistActive(!wishlistActive)}
//           aria-label="Wishlist"
//           className="text-gray-700 transition hover:text-gray-900"
//         >
//           <Heart
//             size={20}
//             strokeWidth={1.8}
//             fill={wishlistActive ? "currentColor" : "none"}
//             className={wishlistActive ? "text-gray-900" : ""}
//           />
//         </button>
//       </div>

//       {/* ── MOBILE MENU (hidden on sm+) ── */}
//       {menuOpen && (
//         <div className="border-t border-gray-100 sm:hidden">
//           <nav className="flex flex-col px-4 py-3">
//             {mobileNavItems.map((item) => (
//               <a
//                 key={item.label}
//                 href="#"
//                 className="flex items-center gap-2 border-b border-gray-50 py-3 text-sm text-gray-700 last:border-0 hover:text-gray-900 transition-colors"
//               >
//                 {item.icon && item.icon}
//                 {item.label}
//               </a>
//             ))}

//             {/* Mobile CTA */}
//             <button className="mt-4 border border-gray-300 py-3 text-sm font-medium transition hover:bg-black hover:text-white">
//               Shop Now
//             </button>
//           </nav>
//         </div>
//       )}

//     </header>
//   );
// }












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
  {
    label: "Shop Our Collection",
    path: "/shop",
  },
  {
    label: "Subscriptions",
    path: "/subscription",
  },
  {
    label: "Gift Subscriptions",
    path: "/gift",
  },
  {
    label: "Have a Question?",
    path: "/have-a-question",
  },
];

const mobileNavItems = [
  {
    label: "Ship to: US ($)",
    icon: (
      <Globe
        size={14}
        strokeWidth={1.5}
      />
    ),
  },

  {
    label: "Shop Our Collection",
    path: "/shop",
  },

  {
    label: "Subscriptions",
    path: "/subscription",
  },

  {
    label: "Gift Subscriptions",
    path: "/gift",
  },

  {
    label: "Have a Question?",
    path: "/have-a-question",
  },
];

export default function Header() {
  const [menuOpen, setMenuOpen] =
    useState(false);

  const [
    wishlistActive,
    setWishlistActive,
  ] = useState(false);

  return (
    <header className="w-full border-b border-gray-200 bg-white">

      {/* TOP BAR */}
      <div className="hidden border-b border-gray-200 sm:block">

        <div className="mx-auto grid max-w-7xl grid-cols-3 items-center px-8 py-3">

          {/* LEFT */}
          <div className="flex items-center gap-2 text-[10px] text-gray-600">

            <Globe
              size={12}
              strokeWidth={1.5}
            />

            <span>
              Ship to: US ($)
            </span>

          </div>

          {/* CENTER */}
          <div className="text-center">

            <NavLink to="/">

              <h1 className="font-serif text-[15px] font-medium tracking-[0.55em] text-black">
                FLORISTA
              </h1>

            </NavLink>

          </div>

          {/* RIGHT */}
          <div className="flex items-center justify-end gap-5">

            <button
              onClick={() =>
                setWishlistActive(
                  !wishlistActive
                )
              }
            >
              <Heart
                size={13}
                strokeWidth={1.6}
                fill={
                  wishlistActive
                    ? "currentColor"
                    : "none"
                }
              />
            </button>

            {/* SHOP BUTTON */}
            <Link to="/shop">

              <button className="rounded-sm border border-gray-300 px-4 py-1.5 text-[10px] uppercase tracking-wider transition hover:bg-black hover:text-white">

                Shop Now

              </button>

            </Link>

          </div>

        </div>

      </div>

      {/* DESKTOP NAV */}
      <nav className="mx-auto hidden max-w-7xl sm:block">

        <ul className="flex items-center justify-center gap-16 py-4 text-[10px] uppercase tracking-wider">

          {navItems.map(
            ({
              label,
              path,
            }) => (
              <li key={path}>

                <NavLink
                  to={path}
                  className={({
                    isActive,
                  }) =>
                    `
                    transition-colors
                    ${
                      isActive
                        ? "text-black font-semibold"
                        : "text-gray-800 hover:text-black"
                    }
                  `
                  }
                >
                  {label}
                </NavLink>

              </li>
            )
          )}

        </ul>

      </nav>

      {/* MOBILE */}
      <div className="flex items-center justify-between px-4 py-3 sm:hidden">

        <button
          onClick={() =>
            setMenuOpen(
              !menuOpen
            )
          }
        >
          {menuOpen
            ? <X size={20} />
            : <Menu size={20} />}
        </button>

        <NavLink to="/">

          <span className="select-none text-sm font-bold uppercase tracking-[0.3em]">
            Florista
          </span>

        </NavLink>

        <button
          onClick={() =>
            setWishlistActive(
              !wishlistActive
            )
          }
        >
          <Heart
            size={20}
            fill={
              wishlistActive
                ? "currentColor"
                : "none"
            }
          />
        </button>

      </div>

      {/* MOBILE MENU */}
      {menuOpen && (

        <div className="border-t border-gray-100 sm:hidden">

          <nav className="flex flex-col px-4 py-3">

            {mobileNavItems.map(
              (item) => {

                if (
                  !item.path
                ) {
                  return (
                    <div
                      key={
                        item.label
                      }
                      className="flex items-center gap-2 border-b border-gray-50 py-3 text-sm text-gray-700"
                    >
                      {item.icon}

                      {
                        item.label
                      }

                    </div>
                  );
                }

                return (
                  <NavLink
                    key={
                      item.path
                    }
                    to={
                      item.path
                    }
                    onClick={() =>
                      setMenuOpen(
                        false
                      )
                    }
                    className={({
                      isActive,
                    }) =>
                      `
                      flex items-center
                      gap-2
                      border-b
                      border-gray-50
                      py-3
                      text-sm
                      transition-colors
                      ${
                        isActive
                          ? "font-semibold text-black"
                          : "text-gray-700"
                      }
                    `
                    }
                  >
                    {
                      item.icon
                    }

                    {
                      item.label
                    }

                  </NavLink>
                );
              }
            )}

            {/* MOBILE SHOP BUTTON */}
            <Link
              to="/shop"
              onClick={() =>
                setMenuOpen(
                  false
                )
              }
            >

              <button className="mt-4 w-full border border-gray-300 py-3 text-sm font-medium transition hover:bg-black hover:text-white">

                Shop Now

              </button>

            </Link>

          </nav>

        </div>

      )}

    </header>
  );
}