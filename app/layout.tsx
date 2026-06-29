import type { Metadata } from "next";
import "@/app/globals.css";
import { Inter, Space_Grotesk,  JetBrains_Mono} from "next/font/google";
import { CustomCursor } from "@/components/effects";
import PageLayout from "@/layouts/pageLayout";
import Navbar from "@/components/layout/Navbar";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-heading",
});

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-code",
});

export const metadata: Metadata = {
  title: "Sahil Khan | Frontend Developer",
  description: "Frontend Developer Portfolio",
};



export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${spaceGrotesk.variable} ${jetBrainsMono.variable}`}>
        <CustomCursor />
        
        <PageLayout>
          
          {children}
        </PageLayout>
      </body>
    </html>
  );
}