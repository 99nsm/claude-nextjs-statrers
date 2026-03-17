// 페이지 하단에 고정되는 Footer 컴포넌트 (서버 컴포넌트)
// 로고, 소개 문구, 소셜 링크, 저작권 정보를 표시합니다.

import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
    // 현재 연도를 동적으로 가져옵니다 (빌드 시점 기준)
    const currentYear = new Date().getFullYear();

    return (
        <footer className="border-t border-border bg-background">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                    {/* 로고 및 소개 문구 */}
                    <div className="space-y-3">
                        <h3 className="text-lg font-bold text-foreground">포트폴리오</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                            사용자 경험을 중시하는 개발자입니다.
                            아이디어를 현실로 만드는 것을 좋아합니다.
                        </p>
                    </div>

                    {/* 빠른 링크 */}
                    <div className="space-y-3">
                        <h3 className="text-sm font-semibold text-foreground">빠른 링크</h3>
                        <ul className="space-y-2">
                            {[
                                { label: "홈", href: "/" },
                                { label: "소개", href: "/about" },
                                { label: "프로젝트", href: "/projects" },
                                { label: "연락처", href: "/contact" },
                            ].map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* 소셜 링크 */}
                    <div className="space-y-3">
                        <h3 className="text-sm font-semibold text-foreground">연락하기</h3>
                        <div className="flex gap-3">
                            {/* GitHub 링크 */}
                            <a
                                href="https://github.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-accent transition-colors"
                                aria-label="GitHub"
                            >
                                <Github size={20} />
                            </a>

                            {/* LinkedIn 링크 */}
                            <a
                                href="https://linkedin.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-accent transition-colors"
                                aria-label="LinkedIn"
                            >
                                <Linkedin size={20} />
                            </a>

                            {/* 이메일 링크 */}
                            <a
                                href="mailto:your@email.com"
                                className="p-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-accent transition-colors"
                                aria-label="Email"
                            >
                                <Mail size={20} />
                            </a>
                        </div>
                    </div>
                </div>

                {/* 저작권 표시 - 연도가 자동으로 업데이트됩니다 */}
                <div className="mt-8 pt-8 border-t border-border text-center text-sm text-muted-foreground">
                    © {currentYear} 포트폴리오. All rights reserved.
                </div>
            </div>
        </footer>
    );
}
