

import { ChevronDown } from "lucide-react";

export default function AccordionItem({
  item,
  isOpen,
  onToggle,
}) 

{
  return (
    <div className="overflow-hidden rounded-xl border border-gray-200 bg-white">

      {/* Header */}
      <button
        onClick={onToggle}
        className="flex w-full items-center justify-between gap-4 px-4 py-4 text-left sm:px-5"
      >

        <span
          className={`
            text-sm font-medium text-gray-900
            sm:text-base
            ${
              isOpen
                ? "underline underline-offset-4"
                : ""
            }
          `}
        >
          {item.q}
        </span>

        <ChevronDown
          size={16}
          className={`
            shrink-0 text-gray-500
            transition-transform duration-200
            ${
              isOpen
                ? "rotate-180"
                : ""
            }
          `}
        />

      </button>

      {/* Content */}
      <div
        className={`
          grid
          transition-all duration-200 ease-in-out
          ${
            isOpen
              ? "grid-rows-[1fr] opacity-100"
              : "grid-rows-[0fr] opacity-0"
          }
        `}
      >

        <div className="overflow-hidden">

          <p className="px-4 pb-4 text-sm leading-relaxed text-gray-500 sm:px-5">
            {item.a}
          </p>

        </div>

      </div>

    </div>
  );
}