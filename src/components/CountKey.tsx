"use client";
import formatCompact from "@/lib/utils";
import { useState } from "react";
import CountUp from "react-countup";

interface Props {
  number: number;
  name: string;
}

export default function CountKey({ number, name }: Props) {
  const [isEnded, setIsEnded] = useState(false);

  return (
    <div className="flex items-center gap-2 flex-1 w-fit ">
      <h3 className="text-[20px] md:text-[40px] font-semibold text-center">
        {!isEnded ? (
          <CountUp
            start={0}
            end={number}
            duration={6}
            separator=","
            onEnd={() => setIsEnded(true)}
          />
        ) : (
          `+${formatCompact(number)}`
        )}
      </h3>
      <span className="text-wrap max-w-[90px]">{name}</span>
    </div>
  );
}
