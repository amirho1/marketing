import { trans } from "@/lib/utils";
import { Trusted } from "./Trusted";
import { Button } from "./ui/button";
import { MoveRight } from "lucide-react";
import CountKey from "./CountKey";
import { THREE_MILLION, TWENTY_FIVE_MILLION } from "@/lib/constant";

export default function HeroSection() {
  return (
    <section className="p-4 flex flex-col gap-6">
      <Trusted />

      <div>
        <h2 className="font-bold text-2xl">{trans("finallyMarketing")}</h2>
        <p className="mt-2">{trans("help")}</p>
      </div>

      <div className="flex items-center justify-between gap-2 flex-wrap">
        <CountKey name={trans("revenueGenerated")} number={TWENTY_FIVE_MILLION} />
        <CountKey name={trans("adCampaigns")} number={THREE_MILLION} />
      </div>

      <Button size="lg" className="max-[360px]">
        {trans("discover")}

        <div className="border border-yellow rounded-full p-1.5">
          <MoveRight />
        </div>
      </Button>
    </section>
  );
}
