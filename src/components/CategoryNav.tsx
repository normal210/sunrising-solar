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
    <div className="grid grid-cols-3 md:grid-cols-6 gap-4 md:gap-6">
      {categoryItems.map((item) => (
        <Link
          key={item.label}
          to="/products"
          className="flex flex-col items-center gap-3 p-4 rounded-xl hover:bg-white hover:shadow-md transition-all duration-300 group"
        >
          <div
            className={`w-20 h-20 md:w-24 md:h-24 ${item.color} rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
          >
            <item.icon className="w-10 h-10 md:w-12 md:h-12 text-white" />
          </div>
          <span className="text-lg font-medium text-gray-700 text-center">{item.label}</span>
          <span className="text-base text-gray-400 text-center">{item.sublabel}</span>
        </Link>
      ))}
    </div>
  );
}
