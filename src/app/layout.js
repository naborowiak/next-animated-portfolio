import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Neal Borowiak - ServiceNow Architect & Developer",
  description: "Portfolio of Neal Borowiak - ServiceNow Architect and Senior Developer specializing in ServiceNow development, JavaScript, and web technologies",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
