import type { Metadata } from "next";
import "./globals.css";
import { Lora } from 'next/font/google';
const lora = Lora({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: "Akhmadillo Mamirov",
  description: "My portfolio website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={lora.className}>
      <body
        className={lora.className}
      >
        {children}
      </body>
    </html>
  );
}
