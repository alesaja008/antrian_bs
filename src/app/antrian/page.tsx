import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Menu from "./menu";
import IklanBawah from "./iklanBawah";
import Op from "./onlineprint";

export default function AntrianPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="pt-24 pb-32 px-4 container mx-auto max-w-7xl flex flex-col gap-6">
        <Menu />
        <Op />
        <IklanBawah />
      </main>
      <Footer />
    </div>
  );
}
