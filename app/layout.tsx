import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { SiteNavbar } from "@/components/site-navbar";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "700", "800"],
});

export const metadata: Metadata = {
  title: "PLMR",
  description: "Strategic communications and public affairs agency",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} plmr-body antialiased`}>
        <div className="plmr-shell">
          <SiteNavbar />
          <main className="plmr-main">{children}</main>
        </div>
      </body>
    </html>
  );
}
