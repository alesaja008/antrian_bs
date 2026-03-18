"use client"

import Member from "./onlineprint"


// import Video from "@/../public/video/BS MEMBER CARD.mp4"

export default function IklanMember() {
    return (
      <section className="bg-background relative size-full items-center justify-center overflow-hidden px-10 rounded-4xl mb-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
           <div className="relative w-full aspect-video">
              <iframe
                className="w-full h-full rounded-2xl"
                src="https://www.youtube.com/embed/4uJ6rMooznQ?si=lOEdv02KkWTq0Xvx&autoplay=1&mute=1&loop=1&playlist=4uJ6rMooznQ&controls=0&playsinline=1"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
           
               <Member/>
           
          </div>
        </section>
    )
}
