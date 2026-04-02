"use client"

import { GridPattern } from "@/components/ui/grid-pattern";
import { cn } from "@/lib/utils";
import Setting from "@/../public/asset/img/lineHiq1.png"
import Line from "@/../public/asset/img/line.png"
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function SlideTop () {
    return (
        <section className="bg-background relative  size-full items-center justify-center overflow-hidden px-8">
             <GridPattern
                    width={20}
                    height={20}
                    x={-1}
                    y={-1}
                    className={cn(
                      "[mask-image:linear-gradient(to_bottom_center,white,transparent,transparent)]"
                    )}
                  />
                <div className="relative rounded-4xl min-h-[140px] w-full bg-gradient-to-r from-orange-400 via-orange-500 to-orange-200 mb-5 p-5 z-50 overflow-hidden">
                    <h2 className="text-2xl font-bold text-white">
                    Hai, <span className="inline-block animate-wave">👋🏻</span>
                    </h2>
                   
                    <p className="text-white mb-8 max-w-[70%]">
                       Silakan pilih layanan yang Anda butuhkan untuk mengambil nomor antrian.
                    </p>

                    <Image
                        src={Setting}
                        alt=""
                        width={457}
                        height={457}
                        className="absolute right-0 top-1/2 -translate-y-1/2 object-contain "
                        />
                    <Image
                        src={Line}
                        alt=""
                        width={120}
                        height={120}
                        className="absolute left-0 top-1/3 -translate-y-1/2 object-contain -z-10"
                        />

                       <p className="text-xs font-extralight text-white flex items-center gap-2">
                        Selengkapnya <ArrowRight size={15}/>
                        </p>
                </div>
          
        </section>
    )
}