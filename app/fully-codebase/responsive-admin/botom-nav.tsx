import { useState } from "react";
import {
  LayoutGrid,
  ShoppingCart,
  Package,
  Users,
  Settings,
} from "lucide-react";

const navItems = [
  { id: "dashboard", label: "Dashboard", icon: LayoutGrid },
  { id: "orders", label: "Orders", icon: ShoppingCart },
  { id: "products", label: "Products", icon: Package },
  { id: "customers", label: "Customers", icon: Users },
  { id: "settings", label: "Settings", icon: Settings },
];

export default function BottomNav() {
  const [activeTab, setActiveTab] = useState("");

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-50 md:hidden">
      <div className="max-w-md mx-auto px-2 py-1">
        <div className="flex items-center justify-around">
          {navItems.map((item) => {
            const isActive = activeTab === item.id;
            const Icon = item.icon;

            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`flex flex-col items-center py-2 px-3 rounded-xl transition-all relative ${
                  isActive
                    ? "text-gray-900"
                    : "text-gray-400 hover:text-gray-600"
                }`}
              >
                {/* Icon */}
                <Icon className="w-5 h-5 mb-1" />

                {/* Label */}
                <span className="text-[10px] font-medium tracking-tight">
                  {item.label}
                </span>

                {/* Active Indicator */}
                {isActive && (
                  <div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-5 h-0.5 bg-gray-900 rounded-full" />
                )}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}