"use client";

import { useSearchParams, useRouter } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useEffect, useState, Suspense } from "react";

function KonfirmasiContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [queueNumber, setQueueNumber] = useState<string>("");
  const [serviceName, setServiceName] = useState<string>("");

  useEffect(() => {
    const service = searchParams.get("service");
    if (!service) {
      router.push("/antrian");
      return;
    }

    const prefix = service === "rtp" ? "A" : service === "konsultasi" ? "B" : "C";
    const number = Math.floor(Math.random() * 100) + 1;
    setQueueNumber(`${prefix}${number.toString().padStart(3, "0")}`);

    const names: Record<string, string> = {
      rtp: "Ready to Press (RTP)",
      konsultasi: "Konsultasi",
      pickup: "PickUp Order",
    };
    setServiceName(names[service] || "");
  }, [searchParams, router]);

  return (
    <main className="pt-24 pb-32 px-4 container mx-auto max-w-2xl">
      <div className="bg-white rounded-3xl shadow-lg p-8 text-center">
        <div className="mb-6">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-4xl">✓</span>
          </div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Nomor Antrian Anda</h2>
          <p className="text-gray-600">Layanan: {serviceName}</p>
        </div>

        <div className="bg-red-50 border-2 border-red-500 rounded-2xl p-8 mb-6">
          <div className="text-6xl font-bold text-red-600 mb-2">{queueNumber}</div>
          <p className="text-gray-600">Silakan tunggu panggilan Anda</p>
        </div>

        <div className="space-y-4 text-left bg-gray-50 rounded-2xl p-6 mb-6">
          <div className="flex items-start gap-3">
            <span className="text-2xl">📋</span>
            <div>
              <h3 className="font-semibold text-gray-800">Simpan Nomor Antrian</h3>
              <p className="text-sm text-gray-600">Pastikan Anda mengingat nomor antrian Anda</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-2xl">⏰</span>
            <div>
              <h3 className="font-semibold text-gray-800">Perhatikan Layar</h3>
              <p className="text-sm text-gray-600">Nomor Anda akan dipanggil melalui layar display</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-2xl">🪑</span>
            <div>
              <h3 className="font-semibold text-gray-800">Tunggu di Area Tunggu</h3>
              <p className="text-sm text-gray-600">Silakan menunggu di area yang telah disediakan</p>
            </div>
          </div>
        </div>

        <button
          onClick={() => router.push("/")}
          className="bg-red-600 hover:bg-red-700 text-white font-semibold px-8 py-3 rounded-full transition-colors"
        >
          Kembali ke Beranda
        </button>
      </div>
    </main>
  );
}

export default function KonfirmasiPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Suspense fallback={<div className="pt-24 text-center">Loading...</div>}>
        <KonfirmasiContent />
      </Suspense>
      <Footer />
    </div>
  );
}
