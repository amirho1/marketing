import { trans } from "@/lib/utils";
import Image from "next/image";

const images = ["air.webp", "esb.webp", "space.webp"];

export function Trusted() {
  return (
    <div className="inline-flex items-center gap-3 px-4 py-2 rounded-xl bg-yellow-700 xs:w-full sm:w-full md:w-fit">
      {/* Overlapping avatars */}
      <ul className="flex -space-x-2">
        {images.map((url: string, key) => (
          <li className="w-6 h-6 rounded-full bg-white overflow-hidden" key={key}>
            <Image
              src={`/${url}`}
              alt={url}
              className="w-full h-full object-cover"
              width={24}
              height={24}
              loading="lazy"
            />
          </li>
        ))}
      </ul>

      {/* Text content */}
      <p className="text-sm font-medium">{trans("trustedBy")}</p>
    </div>
  );
}
