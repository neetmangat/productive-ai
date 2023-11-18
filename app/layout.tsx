import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeSwitcher } from "@/components/ThemeSwitcher";
import { ThemeProvider } from "@/components/ThemeProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Productive AI",
  description: "An AI-powered app to help you stay focused.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[#F5F6F8] dark:bg-slate-900/90 h-full">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}

          <ThemeSwitcher />
        </ThemeProvider>
      </body>
    </html>
  );
}
