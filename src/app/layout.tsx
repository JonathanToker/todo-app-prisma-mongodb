import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { ThemeProvider } from "@/components/theme-provider";
import Image from "next/image";
import { cn } from "@/lib/utils";
import MainNavbar from "@/components/navbar";
export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});
export const metadata: Metadata = {
  title: "Todos App",
  description: "Created by Yonatan Toker",
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased relative",
          fontSans.variable
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <MainNavbar />
          <div className="w-full max-w-3xl mx-auto bg-gray-100 dark:bg-gray-800 mt-6 flex flex-col items-center p-2 rounded">
            {children}
          </div>
          <footer className="absolute bottom-0 w-full flex justify-end">
            <Link
              href="https://github.com/YonatanToker/todo-app-prisma-mongodb"
              target="_blank"
            >
              <Image
                className="mr-2 mb-2"
                src="/github.png"
                width={45}
                height={45}
                alt="github"
              />
            </Link>
          </footer>
        </ThemeProvider>
      </body>
    </html>
  );
}
