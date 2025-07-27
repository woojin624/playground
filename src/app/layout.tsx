import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import ReactQueryProvider from "./components/ReactQueryProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "성향 테스트",
  description: "여러 유형의 심리/성향 테스트를 제공하는 사이트",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className={`${geistSans.variable} ${geistMono.variable} min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100`}>
        <ReactQueryProvider>
          {/* 헤더 */}
          <Header />
          {/* 본문 */}
          {children}
        </ReactQueryProvider>
      </body>
    </html>
  );
}
