import { Link } from "react-router-dom";
import { Building, BatteryCharging, Trees, Sun as SunIcon, Home as HomeIcon, Car } from "lucide-react";

const categoryItems = [
  { icon: SunIcon, label: "光伏光热一体化", sublabel: "PVT", color: "bg-orange-500" },
  { icon: BatteryCharging, label: "便携式储能系统", sublabel: "Portable", color: "bg-blue-500" },
  { icon: Trees, label: "露营野外", sublabel: "Outdoor", color: "bg-green-500" },
  { icon: HomeIcon, label: "阳台光伏", sublabel: "Balcony", color: "bg-purple-500" },
  { icon: Building, label: "BIPV", sublabel: "Building PV", color: "bg-teal-500" },
  { icon: Car, label: "光伏车棚", sublabel: "Carport", color: "bg-indigo-500" },
];

export default function CategoryNav() {
  return (
    <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-6 gap-2 sm:gap-3 md:gap-4 lg:gap-6">
      {categoryItems.map((item) => (
        <Link
          key={item.label}
          to="/products"
          className="flex flex-col items-center gap-2 sm:gap-3 p-2 sm:p-3 md:p-4 rounded-xl hover:bg-white hover:shadow-md transition-all duration-300 group"
        >
          <div
            className={`w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 ${item.color} rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
          >
            <item.icon className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 text-white" />
          </div>
          <span className="text-xs sm:text-sm md:text-base lg:text-lg font-medium text-gray-700 text-center">{item.label}</span>
          <span className="text-xs sm:text-sm md:text-base text-gray-400 text-center hidden sm:inline">{item.sublabel}</span>
        </Link>
      ))}
    </div>
  );
}
