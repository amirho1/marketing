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
    <div className="flex gap-3 items-center flex-1">
      <h3 className="text-2xl font-semibold">
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
      <span className="text-wrap ">{name}</span>
    </div>
  );
}
