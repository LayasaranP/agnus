import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { UserProvider } from "@/context/UserContext";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Agentic Study",
  description:
    "AI-powered research platform — synthesize sources, build knowledge graphs, and master concepts with intelligent flashcards.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} ${jetbrainsMono.variable} antialiased`}>
        <UserProvider>
          {children}
        </UserProvider>
      </body>
    </html>
  );
}
