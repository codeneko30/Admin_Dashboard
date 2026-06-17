
import { ChevronLeft } from "lucide-react";

export default function BackButton({ label }){
  
  return (
    <button
   
      className={`mb-4 hidden md:flex items-center gap-1 text-sm text-gray-500 hover:text-gray-700 `}
    >
      <ChevronLeft size={16} />
      {label}
    </button>
  );
}