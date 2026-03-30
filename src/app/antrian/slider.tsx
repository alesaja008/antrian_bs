"use client"

import { GridPattern } from "@/components/ui/grid-pattern";
import { cn } from "@/lib/utils";
import Setting from "@/../public/asset/img/line2.png"
import Line from "@/../public/asset/img/line.png"
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function Slider () {
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
                <div className="relative rounded-4xl min-h-[140px] w-full bg-gradient-to-r from-red-600 via-red-500 to-red-800 mb-5 p-5 z-50 overflow-hidden">
                    <h2 className="text-2xl font-bold text-white ">
                        Hallo, Sobat Bintang
                    </h2>
                    <p className="text-white mb-8 max-w-[70%]">
                        Ini adalah layanan yang kami sediakan untuk memudahkan Anda dalam mengambil nomor antrian dengan cepat dan efisien.
                    </p>

                    <Image
                        src={Setting}
                        alt=""
                        width={450}
                        height={450}
                        className="absolute right-0 top-1/2 -translate-y-1/2 object-contain"
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