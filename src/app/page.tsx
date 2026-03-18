import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Menu from "./antrian/menu";
import Slider from "./antrian/slider";
import IklanBawah from "./antrian/iklanBawah";
import Op from "./antrian/onlineprint";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* <main className="pb-32 container mx-auto max-w-7xl"> */}
      <main className="pb-32 mx-auto ">
        <Slider/>
        <Menu/>
        <IklanBawah/>
       
        <section className="px-10">
          <div className="bg-gradient-to-r from-blue-900 to-blue-800 text-white rounded-3xl p-8 mb-6 shadow-lg px-15">
            <p className="text-sm leading-relaxed">
              Bintang Sempurna adalah perusahaan percetakan dan typesetting terkemuka. 
              Kami telah melayani industri percetakan sejak tahun 1500-an dengan standar kualitas terbaik. 
              Percayakan kebutuhan cetak Anda kepada kami untuk hasil yang sempurna.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
