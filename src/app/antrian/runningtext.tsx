


export default function RunTextBs() {
  const text =
    "Selamat Datang di PT. Bintang Sempurna! \u00a0\u00a0|\u00a0\u00a0 PT. Bintang Sempurna! - Solusi Cetak Terlengkap, Cepat, dan Berkualitas! \u00a0\u00a0|\u00a0\u00a0 Kebutuhan Anda, Prioritas Kami! \u00a0\u00a0|\u00a0\u00a0 PT. Bintang Sempurna - Tempat Cetak Terbaik untuk Kebutuhan Anda! \u00a0\u00a0|\u00a0\u00a0 Dapatkan Hasil Cetak Memukau di PT. Bintang Sempurna! \u00a0\u00a0|\u00a0\u00a0  Layanan kami \u00a0 : \u00a0\u00a0 General Printing (POD) - Offset Printing - Large Format Printing (LFP) - Finishing - Promotional - Merchandise dan masih banyak lainnya \u00a0\u00a0|\u00a0\u00a0";

  return (
    <section className="bg-red-600   overflow-hidden rounded-2xl mt-5">
        
      <style>{`
        @keyframes marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-30%); }
        }
        .marquee-track {
          display: inline-flex;
          white-space: nowrap;
          animation: marquee 20s linear infinite;
        }
      `}</style>
      <div className="w-full overflow-hidden whitespace-nowrap py-2">
        
        <div className="marquee-track text-md font-bold text-white">
           
          <span className="text-md font-medium">{text}</span>
          <span className="text-md font-medium">{text}</span>
        </div>
      </div>
    </section>
  );
}
