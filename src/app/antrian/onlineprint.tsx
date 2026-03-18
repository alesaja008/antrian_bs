

export default function Op() {
    return (
        
        <section className="w-full bg-red-600 rounded-2xl p-6 flex items-center justify-between overflow-hidden relative">
            {/* Left Content */}
            <div className="flex flex-col gap-3 z-10 max-w-xs">
                <h2 className="text-white text-2xl font-bold leading-tight">
                    Untung Lebih Banyak<br />Jadi Sobat Bintang
                </h2>
                <p className="text-white text-xs">Download Member Sobat Bintang di sini:</p>
                <div className="flex gap-3">
                    {/* App Store Button */}
                    <a
                        href="#"
                        className="flex items-center gap-2 bg-white text-black rounded-xl px-4 py-2 text-xs font-semibold hover:bg-gray-100 transition"
                    >
                        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                        </svg>
                        <div>
                            <div className="text-[7px] text-gray-500 leading-none">TEMUKAN DI</div>
                            <div className="text-xs font-bold leading-tight">App Store</div>
                        </div>
                    </a>
                    {/* Google Play Button */}
                    <a
                        href="#"
                        className="flex items-center gap-2 bg-white text-black rounded-xl px-4 py-2 text-xs font-semibold hover:bg-gray-100 transition"
                    >
                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M3.18 23.76c.3.17.64.24.99.2l12.6-7.27-2.72-2.72-10.87 9.79zM.5 1.1C.19 1.42 0 1.92 0 2.57v18.86c0 .65.19 1.15.5 1.47l.08.07 10.56-10.56v-.25L.58 1.03.5 1.1zM20.37 10.4l-2.99-1.73-3.03 3.03 3.03 3.03 3-1.74c.86-.5.86-1.3-.01-1.59zM3.18.24L15.78 7.5l-2.72 2.72L2.19.43c.3-.22.67-.27.99-.19z" />
                        </svg>
                        <div>
                            <div className="text-[7px] text-gray-500 leading-none">TEMUKAN DI</div>
                            <div className="text-xs font-bold leading-tight">Google Play</div>
                        </div>
                    </a>
                </div>
                <p className="text-white text-[10px]">Daftar segera dan redeem langsung Keuntungannya</p>
            </div>

            {/* Right: Phone mockup area with badges */}
            <div className="relative z-10 flex items-center justify-end flex-1">
                <div className="relative w-32 h-56 bg-gray-900 rounded-3xl border-4 border-gray-700 shadow-2xl overflow-hidden flex items-center justify-center">
                    <span className="text-white text-xs text-center px-2">Sobat Bintang App</span>
                </div>
            </div>
        </section>
       
    )
}
