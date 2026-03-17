// 프로젝트 목록 페이지 (클라이언트 컴포넌트)
// 카테고리 필터 버튼과 프로젝트 카드 그리드를 표시합니다.
// "전체 / 웹 / 모바일" 탭으로 필터링할 수 있습니다.

"use client";

import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Github, ExternalLink } from "lucide-react";

// 프로젝트 데이터 타입 정의
// TypeScript의 인터페이스: 데이터의 모양(shape)을 미리 정해두는 것입니다
interface Project {
    id: number;
    title: string;
    description: string;
    category: "웹" | "모바일";  // 둘 중 하나만 가능
    techStack: string[];
    githubUrl?: string;         // ?가 붙으면 있을 수도, 없을 수도 있습니다 (선택적)
    liveUrl?: string;
    emoji: string;
}

// 예시 프로젝트 데이터
const projects: Project[] = [
    {
        id: 1,
        title: "쇼핑몰 플랫폼",
        description: "Next.js와 TypeScript로 구축한 풀스택 이커머스 플랫폼. 장바구니, 결제, 관리자 대시보드 기능을 포함합니다.",
        category: "웹",
        techStack: ["Next.js", "TypeScript", "PostgreSQL", "Stripe"],
        githubUrl: "https://github.com",
        liveUrl: "https://example.com",
        emoji: "🛍️",
    },
    {
        id: 2,
        title: "업무 관리 앱",
        description: "팀 협업을 위한 칸반 보드 스타일의 프로젝트 관리 도구. 실시간 업데이트와 드래그앤드롭을 지원합니다.",
        category: "웹",
        techStack: ["React", "Node.js", "Socket.io", "MongoDB"],
        githubUrl: "https://github.com",
        emoji: "📋",
    },
    {
        id: 3,
        title: "날씨 앱",
        description: "현재 위치 기반 날씨 정보와 7일 예보를 제공하는 React Native 모바일 앱입니다.",
        category: "모바일",
        techStack: ["React Native", "Expo", "OpenWeather API"],
        githubUrl: "https://github.com",
        emoji: "🌤️",
    },
    {
        id: 4,
        title: "포트폴리오 웹사이트",
        description: "이 포트폴리오 사이트입니다! Next.js와 Tailwind CSS로 제작했으며 다크모드를 지원합니다.",
        category: "웹",
        techStack: ["Next.js", "TailwindCSS", "shadcn/ui"],
        githubUrl: "https://github.com",
        liveUrl: "https://example.com",
        emoji: "💼",
    },
    {
        id: 5,
        title: "피트니스 트래커",
        description: "운동 기록과 목표 관리를 위한 모바일 앱. 운동 루틴 생성과 진행도 시각화 기능을 제공합니다.",
        category: "모바일",
        techStack: ["React Native", "Redux", "Firebase"],
        githubUrl: "https://github.com",
        emoji: "💪",
    },
    {
        id: 6,
        title: "블로그 플랫폼",
        description: "마크다운 기반 블로그 플랫폼. MDX를 지원하며 SEO 최적화가 적용되어 있습니다.",
        category: "웹",
        techStack: ["Next.js", "MDX", "TailwindCSS"],
        githubUrl: "https://github.com",
        liveUrl: "https://example.com",
        emoji: "✍️",
    },
];

// 카테고리 필터 탭 목록
const categories = ["전체", "웹", "모바일"] as const;
type Category = typeof categories[number];  // "전체" | "웹" | "모바일" 타입 자동 생성

export default function ProjectsPage() {
    // 현재 선택된 카테고리 상태 (기본값: "전체")
    const [selectedCategory, setSelectedCategory] = useState<Category>("전체");

    // 선택된 카테고리에 따라 프로젝트를 필터링합니다
    // "전체"이면 모두, 아니면 해당 카테고리만 필터링
    const filteredProjects = selectedCategory === "전체"
        ? projects
        : projects.filter((project) => project.category === selectedCategory);

    return (
        <div className="py-16 md:py-24">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* 페이지 제목 */}
                <div className="mb-10">
                    <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
                        프로젝트
                    </h1>
                    <p className="text-muted-foreground">
                        제가 작업한 주요 프로젝트들을 소개합니다.
                    </p>
                </div>

                {/* 카테고리 필터 버튼 */}
                <div className="flex gap-2 mb-10">
                    {categories.map((category) => (
                        <Button
                            key={category}
                            // 선택된 카테고리는 기본(진한) 스타일, 나머지는 outline(테두리) 스타일
                            variant={selectedCategory === category ? "default" : "outline"}
                            size="sm"
                            onClick={() => setSelectedCategory(category)}
                        >
                            {category}
                        </Button>
                    ))}
                </div>

                {/* 프로젝트 카드 그리드 */}
                {/* 모바일: 1열, 태블릿: 2열, 데스크탑: 3열 */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredProjects.map((project) => (
                        <Card key={project.id} className="flex flex-col hover:shadow-md transition-shadow">
                            <CardHeader>
                                {/* 썸네일 역할의 이모지 */}
                                <div className="text-4xl mb-3">{project.emoji}</div>

                                <div className="flex items-start justify-between gap-2">
                                    <CardTitle className="text-lg">{project.title}</CardTitle>
                                    {/* 카테고리 배지 */}
                                    <Badge variant="secondary" className="shrink-0 text-xs">
                                        {project.category}
                                    </Badge>
                                </div>
                            </CardHeader>

                            <CardContent className="flex flex-col flex-1 gap-4">
                                {/* 프로젝트 설명 */}
                                <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                                    {project.description}
                                </p>

                                {/* 기술 스택 배지 목록 */}
                                <div className="flex flex-wrap gap-1.5">
                                    {project.techStack.map((tech) => (
                                        <Badge key={tech} variant="outline" className="text-xs">
                                            {tech}
                                        </Badge>
                                    ))}
                                </div>

                                {/* 링크 버튼들 */}
                                <div className="flex gap-2 pt-2">
                                    {/* GitHub 링크 (있을 때만 표시) */}
                                    {project.githubUrl && (
                                        <Button asChild variant="outline" size="sm" className="flex-1">
                                            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                                                <Github size={14} className="mr-1" />
                                                코드 보기
                                            </a>
                                        </Button>
                                    )}

                                    {/* 라이브 데모 링크 (있을 때만 표시) */}
                                    {project.liveUrl && (
                                        <Button asChild size="sm" className="flex-1">
                                            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                                                <ExternalLink size={14} className="mr-1" />
                                                데모 보기
                                            </a>
                                        </Button>
                                    )}
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                {/* 필터 결과가 없을 때 메시지 */}
                {filteredProjects.length === 0 && (
                    <div className="text-center py-20 text-muted-foreground">
                        해당 카테고리의 프로젝트가 없습니다.
                    </div>
                )}
            </div>
        </div>
    );
}
