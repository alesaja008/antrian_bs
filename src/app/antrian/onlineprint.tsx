import DPlayground from "@/../public/asset/img/logoop.svg"
import Image from "next/image"
import Line from "@/../public/asset/img/lineOp.png"

export default function OnlinePrint() {
    return (
        <section>
        <div className="flex gap-3 relative">
          <div className="bg-gradient-to-r from-indigo-950 to-indigo-800 text-white rounded-3xl p-6 mb-6 shadow-lg px-6">
            <div className="grid grid-cols-1 md:grid-cols-[4fr_1fr] gap-3">
                <div className="flex flex-col gap-3 z-10 max-w-sm">
                    <Image src={DPlayground} width={70} height={70} alt="Designer Playtground z-5" className="mb-1"  />
                    <h2 className="text-white text-2xl font-bold leading-tight -mb-3">onlineprint.co.id </h2>
                    <h2 className="text-white text-2xl font-bold leading-tight ">Print mudah dari rumah</h2>
                    <p className="text-xs leading-tight">
                    Platform percetakan online terpercaya di Indonesia untuk kebutuhan digital dan offset printing, dengan hasil tajam dan presisi berstandar tinggi.
                    </p>
                </div>
                    <div className="flex gap-3">
                         <div className="relative z-10 flex items-center justify-start flex-1 ">
                       
                            <div className="relative w-110 h-62 bg-gray-900 rounded-3xl border-4 border-gray-700 shadow-2xl overflow-hidden flex items-center justify-center">
                              <iframe
                                className="w-full h-full"
                                src="https://www.youtube.com/embed/5lHa5FdVjBU?autoplay=1&mute=1&loop=1&playlist=5lHa5FdVjBU&controls=0&modestbranding=1&rel=0"
                                title="YouTube video player"
                                frameBorder="0"
                                allow="autoplay; encrypted-media"
                                allowFullScreen
                                ></iframe>
                            </div>
                        </div>
                       
                        <Image
                        src={Line}
                        alt=""
                        width={130}
                        height={130}
                         className="absolute top-0 left-0 object-contain z-1"
                        />
                    </div>
               
            </div>
          </div>
        </div>
        </section>
    )
}






