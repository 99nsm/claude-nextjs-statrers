import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    // GitHub Pages 정적 배포를 위한 설정
    output: "export",

    // GitHub Pages 저장소 이름이 서브 경로가 됩니다
    // 예: https://99nsm.github.io/claude-nextjs-statrers/
    basePath: "/claude-nextjs-statrers",

    // 각 경로 끝에 / 를 붙여서 정적 파일과 매핑이 잘 되게 합니다
    trailingSlash: true,

    // 정적 배포 시 Next.js Image 최적화 서버가 없으므로 비활성화
    images: {
        unoptimized: true,
    },
};

export default nextConfig;
