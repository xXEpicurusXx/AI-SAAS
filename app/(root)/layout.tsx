// import LeftSidebar from "@/components/LeftSidebar";
// import MobileNav from "@/components/MobileNav";
// import RightSidebar from "@/components/RightSidebar";
import Image from "next/image";
// import { Toaster } from "@/components/ui/toaster"
// import PodcastPlayer from "@/components/PodcastPlayer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <main>
        <p className="text-white-1">LEFT SIDEBAR</p> 
        {children} 
        <p className="text-white-1">RIGHT SIDEBAR</p> 

      </main>
    </div>
  );
}