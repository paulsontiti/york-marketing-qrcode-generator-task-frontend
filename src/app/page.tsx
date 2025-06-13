import QRCodeComponent from "@/components/qrCode";
import Image from "next/image";


export default async function Home() {


  return (
    <div className="">
      <main className="relative">
       <QRCodeComponent/>
       
      </main>
    </div>
  );
}
