"use client";

import Image from "next/image";
import Logo from "./../../public/asset/img/logobs.svg";
import { GridPattern } from "@/components/ui/grid-pattern";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

export default function Header() {
  const [time, setTime] = useState("");
  const [date, setDate] = useState("");

  useEffect(() => {
    const update = () => {
      const now = new Date();

      const pad = (n: number) => n.toString().padStart(2, "0");

      const timeStr = `${pad(now.getHours())}:${pad(now.getMinutes())}:${pad(now.getSeconds())}`;

      const dateStr = now.toLocaleDateString("id-ID", {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric",
      });

      setTime(timeStr);
      setDate(dateStr);
    };
    update();
    const interval = setInterval(update, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-background relative flex size-full items-center justify-center p-16">
      <GridPattern
        width={20}
        height={20}
        x={-1}
        y={-1}
        className={cn(
          "[mask-image:linear-gradient(to_bottom_center,white,transparent,transparent)]"
        )}
      />
      <header className="fixed top-0 left-0 right-0  text-white z-50 rounded-b-4xl py-7 ">
        <div className="container mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <Image src={Logo} alt="Bintang Sempurna" width={150} height={150} />
          </div>

          {/* Clock */}
          <div className="text-right">
            <div className="text-2xl font-bold tracking-wide text-gray-600">
              {time} <span className="text-lg font-normal">wib</span>
            </div>
            <div className="text-sm text-gray-600">{date}</div>
          </div>
        </div>
      </header>
    </div>
  );
}
