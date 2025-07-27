"use client";

import { motion } from "framer-motion";
import { getScaleIn, getFadeIn } from "../motion/motionPresets";
import type { Result as ResultType } from "@/types/test";

/**
 * 결과(Result) 컴포넌트
 * - 테스트 결과를 보여주고, 다시 시작 버튼 제공
 */

interface ResultProps {
  result: ResultType;
  onRestart: () => void;
}

/**
 * Result 컴포넌트
 * @param {Object} props
 * @param {ResultType} props.result - 결과 객체 (타이틀+설명)
 * @param {function} props.onRestart - 테스트 재시작 함수
 * @returns {JSX.Element} 결과 UI
 */

export default function Result({ result, onRestart }: ResultProps) {
  return (
    <motion.div {...getScaleIn()} className="flex flex-col items-center justify-center min-h-screen px-4">
      {/* Result Card */}
      <motion.div {...getFadeIn(0.2)} className="bg-white rounded-2xl shadow-xl p-8 max-w-md w-full text-center">
        <motion.h2 {...getFadeIn(0.4)} className="text-2xl font-bold mb-6 text-gray-800">
          {result.title}
        </motion.h2>

        {/* 설명 영역: description이 있을 때만 렌더링 */}
        {result.description && (
          <motion.div {...getFadeIn(0.6)} className="mb-6">
            <p className="text-lg text-gray-700 leading-relaxed">{result.description}</p>
          </motion.div>
        )}

        {/* Restart Button */}
        <motion.button
          {...getFadeIn(1)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onRestart}
          className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-200 shadow-md"
        >
          다시 테스트하기
        </motion.button>
      </motion.div>
    </motion.div>
  );
}
