import type { Metadata } from "next";
import { Inter } from "next/font/google";
// import Header from "./ui/header";
// import Navigation from "./ui/navigation";
import "@/app/globals.css";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Home Management",
  description: "FlyLady-Inspired Digital Control Journal by Sunseehray",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} flex flex-col md:flex-row`}>
        {/* <Navigation /> */}
        <main className="flex min-h-screen justify-center p-4">
          {children}
        </main>
      </body>
    </html>
  );
}