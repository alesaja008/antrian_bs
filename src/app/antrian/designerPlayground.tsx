import DPlayground from "@/../public/asset/img/designerPlayground.png"
import Image from "next/image"
import Line from "@/../public/asset/img/line.png"

export default function DesignerPlayground () {
    return (
       <section>
        <div className="flex gap-3 relative">
          <div className="bg-gradient-to-r from-teal-500 to-teal-600 text-white rounded-3xl p-8  shadow-lg px-6">
            <div className="grid grid-cols-1 md:grid-cols-[4fr_1fr] gap-3">
                <div className="flex flex-col gap-3 z-10 max-w-sm">
                    <Image src={DPlayground} width={200} height={200} alt="Designer Playtground z-5" className="mb-1"  />
                    <h2 className="text-white text-2xl font-bold leading-tight ">Kenalan Yuk! dengan Galeri “Designer Playground”</h2>
                    <p className="text-xs leading-tight ">
                    Designer Playground adalah ruang terbuka untuk berkarya, berbagi ide, dan mengeksplorasi kreativitas tanpa batas.
                    </p>
                </div>
                
                    <div className="flex gap-3">
                         <div className="relative z-10 flex items-center justify-start flex-1">
                            <div className="relative w-34 h-60 bg-gray-900 rounded-3xl border-4 border-gray-700 shadow-2xl overflow-hidden flex items-center justify-center">
                                <iframe
                                className="absolute inset-0 w-full h-full"
                                src="https://www.youtube.com/embed/I7q3cDU6NuY?autoplay=1&mute=1&loop=1&playlist=I7q3cDU6NuY&controls=0&modestbranding=1&rel=0"
                                title="YouTube video player"
                                frameBorder="0"
                                allow="autoplay; encrypted-media"
                                allowFullScreen
                                ></iframe>
                            </div>
                        </div>
                         <div className="relative z-10 flex items-center justify-start flex-1 ">
                            <div className="relative w-34 h-60 bg-gray-900 rounded-3xl border-4 border-gray-700 shadow-2xl overflow-hidden flex items-center justify-center">
                                <iframe
                                className="w-full h-full"
                               src="https://www.youtube.com/embed/Vy5zQdxFUwY?autoplay=1&mute=1&loop=1&playlist=Vy5zQdxFUwY&controls=0&modestbranding=1&rel=0"
                                title="YouTube video player"
                                frameBorder="0"
                                allow="autoplay; encrypted-media"
                                allowFullScreen
                                ></iframe>
                            </div>
                        </div>
                         <div className="relative z-10 flex items-center justify-start flex-1">
                            <div className="relative w-34 h-60 bg-gray-900 rounded-3xl border-4 border-gray-700 shadow-2xl overflow-hidden flex items-center justify-center">
                               <iframe
                                className="absolute inset-0 w-full h-full"
                                src="https://www.youtube.com/embed/EHETvLnTlfw?autoplay=1&mute=1&loop=1&playlist=EHETvLnTlfw&controls=0&modestbranding=1&rel=0"
                                title="YouTube video player"
                                frameBorder="0"
                                allow="autoplay; encrypted-media"
                                allowFullScreen
                                ></iframe>
                            </div>
                        </div>
                         <div className="relative z-10 flex items-center justify-start flex-1">
                            <div className="relative w-34 h-60 bg-gray-900 rounded-3xl border-4 border-gray-700 shadow-2xl overflow-hidden flex items-center justify-center">
                                <iframe
                                className="absolute inset-0 w-full h-full"
                                src="https://www.youtube.com/embed/JnlgGRLfZ_k?autoplay=1&mute=1&loop=1&playlist=JnlgGRLfZ_k&controls=0&modestbranding=1&rel=0"
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