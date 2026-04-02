"use client"

import Layanan from "./layanan"



export default function Video() {
    return (
      <section className="bg-background relative size-full items-center justify-center overflow-hidden px-8 rounded-4xl mt-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
           <div className="relative w-full aspect-video">
              <iframe
                className="w-full h-full rounded-2xl"
                src="https://www.youtube.com/embed/xkbekI53clA?autoplay=1&mute=1&loop=1&playlist=xkbekI53clA&controls=0&modestbranding=1&rel=0"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
           
               <Layanan/>
           
          </div>
        </section>
    )
}
