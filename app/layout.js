import { Outfit } from "next/font/google";
import "./globals.css";



const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "Foundby.me",
  description: "Sürdürülebilir gelir paylaşımı sağlayan pazarlama altyapısı.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${outfit.variable} antialiased`}
      >
        <main className="flex flex-col items-center justify-center h-screen">
          {children}
        </main>
      </body>
    </html>
  );
}
