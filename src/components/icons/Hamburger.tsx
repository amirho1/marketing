import Image from "next/image";

export default function Hamburger() {
  return (
    <div className="h-6 w-6">
      <Image src="/hamburger.svg" width={24} height={24} alt="Hamburger Menu" />
    </div>
  );
}
