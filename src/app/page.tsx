import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Menu from "./antrian/menu";
import Slider from "./antrian/slider";
import IklanBawah from "./antrian/IklanMember";
import DesignerPlayground from "./antrian/dsgnPlayground";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* <main className="pb-32 container mx-auto max-w-7xl"> */}
      <main className="pb-32 mx-auto ">
        <Slider/>
        <Menu/>
        <IklanBawah/>
        <div className="grid grid-cols-1 md:grid-cols-[4fr_1fr] gap-3 px-10">
         <DesignerPlayground />
          <div>Video</div>
        </div>
        
      </main>

      <Footer />
    </div>
  );
}
