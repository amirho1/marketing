import { trans } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  const title = trans("title");
  return (
    <Link href="/" className="flex gap-2 items-center justify-center">
      <div>
        <Image src="/logo.svg" width={48} height={43} alt={`${title} logo`} />
      </div>
      <div>
        <h1 className="font-black text-xl">{title}</h1>
        <h5 className="text-xs text-neutral-high tracking-[.38em] text-center px-1">{trans("unlockYourPotential")}</h5>
      </div>
    </Link>
  );
}
