

import {
    FaInstagram,
    FaFacebook,
    FaLinkedin,
    FaPinterest,
    FaTwitter,
  } from "react-icons/fa";

const sections = [
  {
    title: "Shop",
    items: ["Our Bouquets", "Best Sellers", "Roses & Classics", "Add-ons & Gifts"],
  },
  {
    title: "About",
    items: ["Our Story", "Floral Journal", "Sustainability", "Careers"],
  },
  {
    title: "Help",
    items: ["Delivery Information", "Care Guide", "FAQ", "Contact Us"],
  },
  {
    title: "Legal",
    items: ["Privacy Policy", "Terms & Conditions", "Freshness Guarantee", "Cookie Preferences"],
  },
];

const socials = [
    { label: "Instagram", icon: <FaInstagram size={16} /> },
    { label: "Facebook", icon: <FaFacebook size={16} /> },
    { label: "LinkedIn", icon: <FaLinkedin size={16} /> },
    { label: "Pinterest", icon: <FaPinterest size={16} /> },
    { label: "Twitter", icon: <FaTwitter size={16} /> },
  ];

export default function Footer() {
  return (
    <footer className="w-full border-t border-gray-200 bg-white">
      <div className="mx-auto max-w-7xl px-5 py-12 md:px-8 md:py-14">

        {/* ── TOP — brand + link columns ── */}
        <div className="grid grid-cols-2 gap-x-6 gap-y-10 md:grid-cols-[1.4fr_1fr_1fr_1fr_1fr]">

          {/* BRAND — full-width on mobile, first col on desktop */}
          <div className="col-span-2 pr-0 md:col-span-1 md:pr-8">
            <div className="mb-4 flex items-center gap-2">
              <div className="h-4 w-4 rounded-sm bg-black" />
              <h2 className="text-[11px] font-semibold tracking-[0.35em] text-black">
                FLORISTA
              </h2>
            </div>
            <p className="max-w-[180px] text-[11px] leading-5 text-gray-500">
              Beautiful blooms, delivered fresh to your door.
            </p>
          </div>

          {/* LINK COLUMNS */}
          {sections.map((section) => (
            <div key={section.title}>
              <h3 className="mb-5 text-[11px] font-semibold uppercase tracking-wider text-gray-900">
                {section.title}
              </h3>
              <ul className="space-y-4">
                {section.items.map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-[11px] text-gray-500 transition-colors hover:text-black"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* ── BOTTOM ── */}
        <div className=" mt-10 h-4 border-gray-200 pt-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between bg-[#fafafa] ">

          {/* LEFT — copyright + links */}
          <div className="flex flex-wrap items-center gap-4 text-[10px] text-gray-500">
            <span>© 2026 Florista. All rights reserved.</span>
            <a href="#" className="   hidden md:block  transition-colors hover:text-black">Privacy &amp; Disclaimer</a>
            <a href="#" className=" hidden md:block   transition-colors hover:text-black">Cookie Policy</a>
          </div>

          {/* RIGHT — social icons */}
          <div className="flex items-center gap-4 text-gray-500">
            {socials.map(({ label, icon }) => (
              <a
                key={label}
                href="#"
                aria-label={label}
                className="transition-colors hover:text-black"
              >
                {icon}
              </a>
            ))}
          </div>

        </div>
      </div>
    </footer>
  );
}
