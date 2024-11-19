import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { AuthProvider } from "@/context/TokenContext";
import { AdminProvider } from "@/context/AdminContext";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-plus-jakarta-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Modernize",
  description: "An open source dashboard",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <AuthProvider>
      <AdminProvider>

    <html lang="en">
      <body className={plusJakartaSans.variable}>{children}</body>
    </html>
      </AdminProvider>
    </AuthProvider>
  );
}
