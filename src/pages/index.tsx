import { Inter } from "next/font/google";
import Image from "next/image";

import { CountryComparison, Head, Navbar, TremorTable } from "@/components";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="min-h-screen bg-[#111111]">
      <Navbar />
      <Head />
      <TremorTable />
      <CountryComparison />
    </main>
  );
}
