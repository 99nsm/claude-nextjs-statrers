// 모든 페이지를 감싸는 루트 레이아웃 파일
// Header와 Footer를 공통으로 적용하고, 폰트와 메타데이터를 설정합니다.

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";

// Geist 폰트 설정 (CSS 변수로 전달됩니다)
const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

// 브라우저 탭과 검색엔진에 표시되는 메타 정보
export const metadata: Metadata = {
    title: "포트폴리오 | 개발자",
    description: "안녕하세요! 사용자 경험을 중시하는 개발자의 포트폴리오입니다.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        // lang="ko": 한국어 페이지임을 브라우저에 알립니다
        <html lang="ko">
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
            >
                {/* 상단 네비게이션 헤더 */}
                <Header />

                {/* 각 페이지의 콘텐츠가 여기에 들어옵니다 */}
                {/* flex-1: 남은 공간을 모두 차지해서 Footer가 항상 하단에 위치하게 합니다 */}
                <main className="flex-1">
                    {children}
                </main>

                {/* 하단 푸터 */}
                <Footer />
            </body>
        </html>
    );
}
