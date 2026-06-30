

import {
    Heart,
    Package,
    Star,
  } from "lucide-react";
  
  const values = [
    {
      Icon: Heart,
      text: "Fresh, hand-tied daily",
      desc: "Every stem is cut the morning it ships, never sooner.",
    },
    {
      Icon: Package,
      text: "Free local delivery",
      desc: "Same-day delivery on orders placed before 1 pm.",
    },
    {
      Icon: Star,
      text: "Happiness guarantee",
      desc: "Not thrilled? We'll remake or refund — no questions.",
    },
  ];
  
  export default function ValuesSection() {
    return (
      <section className="bg-gray-50 py-10 md:py-20">
  
        <div className="mx-auto grid max-w-7xl gap-8 px-5 text-center md:grid-cols-3 md:gap-14 md:px-6">
  
          {values.map(
            ({
              Icon,
              text,
              desc,
            }) => (
  
              <div key={text}>
  
                {/* Icon */}
                <Icon
                  size={22}
                  className="mx-auto mb-4 text-gray-900"
                />
  
                {/* Title */}
                <p className="mb-2 text-sm font-medium">
                  {text}
                </p>
  
                {/* Description */}
                <p className="mx-auto max-w-xs text-xs leading-relaxed text-gray-500">
                  {desc}
                </p>
  
              </div>
            )
          )}
  
        </div>
  
      </section>
    );
  }