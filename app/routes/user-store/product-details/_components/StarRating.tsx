import { Star } from "lucide-react";

export default function StarRating({
  rating = 0,
  max = 5,
  size = 16,
}) {
  return (
    <div className="flex gap-0.5">

      {[...Array(max)].map((_, index) => (
        <Star
          key={index}
          size={size}
          className={
            index < rating
              ? "fill-black text-black"
              : "fill-transparent text-gray-300"
          }
        />
      ))}

    </div>
  );
}