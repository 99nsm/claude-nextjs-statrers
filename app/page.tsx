// 메인 홈 페이지
// 방문자가 처음 보는 페이지로, 히어로 섹션과 기술 스택 소개를 표시합니다.

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

// 기술 스택 목록
const techStack = [
    "React", "Next.js", "TypeScript", "Node.js",
    "TailwindCSS", "PostgreSQL", "Docker", "Git",
];

export default function Home() {
    return (
        <div>
            {/* ===== 히어로 섹션 ===== */}
            {/* 페이지의 가장 중요한 첫 화면입니다 */}
            <section className="py-24 md:py-36">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl space-y-6">

                        {/* 직함 배지 */}
                        <Badge variant="secondary" className="text-sm px-3 py-1">
                            풀스택 개발자
                        </Badge>

                        {/* 이름과 메인 타이틀 */}
                        <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground">
                            안녕하세요,
                            <br />
                            <span className="text-primary">홍길동</span>입니다
                        </h1>

                        {/* 소개 문구 */}
                        <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl">
                            사용자 경험을 최우선으로 생각하는 개발자입니다.
                            아이디어를 현실로 만들고, 문제를 우아하게 해결하는 것을 즐깁니다.
                            함께 멋진 것을 만들어 봐요!
                        </p>

                        {/* CTA(Call To Action) 버튼 - 방문자의 행동을 유도합니다 */}
                        <div className="flex flex-col sm:flex-row gap-3 pt-2">
                            {/* 주요 버튼: 프로젝트 보기 */}
                            <Button asChild size="lg">
                                <a href="/projects">프로젝트 보기</a>
                            </Button>

                            {/* 보조 버튼: 연락하기 */}
                            <Button asChild variant="outline" size="lg">
                                <a href="/contact">연락하기</a>
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* ===== 기술 스택 미리보기 섹션 ===== */}
            <section className="py-16 md:py-24 bg-muted/30">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

                    {/* 섹션 제목 */}
                    <div className="text-center mb-10">
                        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
                            기술 스택
                        </h2>
                        <p className="text-muted-foreground">
                            주로 사용하는 기술들입니다
                        </p>
                    </div>

                    {/* 기술 배지 목록 - 유연하게 줄 바꿈되는 레이아웃 */}
                    <div className="flex flex-wrap justify-center gap-3">
                        {techStack.map((tech) => (
                            <Badge
                                key={tech}
                                variant="outline"
                                className="text-sm px-4 py-2 font-medium"
                            >
                                {tech}
                            </Badge>
                        ))}
                    </div>

                    {/* 더 보기 링크 */}
                    <div className="text-center mt-8">
                        <Button asChild variant="ghost">
                            <a href="/about">더 자세히 보기 →</a>
                        </Button>
                    </div>
                </div>
            </section>
        </div>
    );
}
