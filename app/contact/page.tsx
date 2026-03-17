// 연락처 페이지 (클라이언트 컴포넌트)
// 왼쪽: 연락 정보 카드, 오른쪽: 문의 폼
// 폼 제출 시 성공 메시지를 표시합니다.

"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, MapPin, Github, Linkedin, Send, CheckCircle } from "lucide-react";

// 폼 입력값의 타입 정의
interface FormData {
    name: string;
    email: string;
    subject: string;
    message: string;
}

// 연락 정보 카드 데이터
const contactInfo = [
    {
        icon: Mail,
        label: "이메일",
        value: "your@email.com",
        href: "mailto:your@email.com",
    },
    {
        icon: MapPin,
        label: "위치",
        value: "서울, 대한민국",
        href: null,  // 클릭 불가한 정보
    },
    {
        icon: Github,
        label: "GitHub",
        value: "github.com/yourname",
        href: "https://github.com",
    },
    {
        icon: Linkedin,
        label: "LinkedIn",
        value: "linkedin.com/in/yourname",
        href: "https://linkedin.com",
    },
];

export default function ContactPage() {
    // 폼 입력값 상태 관리
    // 객체 하나로 여러 입력값을 한꺼번에 관리합니다
    const [formData, setFormData] = useState<FormData>({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    // 폼 제출 성공 여부 상태
    const [isSubmitted, setIsSubmitted] = useState(false);

    // 폼 제출 중 로딩 상태 (버튼 중복 클릭 방지)
    const [isLoading, setIsLoading] = useState(false);

    // 입력값이 변경될 때 호출되는 함수
    // [e.target.name]: 대괄호로 동적으로 키를 지정합니다 (name, email, subject, message 등)
    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setFormData((prev) => ({
            ...prev,  // 기존 값은 그대로 유지
            [e.target.name]: e.target.value,  // 변경된 필드만 업데이트
        }));
    };

    // 폼 제출 처리 함수
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();  // 브라우저 기본 제출 동작(새로고침) 막기
        setIsLoading(true);

        // 실제 이메일 전송 로직은 여기에 추가하세요
        // 예: API 호출, EmailJS, Resend 등
        await new Promise((resolve) => setTimeout(resolve, 1000));  // 1초 대기 (시뮬레이션)

        setIsLoading(false);
        setIsSubmitted(true);  // 성공 상태로 변경
    };

    return (
        <div className="py-16 md:py-24">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* 페이지 제목 */}
                <div className="mb-12">
                    <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
                        연락하기
                    </h1>
                    <p className="text-muted-foreground">
                        프로젝트 협업, 채용 문의, 기타 궁금한 점이 있으시면 언제든지 연락주세요!
                    </p>
                </div>

                {/* 2열 레이아웃: 좌측 연락 정보 / 우측 폼 */}
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">

                    {/* ===== 좌측: 연락 정보 카드들 (2/5 너비) ===== */}
                    <div className="lg:col-span-2 space-y-4">
                        <h2 className="text-xl font-semibold text-foreground mb-6">
                            연락 정보
                        </h2>

                        {contactInfo.map((info) => {
                            const IconComponent = info.icon;  // 아이콘 컴포넌트를 변수에 저장

                            return (
                                <Card key={info.label}>
                                    <CardContent className="flex items-center gap-4 py-4">
                                        {/* 아이콘 */}
                                        <div className="p-2 rounded-md bg-muted">
                                            <IconComponent size={18} className="text-muted-foreground" />
                                        </div>

                                        {/* 정보 텍스트 */}
                                        <div>
                                            <p className="text-xs text-muted-foreground">{info.label}</p>
                                            {/* href가 있으면 링크로, 없으면 일반 텍스트로 표시 */}
                                            {info.href ? (
                                                <a
                                                    href={info.href}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="text-sm font-medium text-foreground hover:text-primary transition-colors"
                                                >
                                                    {info.value}
                                                </a>
                                            ) : (
                                                <p className="text-sm font-medium text-foreground">{info.value}</p>
                                            )}
                                        </div>
                                    </CardContent>
                                </Card>
                            );
                        })}
                    </div>

                    {/* ===== 우측: 문의 폼 (3/5 너비) ===== */}
                    <div className="lg:col-span-3">
                        <Card>
                            <CardHeader>
                                <CardTitle>메시지 보내기</CardTitle>
                            </CardHeader>
                            <CardContent>

                                {/* 제출 성공 시 성공 메시지 표시 */}
                                {isSubmitted ? (
                                    <div className="flex flex-col items-center justify-center py-12 text-center space-y-4">
                                        <CheckCircle size={48} className="text-green-500" />
                                        <h3 className="text-xl font-semibold text-foreground">
                                            메시지가 전송되었습니다!
                                        </h3>
                                        <p className="text-muted-foreground">
                                            빠른 시일 내에 답변 드리겠습니다. 감사합니다!
                                        </p>
                                        <Button
                                            variant="outline"
                                            onClick={() => {
                                                // 폼 초기화 후 다시 입력 가능하게
                                                setIsSubmitted(false);
                                                setFormData({ name: "", email: "", subject: "", message: "" });
                                            }}
                                        >
                                            새 메시지 보내기
                                        </Button>
                                    </div>
                                ) : (
                                    /* 폼 */
                                    <form onSubmit={handleSubmit} className="space-y-5">

                                        {/* 이름 / 이메일 - 모바일에서 세로, 데스크탑에서 가로 배치 */}
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                            <div className="space-y-2">
                                                <Label htmlFor="name">이름 *</Label>
                                                <Input
                                                    id="name"
                                                    name="name"
                                                    placeholder="홍길동"
                                                    value={formData.name}
                                                    onChange={handleChange}
                                                    required
                                                />
                                            </div>
                                            <div className="space-y-2">
                                                <Label htmlFor="email">이메일 *</Label>
                                                <Input
                                                    id="email"
                                                    name="email"
                                                    type="email"
                                                    placeholder="your@email.com"
                                                    value={formData.email}
                                                    onChange={handleChange}
                                                    required
                                                />
                                            </div>
                                        </div>

                                        {/* 제목 */}
                                        <div className="space-y-2">
                                            <Label htmlFor="subject">제목 *</Label>
                                            <Input
                                                id="subject"
                                                name="subject"
                                                placeholder="문의 제목을 입력해주세요"
                                                value={formData.subject}
                                                onChange={handleChange}
                                                required
                                            />
                                        </div>

                                        {/* 메시지 내용 */}
                                        <div className="space-y-2">
                                            <Label htmlFor="message">메시지 *</Label>
                                            <Textarea
                                                id="message"
                                                name="message"
                                                placeholder="문의 내용을 자유롭게 작성해주세요..."
                                                rows={6}
                                                value={formData.message}
                                                onChange={handleChange}
                                                required
                                            />
                                        </div>

                                        {/* 전송 버튼 */}
                                        <Button
                                            type="submit"
                                            className="w-full"
                                            disabled={isLoading}  // 전송 중에는 버튼 비활성화
                                        >
                                            {isLoading ? (
                                                // 로딩 중일 때 스피너 표시
                                                <span className="flex items-center gap-2">
                                                    <span className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
                                                    전송 중...
                                                </span>
                                            ) : (
                                                <span className="flex items-center gap-2">
                                                    <Send size={16} />
                                                    메시지 보내기
                                                </span>
                                            )}
                                        </Button>
                                    </form>
                                )}
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    );
}
