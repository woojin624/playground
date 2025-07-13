"use client";

import { motion } from "framer-motion";
import { useTestList } from "@/queries/useTestList";
import Link from "next/link";
import { getFadeInUp, getFadeIn } from "./motion/motionPresets";

/**
 * 홈(메인) 페이지 컴포넌트
 * - 테스트 목록을 보여주고, 각 테스트로 이동할 수 있는 카드 UI 제공
 * - motionPresets를 활용한 애니메이션 적용
 */
export default function Home() {
  const { data: testList, isLoading, error } = useTestList();

  if (isLoading) {
    return <div>로딩 중...</div>;
  }
  if (error || !testList) {
    return <div>테스트 목록을 불러올 수 없습니다.</div>;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-16">
        <motion.div {...getFadeInUp()} className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">심리 테스트 모음</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            다양한 테스트를 통해 당신의 성향과 스타일을 알아보세요. 각 테스트는 몇 가지 간단한 질문으로 구성되어 있습니다.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {testList.map((test: { id: string; title: string; questions: { length: number } }, index: number) => (
            <motion.div
              key={test.id}
              {...getFadeInUp(index * 0.1)}
              whileHover={{ y: -5 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="p-6">
                <h2 className="text-xl font-bold text-gray-800 mb-3">{test.title}</h2>
                <div className="flex justify-end items-center">
                  <Link href={`/${test.id}`} className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-200">
                    테스트 시작
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div {...getFadeIn(0.5)} className="text-center mt-12">
          <p className="text-gray-500">더 많은 테스트가 곧 추가될 예정입니다!</p>
        </motion.div>
      </div>
    </div>
  );
}

/**
 * Home 컴포넌트
 * @returns {JSX.Element} 메인 페이지 UI
 */
