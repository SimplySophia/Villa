import type { Metadata } from "next";
import "./globals.css";
import { CartProvider } from "@/hooks/useCart";
import { Toaster } from "sonner";
import "leaflet/dist/leaflet.css";
import Navbar from "./components/common/Navbar";
import TopBar from "./components/common/Topbar";
import Footer from "./components/footer/Footer";
import ScrollToTop from "./components/Helper/ScrollToTop";
import { ClerkProvider } from "@clerk/nextjs";

export const metadata: Metadata = {
  title: "Villa Resort",
  description: "Villa the best properties for you",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en" dir="ltr">
        <body suppressHydrationWarning className="overflow-x-hidden">
          <CartProvider>
            <div className="">
              <TopBar />
              <Navbar />
            </div>
            <main className="pt-24">{children}</main>
            <Footer />
            <Toaster richColors position="top-right" />
            <ScrollToTop />
          </CartProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
