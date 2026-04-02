import DPlayground from "@/../public/asset/img/designerPlayground.png"
import Image from "next/image"
import Line from "@/../public/asset/img/line.png"

export default function DesignerPlayground () {
    return (
       <section>
        <div className="flex gap-3 relative">
          <div className="bg-gradient-to-r from-orange-400 to-blue-300 text-white rounded-3xl p-6  shadow-lg px-6">
            <div className="grid grid-cols-1 md:grid-cols-[4fr_1fr] gap-3">
                <div className="relative flex flex-col justify-center h-full gap-3 z-10 max-w-sm">
                    {/* <Image src={DPlayground} width={180} height={180} alt="Designer Playtground z-5" className="mb-1"  /> */}
                    <h2 className="text-white text-2xl font-bold leading-tight ">Kami menawarkan berbagai produk yang dirancang untuk mendukung setiap kebutuhan Anda.</h2>
                    <p className="text-xs leading-tight ">
                  Mulai dari tahap perencanaan hingga hasil akhir, setiap produk kami dikembangkan dengan standar kualitas tinggi, presisi, dan perhatian terhadap detail.
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