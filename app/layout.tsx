import type { Metadata } from "next";
import { Epilogue } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
  title: "Smart Innosys Sdn Bhd",
  description: "Driven Solutions",
};

const epilogue = Epilogue({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body className={`${epilogue.className} antialiased`}>{children}</body>
    </html>
  );
}
