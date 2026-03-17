// 페이지 상단에 고정되는 Header 컴포넌트 (클라이언트 컴포넌트)
// 로고, 네비게이션 링크, 모바일 햄버거 메뉴를 포함합니다.
// usePathname()으로 현재 페이지를 감지해 활성 링크를 강조합니다.

"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

// 네비게이션 링크 목록 정의
const navLinks = [
    { label: "홈", href: "/" },
    { label: "소개", href: "/about" },
    { label: "프로젝트", href: "/projects" },
    { label: "연락처", href: "/contact" },
];

export default function Header() {
    // 모바일 메뉴 열림/닫힘 상태 관리
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    // 현재 페이지 경로를 가져옵니다 (활성 링크 강조에 사용)
    const pathname = usePathname();

    return (
        // sticky: 스크롤해도 상단에 고정
        // backdrop-blur-md: 뒷 배경을 흐릿하게 (frosted glass 효과)
        // bg-background/80: 배경색에 80% 투명도 적용
        <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-background/80 border-b border-border">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">

                    {/* 로고 (좌측) */}
                    <a href="/" className="text-xl font-bold text-foreground hover:text-primary transition-colors">
                        포트폴리오
                    </a>

                    {/* 데스크탑 네비게이션 (우측) - 모바일에서 숨김 */}
                    <nav className="hidden md:flex items-center gap-1">
                        {navLinks.map((link) => {
                            // 현재 경로와 링크 경로가 같으면 활성 상태로 표시
                            const isActive = pathname === link.href;

                            return (
                                <a
                                    key={link.href}
                                    href={link.href}
                                    className={`
                                        px-4 py-2 rounded-md text-sm font-medium transition-colors
                                        ${isActive
                                            ? "bg-accent text-accent-foreground"  // 활성: 배경색 있음
                                            : "text-muted-foreground hover:text-foreground hover:bg-accent/50"  // 비활성: 배경 없음
                                        }
                                    `}
                                >
                                    {link.label}
                                </a>
                            );
                        })}
                    </nav>

                    {/* 모바일 햄버거 버튼 - 데스크탑에서 숨김 */}
                    <button
                        className="md:hidden p-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-accent transition-colors"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        aria-label="메뉴 토글"
                    >
                        {/* 메뉴가 열려있으면 X 아이콘, 닫혀있으면 햄버거 아이콘 표시 */}
                        {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
                    </button>
                </div>
            </div>

            {/* 모바일 드롭다운 메뉴 - mobileMenuOpen이 true일 때만 표시 */}
            {mobileMenuOpen && (
                <div className="md:hidden border-t border-border bg-background/95 backdrop-blur-md">
                    <nav className="max-w-6xl mx-auto px-4 py-3 flex flex-col gap-1">
                        {navLinks.map((link) => {
                            const isActive = pathname === link.href;

                            return (
                                <a
                                    key={link.href}
                                    href={link.href}
                                    className={`
                                        px-4 py-3 rounded-md text-sm font-medium transition-colors
                                        ${isActive
                                            ? "bg-accent text-accent-foreground"
                                            : "text-muted-foreground hover:text-foreground hover:bg-accent/50"
                                        }
                                    `}
                                    // 링크 클릭 시 모바일 메뉴 닫기
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    {link.label}
                                </a>
                            );
                        })}
                    </nav>
                </div>
            )}
        </header>
    );
}
