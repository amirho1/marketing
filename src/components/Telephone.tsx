import Link from "next/link";
import Call from "./icons/call";

export default function Telephone() {
  return (
    <Link href="tel:+15551234567" className="flex gap-2 justify-center items-center">
      <Call />
      <span className="font-bold ">+1 (555) 123-4567</span>
    </Link>
  );
}
