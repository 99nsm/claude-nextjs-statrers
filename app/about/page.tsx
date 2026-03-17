// 소개 페이지 (About Page)
// 개발자 프로필, 기술 스택 카테고리, 경력 타임라인을 보여줍니다.

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

// 기술 카테고리별 스킬 목록 정의
const skillCategories = [
    {
        title: "프론트엔드",
        skills: ["React", "Next.js", "TypeScript", "TailwindCSS", "HTML/CSS"],
    },
    {
        title: "백엔드",
        skills: ["Node.js", "Express", "PostgreSQL", "MongoDB", "REST API"],
    },
    {
        title: "도구 & 기타",
        skills: ["Git", "Docker", "Figma", "VS Code", "Linux"],
    },
];

// 경력/학력 타임라인 데이터
const timeline = [
    {
        year: "2024",
        title: "시니어 프론트엔드 개발자",
        company: "테크 스타트업",
        description: "React와 Next.js를 활용한 웹 서비스 개발 및 팀 리딩",
    },
    {
        year: "2022",
        title: "풀스택 개발자",
        company: "IT 기업",
        description: "Node.js 백엔드와 React 프론트엔드 개발",
    },
    {
        year: "2020",
        title: "컴퓨터공학 학사 졸업",
        company: "대학교",
        description: "소프트웨어 공학 전공, 졸업 프로젝트 우수상 수상",
    },
];

export default function AboutPage() {
    return (
        <div className="py-16 md:py-24">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* ===== 프로필 섹션 ===== */}
                <section className="mb-20">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center">

                        {/* 프로필 이미지 placeholder */}
                        {/* 실제 사용 시 이 부분을 Image 컴포넌트로 교체하세요 */}
                        <div className="flex justify-center md:justify-start">
                            <div className="w-48 h-48 rounded-full bg-muted flex items-center justify-center border-2 border-border">
                                <span className="text-6xl">👨‍💻</span>
                            </div>
                        </div>

                        {/* 소개 텍스트 */}
                        <div className="md:col-span-2 space-y-4">
                            <h1 className="text-3xl md:text-4xl font-bold text-foreground">
                                홍길동
                            </h1>
                            <Badge variant="secondary">풀스택 개발자</Badge>
                            <p className="text-muted-foreground leading-relaxed">
                                안녕하세요! 저는 사용자 중심의 웹 서비스를 만드는 것을 좋아하는 개발자입니다.
                                클린 코드와 좋은 사용자 경험을 위해 항상 고민하며,
                                새로운 기술을 배우는 것을 즐깁니다.
                            </p>
                            <p className="text-muted-foreground leading-relaxed">
                                4년간의 개발 경험을 통해 프론트엔드부터 백엔드까지 다양한 분야에서
                                프로젝트를 진행해 왔습니다. 팀워크와 커뮤니케이션을 중요하게 생각하며,
                                함께 성장하는 개발 문화를 지향합니다.
                            </p>
                        </div>
                    </div>
                </section>

                {/* ===== 기술 스택 섹션 ===== */}
                <section className="mb-20">
                    <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8">
                        기술 스택
                    </h2>

                    {/* 3개 카드가 가로로 나열되고, 모바일에서는 세로로 쌓입니다 */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {skillCategories.map((category) => (
                            <Card key={category.title}>
                                <CardHeader>
                                    <CardTitle className="text-lg">{category.title}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    {/* 기술 배지들을 유연하게 배치합니다 */}
                                    <div className="flex flex-wrap gap-2">
                                        {category.skills.map((skill) => (
                                            <Badge key={skill} variant="outline">
                                                {skill}
                                            </Badge>
                                        ))}
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </section>

                {/* ===== 경력 타임라인 섹션 ===== */}
                <section>
                    <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8">
                        경력 & 학력
                    </h2>

                    {/* 타임라인: 왼쪽에 세로선, 오른쪽에 내용 */}
                    <div className="space-y-0">
                        {timeline.map((item, index) => (
                            <div key={index} className="flex gap-6">
                                {/* 왼쪽: 연도 + 세로선 */}
                                <div className="flex flex-col items-center">
                                    {/* 동그란 점 */}
                                    <div className="w-3 h-3 rounded-full bg-primary mt-1.5 shrink-0" />
                                    {/* 세로 연결선 (마지막 항목에는 표시 안 함) */}
                                    {index < timeline.length - 1 && (
                                        <div className="w-0.5 bg-border flex-1 my-1" />
                                    )}
                                </div>

                                {/* 오른쪽: 내용 */}
                                <div className="pb-10">
                                    <span className="text-sm font-medium text-primary">{item.year}</span>
                                    <h3 className="text-lg font-semibold text-foreground mt-1">
                                        {item.title}
                                    </h3>
                                    <p className="text-sm text-muted-foreground mb-1">{item.company}</p>
                                    <p className="text-muted-foreground">{item.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </div>
    );
}
