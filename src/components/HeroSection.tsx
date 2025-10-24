import { trans } from "@/lib/utils";
import { Trusted } from "./Trusted";
import { Button } from "./ui/button";
import { MoveRight } from "lucide-react";
import CountKey from "./CountKey";
import { THREE_MILLION, TWENTY_FIVE_MILLION } from "@/lib/constant";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="p-4 flex flex-col gap-6 w-fit m-auto">
      <Image
        src="/logo.svg"
        width={100}
        height={100}
        alt={trans("title")}
        preload
        className="max-xl:hidden"
      />

      <Trusted />

      <div>
        <h2 className="font-bold text-2xl md:font-black md:text-[44px] xl:text-[64px] md:uppercase">
          {trans("finallyMarketing")}
        </h2>
        <p className="mt-2 md:text-[20px] md:font-black tracking-wider md:uppercase">
          {trans("help")}
        </p>
      </div>

      <div className="md:flex-col-reverse flex flex-col gap-6">
        <div className="flex items-center gap-1 flex-wrap ">
          <CountKey name={trans("revenueGenerated")} number={TWENTY_FIVE_MILLION} />
          <CountKey name={trans("adCampaigns")} number={THREE_MILLION} />
        </div>

        <Button size="lg" className="md:max-w-[360px] ">
          {trans("discover")}

          <div className="border border-yellow rounded-full p-1.5">
            <MoveRight />
          </div>
        </Button>
      </div>
    </section>
  );
}
