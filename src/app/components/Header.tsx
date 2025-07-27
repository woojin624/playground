"use client";

import Link from "next/link";

/**
 * 사이트 전체에서 사용하는 헤더 컴포넌트
 * - 사이트 타이틀 및 홈 링크 제공
 */
export default function Header() {
  return (
    <header className="w-full bg-white shadow-md py-2 px-4 flex items-center justify-between">
      {/* 사이트 타이틀(홈 링크) */}
      <Link href="/" className="text-xl font-bold text-blue-400 hover:text-blue-500">
        PLAYGROUND
      </Link>
      {/* 우측 여백(추후 메뉴/로그인 등 확장 가능) */}
      <div />
    </header>
  );
}
