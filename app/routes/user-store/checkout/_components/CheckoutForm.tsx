
import { useState } from "react";

import {
  Mail,
  Phone,
  User,
  MapPin,
  ChevronDown,
  Building2,
  Hash,
  Truck,
  Zap,
  Sunrise,
} from "lucide-react";

export default function CheckoutForm() {
  const [billingSame, setBillingSame] =
    useState(true);

  const [delivery, setDelivery] =
    useState("standard");

  const deliveryOptions = [
    {
      id: "standard",
      label: "Standard Delivery (2–3 days)",
      price: "€4.99",
      icon: Truck,
    },

    {
      id: "sameday",
      label: "Same-Day Delivery",
      price: "€9.99",
      icon: Zap,
    },

    {
      id: "morning",
      label:
        "Morning Delivery (before 12pm)",
      price: "€14.99",
      icon: Sunrise,
    },
  ];

  const inputClass =
    "w-full pl-9 pr-3 py-2.5 border border-gray-300 rounded-lg text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-900/10 focus:border-gray-400 bg-white";

  const labelClass =
    "block text-xs font-medium text-gray-600 mb-1.5";

  const iconClass =
    "absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none";

  return (
    <div className="lg:col-span-2 space-y-6 sm:space-y-8">

      {/* Contact */}
      <section>

        <h2 className="mb-4 text-sm font-semibold text-gray-900">
          Contact Information
        </h2>

        <div className="space-y-4">

          <div>

            <label className={labelClass}>
              Email address
            </label>

            <div className="relative">
              <Mail className={`${iconClass} w-4 h-4`} />

              <input
                type="email"
                placeholder="emma.dupont@example.com"
                className={inputClass}
              />

            </div>

          </div>

          <div>

            <label className={labelClass}>
              Phone number
            </label>

            <div className="relative">
              <Phone className={`${iconClass} w-4 h-4`} />

              <input
                type="tel"
                placeholder="+32 478 12 34 56"
                className={inputClass}
              />

            </div>

          </div>

        </div>

      </section>

      {/* Shipping */}
      <section className="border-t border-gray-100 pt-6">

        <h2 className="mb-4 text-sm font-semibold text-gray-900">
          Shipping Information
        </h2>

        <div className="space-y-4">

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">

            <div>

              <label className={labelClass}>
                First name
              </label>

              <div className="relative">
                <User className={`${iconClass} w-4 h-4`} />

                <input
                  type="text"
                  placeholder="Emma"
                  className={inputClass}
                />

              </div>

            </div>

            <div>

              <label className={labelClass}>
                Last name
              </label>

              <div className="relative">
                <User className={`${iconClass} w-4 h-4`} />

                <input
                  type="text"
                  placeholder="Dupont"
                  className={inputClass}
                />

              </div>

            </div>

          </div>

          <div>

            <label className={labelClass}>
              Country
            </label>

            <div className="relative">

              <MapPin
                className={`${iconClass} w-4 h-4`}
              />

              <select className="w-full appearance-none rounded-lg border border-gray-300 bg-white py-2.5 pl-9 pr-9 text-sm text-gray-500 focus:border-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-900/10">

                <option>
                  Select an item
                </option>

                <option>
                  Belgium
                </option>

                <option>
                  Netherlands
                </option>

                <option>
                  France
                </option>

              </select>

              <ChevronDown className="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />

            </div>

          </div>

          <div>

            <label className={labelClass}>
              Street address
            </label>

            <div className="relative">

              <Building2
                className={`${iconClass} w-4 h-4`}
              />

              <input
                type="text"
                placeholder="Rue de la Loi 42"
                className={inputClass}
              />

            </div>

          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">

            <div>

              <label className={labelClass}>
                City
              </label>

              <div className="relative">

                <MapPin
                  className={`${iconClass} w-4 h-4`}
                />

                <input
                  type="text"
                  placeholder="Brussels"
                  className={inputClass}
                />

              </div>

            </div>

            <div>

              <label className={labelClass}>
                Postal code
              </label>

              <div className="relative">

                <Hash
                  className={`${iconClass} w-4 h-4`}
                />

                <input
                  type="text"
                  placeholder="1000"
                  className={inputClass}
                />

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* Billing */}
      <section className="border-t border-gray-100 pt-6">

        <h2 className="mb-4 text-sm font-semibold text-gray-900">
          Billing Address
        </h2>

        <label className="flex cursor-pointer items-center gap-2">

          <input
            type="checkbox"
            checked={billingSame}
            onChange={() =>
              setBillingSame(!billingSame)
            }
            className="h-4 w-4 accent-gray-900"
          />

          <span className="text-sm text-gray-700">
            Same as shipping address
          </span>

        </label>

      </section>

      {/* Delivery */}
      <section className="border-t border-gray-100 pt-6">

        <h2 className="mb-4 text-sm font-semibold text-gray-900">
          Delivery Method
        </h2>

        <div className="space-y-1">

          {deliveryOptions.map((opt) => {
            const Icon = opt.icon;

            return (
              <label
                key={opt.id}
                className="flex cursor-pointer items-center gap-3 border-b border-gray-100 py-3 last:border-0"
              >

                <input
                  type="radio"
                  name="delivery"
                  checked={
                    delivery === opt.id
                  }
                  onChange={() =>
                    setDelivery(opt.id)
                  }
                  className="h-4 w-4 accent-gray-900"
                />

                <Icon className="h-4 w-4 shrink-0 text-gray-400" />

                <div>

                  <p className="text-sm text-gray-900">
                    {opt.label}
                  </p>

                  <p className="mt-0.5 text-xs text-gray-400">
                    {opt.price}
                  </p>

                </div>

              </label>
            );
          })}

        </div>

      </section>

    </div>
  );
}