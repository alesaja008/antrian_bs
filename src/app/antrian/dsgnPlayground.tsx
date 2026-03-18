import DPlayground from "@/../public/asset/img/designerPlayground.png"
import Image from "next/image"
import Line from "@/../public/asset/img/line.png"

export default function DesignerPlayground () {
    return (
       <section>
          <div className="bg-gradient-to-r from-teal-500 to-teal-600 text-white rounded-3xl p-8 mb-6 shadow-lg px-10">
            <div className="grid grid-cols-1 md:grid-cols-[4fr_1fr] gap-3">
                <div className="flex flex-col gap-3 z-10 max-w-xs">
                    <Image src={DPlayground} width={200} height={200} alt="Designer Playtground" className="mb-5"  />
                    <h2 className="text-white text-2xl font-bold leading-tight mb-3">Kenalan Yuk! dengan Galeri “Designer Playground”</h2>
                    <p className="text-sm leading-relaxed">
                    Designer Playground adalah ruang terbuka untuk berkarya, berbagi ide, dan mengeksplorasi kreativitas tanpa batas.
                    </p>
                </div>
                <div>
                    <div className="flex gap-3">
                         <div className="relative z-10 flex items-center justify-start flex-1 ">
                       
                            <div className="relative w-40 h-80 bg-gray-900 rounded-3xl border-4 border-gray-700 shadow-2xl overflow-hidden flex items-center justify-center">
                                <span className="text-white text-xs text-center px-2">Sobat Bintang App</span>
                            </div>
                        </div>
                         <div className="relative z-10 flex items-center justify-start flex-1">
                            <div className="relative w-40 h-80 bg-gray-900 rounded-3xl border-4 border-gray-700 shadow-2xl overflow-hidden flex items-center justify-center">
                                <span className="text-white text-xs text-center px-2">Sobat Bintang App</span>
                            </div>
                        </div>
           <Image
                        src={Line}
                        alt=""
                        width={120}
                        height={120}
                        className="absolute left-0 bottom-1/3 -translate-y-1/2 object-contain z-50"
                        />
                    </div>
                </div>
            </div>
          </div>
        </section>
    )
}