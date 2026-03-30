import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Menu from "./antrian/menu";
import Slider from "./antrian/slider";
import IklanBawah from "./antrian/IklanMember";
import DesignerPlayground from "./antrian/designerPlayground";
import OnlinePrint from "./antrian/onlineprint";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* <main className="pb-32 container mx-auto max-w-7xl"> */}
      <main className="pb-5 mx-auto ">
        <Slider/>
        <Menu/>
        <IklanBawah/>
         <div className="grid grid-cols-1 md:grid-cols-1 gap-3 px-8">
         <OnlinePrint/> 
        </div>
        <div className="grid grid-cols-1 md:grid-cols-1 gap-3 px-8 mb-5">
         <DesignerPlayground />
        </div>
       
        
      </main>

      <Footer />
    </div>
  );
}
