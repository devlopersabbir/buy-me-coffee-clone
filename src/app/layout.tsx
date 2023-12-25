import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../style/globals.css";
import { Footer, Navbar } from "@/components";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Buy Me A Coffee",
  description: "Buy Me A Coffee Clone",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={cn("relative h-full font-sans antialiased", inter.className)}
        suppressHydrationWarning={true}
      >
        <main className="relative flex flex-col min-h-screen">
          <Navbar />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
