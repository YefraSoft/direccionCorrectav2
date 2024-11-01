import { Ubuntu_Condensed } from "next/font/google";
import Navbar from "@/components/navbars/navBar";
const monserrat = Ubuntu_Condensed({ subsets: ["latin"], weight: "400" });

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className={`${monserrat.className} antialiased`}>
      <Navbar />
      {children}
    </main>
  );
}