


export default function RunText() {
  const text =
    "Selamat Datang di HiQ Printing! \u00a0\u00a0|\u00a0\u00a0 HiQ Printing - Solusi Cetak Terpercaya Anda! \u00a0\u00a0|\u00a0\u00a0 Nikmati Layanan Cetak Berkualitas di HiQ Printing! \u00a0\u00a0|\u00a0\u00a0 HiQ Printing - Tempat Cetak Terbaik untuk Kebutuhan Anda! \u00a0\u00a0|\u00a0\u00a0 Dapatkan Hasil Cetak Memukau di HiQ Printing! \u00a0\u00a0|\u00a0\u00a0  Layanan kami \u00a0 : \u00a0\u00a0 General Printing (POD) - Offset Printing - Large Format Printing (LFP) - Finishing - Promotional - Merchandise \u00a0\u00a0|\u00a0\u00a0";

  return (
    <section className="bg-orange-400  overflow-hidden rounded-2xl">
        
      <style>{`
        @keyframes marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-20%); }
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
