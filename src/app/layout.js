import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Neal Borowiak - ServiceNow Architect & Developer",
  description: "Portfolio showcasing ServiceNow development and architecture expertise",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 min-h-screen`}>
        {children}
      </body>
    </html>
  );
}
