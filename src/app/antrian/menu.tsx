"use client";

import { cn } from "@/lib/utils"
import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Antrian from "@/../public/asset/img/antrian2.jpg";
import Konsultasi from "@/../public/asset/img/konsultasi2.jpg";
import Pickup from "@/../public/asset/img/pickup2.jpg";
import Setting from "@/../public/asset/img/setting2.jpg"
import { GridPattern } from "@/components/ui/grid-pattern";
import { FlickeringGrid } from "@/components/ui/flickering-grid";


export default function Menu() {
  const [selectedService, setSelectedService] = useState<string>("");
  const router = useRouter();

  const handleSubmit = () => {
    if (selectedService) {
      router.push(`/antrian/konfirmasi?service=${selectedService}`);
    }
  };

  const services = [
    {
      id: "rtp",
      title: "Ready to Print (RTP)",
      subtitle: "Siap Cetak Produksi",
      description: "Pilih menu ini jika file desain Anda sudah siap untuk print.",
      img: Antrian,
    },
     {
      id: "setting",
      title: "Setting",
      subtitle: "Antrian untuk setting",
      description: "Pilih menu ini jika Anda belum memiliki file siap print",
      img: Setting,
    },
    {
      id: "konsultasi",
      title: "Konsultasi",
      subtitle: "Konsultasi & Permesanan",
      description: "Pilih menu ini untuk konsultasikan cetakan anda",
      img: Konsultasi,
    },
    {
      id: "pickup",
      title: "PickUp Order",
      subtitle: "Ambil Pesanan anda",
      description: "Pilih menu ini jika Anda ingin mengambil pesanan anda.",
      img: Pickup,
    },
   
  ];

  return (
    <section className="mb-6  bg-background relative  size-full items-center justify-center overflow-hidden px-8">
      <GridPattern
        width={20}
        height={20}
        x={-1}
        y={-1}
        className={cn(
          "absolute inset-0 flex items-center justify-center",
          "[mask-image:linear-gradient(to_bottom,white,transparent)]"
        )}
      />
     <div className=" bg-gray-50 px-8 py-5 rounded-4xl border-5">

      {/* <h2 className="text-3xl font-bold text-gray-800 mb-2">Hallo, Sobat Bintang </h2> */}
      <p className="text-gray-500 mb-8 text-center">
        Silakan sentuh layar, lalu pilih layanan sesuai kebutuhan kamu.
      </p>

      {/* Service Cards with Radio */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
        {services.map((service) => (
          <label
            key={service.id}
            className={`relative cursor-pointer rounded-2xl transition-all border-2 bg-white ${
              selectedService === service.id
                ? "border-red-500 "
                : "border-gray-200 bg-white hover:border-red-300 "
            }`}
          >
         
            {/* Radio Button */}
             
            <input
              type="radio"
              name="service"
              value={service.id}
              checked={selectedService === service.id}
              onChange={(e) => setSelectedService(e.target.value)}
              className="absolute bottom-3 right-3 w-5 h-5 accent-red-500 -z-50"
            />
            <FlickeringGrid
              className="relative inset-0 z-0 h-auto rounded-t-2xl [mask-image:radial-gradient(450px_circle_at_center,white,transparent)]"
              squareSize={5}
              gridGap={6}
              color="#e30613"
              maxOpacity={0.5}
              flickerChance={0.3}
              height={30}
              width={500}
            />

            {/* Content */}
            <div className="mb-1 p-4 py-3 z-50">
              <h3 className="text-lg font-bold text-red-600 z-50 ">
                {service.title}
              </h3>
              <p className="text-sm text-gray-600 mb-1 font-bold z-50">{service.subtitle}</p>
              <p className="text-xs text-gray-500 leading-relaxed leading-tight">
                {service.description}
              </p>
            </div>

            {/* Illustration */}
            <div className="flex justify-center mt-0">
              <Image
                src={service.img}
                alt={service.title}
                className="w-full h-auito object-contain object-bottom  rounded-b-xl z-50  "
              />
            </div>
          </label>
        ))}
      </div>

      {/* Submit Button */}
     
        <div className="mt-5 flex justify-center ">
          <button 
            onClick={handleSubmit}
            className="bg-red-600 hover:bg-red-700 text-white font-semibold px-5 py-2 rounded-full text-sm transition-colors"
          >
           Selanjutnya
          </button>
        </div>
      
     </div>
     
    </section>
  );
}