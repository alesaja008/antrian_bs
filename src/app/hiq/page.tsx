
import HeaderHiq from "@/components/HeaderHiq";
import FooterHiq from "@/components/FooterHiq";
import MenuHiq from "./strukturhiq/menuHq";
import SlideTop from "./strukturhiq/slideTop";
import RunText from "./strukturhiq/runText";
import WaPhone from "./strukturhiq/wa";
import Company from "./strukturhiq/company";
import Video from "./strukturhiq/video";


export default function Hiq() {
  return (
    <div className="min-h-screen bg-gray-50">
    <HeaderHiq/>
      
      {/* <main className="pb-32 container mx-auto max-w-7xl"> */}
      <main className="pb-5 mx-auto ">
        <SlideTop/>
        <MenuHiq/>
         <div className="grid grid-cols-1 md:grid-cols-1 gap-3 px-8">
        <RunText/>
        </div>
        <Video/>
        <div className="grid grid-cols-1 md:grid-cols-1 gap-5 px-8 mb-5">
        <Company/>
        <WaPhone/>

        </div>
       
        
      </main>

      <FooterHiq/>
    </div>
  );
}
