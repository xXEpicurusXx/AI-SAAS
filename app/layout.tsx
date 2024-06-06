import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
// import ConvexClerkProvider from "../providers/ConvexClerkProvider";
// import AudioProvider from "@/providers/AudioProvider";

const manrope = Manrope({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Podcastr Clone",
  description: "Generate your podcasts using AI",
  icons: {
    icon: "/icons/TAIOP_logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // <ConvexClerkProvider>
    <html lang="en">
      <body>{children}</body>
      {/* //     <AudioProvider>
    //       <body className={`${manrope.className}`}>
    //           {children}
    //       </body>
    //     </AudioProvider> */}
      //{" "}
    </html>
    // </ConvexClerkProvider>
  );
}
