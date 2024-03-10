
import { Noto_Sans_KR } from 'next/font/google';
import { Session } from "inspector";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SessionWrapper from "./(root)/splash/_components/SessionWrapper";


import './globals.css';
const notoSans = Noto_Sans_KR({
  subsets: ['latin'],
  weight: ['100', '400', '700', '900'],
  variable: '--noto_sans_kr',
  display: 'swap',
});

export const metadata: Metadata = {
  title: '교Zip합',
  description: '교환학생을 위한 정보가 만나는 곳',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (

    <SessionWrapper>
      <html lang="en">
        <body className={notoSans.className}>{children}</body>
      </html>
    </SessionWrapper>

  );
}
