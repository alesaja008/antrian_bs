import Line from "@/../public/asset/img/line.png"
import Image from "next/image"

export default function Layanan() {
    return (
        
        <section className="w-full bg-gradient-to-r from-emerald-700 via-emerald-600 to-emerald-400 rounded-2xl p-6 flex items-center justify-between overflow-hidden relative gap-3">
            {/* Left Content */}
            <div className="flex flex-col gap-3 z-10 max-w-xs">
                <h2 className="text-white text-2xl font-bold leading-tight">
                  by WHATSAPP <br/>Cepat, mudah, tanpa ribet.
                </h2>
                <div className="shrink-0 ">
                 
                    <h2 className="text-white text-2xl font-bold leading-tight">+62 8218 8887 260</h2>
                
                </div>
                <p className="text-white text-xs">Langsung lakukan pemesanan by whatsapp dan biarkan kami membantu mewujudkan kebutuhan Anda.</p>
                <Image
                        src={Line}
                        alt=""
                        width={130}
                        height={130}
                         className="absolute top-0 left-0 object-contain -z-1"
                        />
                
              
            </div>

            {/* Right: Phone mockup area with badges */}
           <div className="relative z-10 flex items-center justify-end flex-1">
                <div className="relative w-32 h-56 bg-emerald-600 rounded-3xl border-4 border-gray-800 shadow-2xl overflow-hidden flex items-center justify-center">
                    {/* <span className="text-white text-xs text-center px-2">Whatsapp App</span> */}
                    <div className="w-10 h-10 bg-emerald-400 animate-ping absolute rounded-full " />
                    <div className="flex gap-3">
                        <svg viewBox="0 0 48 48" className="w-10 h-10">
                      <circle cx="24" cy="24" r="24" fill="#25D366" />
                      <path
                      fill="white"
                      d="M34.6 13.4A14.9 14.9 0 0024 9C15.7 9 9 15.7 9 24c0 2.6.7 5.2 2 7.4L9 39l7.8-2c2.1 1.1 4.5 1.7 6.9 1.7h.1c8.3 0 15-6.7 15-15 0-4-.6-7.7-4.2-10.3zM24 37.1c-2.2 0-4.4-.6-6.3-1.7l-.5-.3-4.6 1.2 1.2-4.5-.3-.5A12.4 12.4 0 0111.5 24c0-6.9 5.6-12.5 12.5-12.5 3.3 0 6.4 1.3 8.8 3.6 2.3 2.3 3.6 5.4 3.6 8.8 0 6.9-5.6 12.2-12.4 12.2zm6.8-9.3c-.4-.2-2.2-1.1-2.6-1.2-.4-.1-.6-.2-.9.2-.3.4-1 1.2-1.2 1.5-.2.3-.4.3-.8.1-.4-.2-1.6-.6-3-1.9-1.1-1-1.9-2.2-2.1-2.6-.2-.4 0-.6.2-.8l.6-.7c.2-.2.2-.4.4-.6.1-.2.1-.4 0-.6-.1-.2-.9-2.1-1.2-2.9-.3-.7-.6-.6-.9-.6h-.7c-.2 0-.6.1-.9.4-.3.3-1.3 1.3-1.3 3.1s1.3 3.6 1.5 3.8c.2.3 2.6 4 6.3 5.6.9.4 1.6.6 2.1.8.9.3 1.7.2 2.4.1.7-.1 2.2-.9 2.5-1.8.3-.9.3-1.6.2-1.8-.1-.1-.3-.2-.7-.4z"
                      />
                </svg>
                    </div>

                </div>
            </div>
        </section>
       
    )
}
