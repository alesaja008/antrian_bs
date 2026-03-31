import DPlayground from "@/../public/asset/img/hq_logo.png"
import Image from "next/image"
import Line from "@/../public/asset/img/linehq.png"

export default function Company() {
  return (

      <div className="mt-5">
        <div className="bg-gradient-to-r from-orange-400 to-orange-500 text-white rounded-3xl p-6  shadow-lg px-6">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            
            {/* LEFT CONTENT */}
            <div className="relative flex flex-col justify-center h-full gap-3 z-10 max-w-sm">
              
             

              <h2 className="text-white text-3xl font-bold leading-tight mb-3">
              Kami siap membantu hasil cetak sesuai kebutuhan Anda.
              </h2>

              <p className="text-lg leading-tight">
              Kami membantu memenuhi kebutuhan Digital Printing Anda dengan hasil berkualitas dan presisi.
              </p>

              {/* DECORATION LINE (PINDAH KE KIRI) */}
              <Image
                src={Line}
                alt=""
                width={130}
                height={130}
                className="absolute -top-6 -left-6 object-contain opacity-70 pointer-events-none"
              />
            </div>

            {/* RIGHT CONTENT (VIDEO) */}
            <div className="flex">
              <div className="relative w-full aspect-video bg-gray-900 rounded-3xl border-4 border-gray-700 shadow-2xl overflow-hidden">
                
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/xkbekI53clA?autoplay=1&mute=1&loop=1&playlist=xkbekI53clA&controls=0&modestbranding=1&rel=0"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                ></iframe>

              </div>
            </div>

          </div>
        </div>
      </div>
    
  )
}