"use client"

import { GridPattern } from "@/components/ui/grid-pattern";
import { cn } from "@/lib/utils";

export default function FooterHiq() {
  return (
    <footer className="fixed bottom-0 left-0 right-0 z-50 bg-gray-800 text-white rounded-4xl mx-5 mb-5">
       <GridPattern
                                  width={20}
                                  height={20}
                                  x={-1}
                                  y={-1}
                                  className={cn(
                                    "[mask-image:linear-gradient(to_bottom_center,white,transparent,transparent)]"
                                  )}
                                />
      <div className="container mx-auto px-8 py-4 flex items-center justify-between">
        {/* Left: Support center */}
        <div>
          <h3 className="text-xl font-bold mb-1">Support center</h3>
          <p className="text-sm text-gray-300">cs@bintangsempurna.co.id</p>
          <p className="text-xs text-gray-400 mt-2">
            Copyright © 2026 | PT Bintang Sempurna. All Rights Reserved.
          </p>
        </div>

        {/* Right: App Store buttons */}
        <div className="text-right">
          <p className="text-sm text-gray-300 mb-3">
            Jadi Member Sobat Bintang Untungnya NON-STOP
          </p>
          <div className="flex items-center gap-3 justify-end">
            {/* App Store */}
            <a
              href="#"
              className="flex items-center gap-2 bg-black border border-gray-600 rounded-lg px-4 py-2 hover:bg-gray-900 transition-colors"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="white">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
              </svg>
              <div className="text-left">
                <div className="text-xs text-gray-400 leading-none">Download on the</div>
                <div className="text-sm font-semibold leading-tight">App Store</div>
              </div>
            </a>

            {/* Google Play */}
            <a
              href="#"
              className="flex items-center gap-2 bg-black border border-gray-600 rounded-lg px-4 py-2 hover:bg-gray-900 transition-colors"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="white">
                <path d="M3.18 23.76c.3.17.64.24.99.2l12.6-7.27-2.72-2.72-10.87 9.79zM.5 1.4C.19 1.74 0 2.27 0 2.96v18.08c0 .69.19 1.22.51 1.56l.08.08 10.13-10.13v-.24L.58 1.32.5 1.4zM20.49 10.34l-2.89-1.67-3.04 3.04 3.04 3.04 2.91-1.68c.83-.48.83-1.26-.02-1.73zM4.17.24L16.77 7.5l-2.72 2.72L3.18.43C3.48.27 3.87.27 4.17.44z" />
              </svg>
              <div className="text-left">
                <div className="text-xs text-gray-400 leading-none">Get it on</div>
                <div className="text-sm font-semibold leading-tight">Google Play</div>
              </div>
            </a>
          </div>
          <p className="text-xs text-gray-400 mt-2">
            Download Sekarang dan Dapatkan keuntungannya !!
          </p>
        </div>
      </div>
    </footer>
  );
}
