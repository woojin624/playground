"use client";

import { motion } from "framer-motion";
import { getFadeInUp, getFadeIn, getFadeInLeft, getFadeInRight } from "../motion/motionPresets";
import type { Question, Answer } from "@/types/test";

interface QuestionProps {
  question: string;
  answers: Answer[];
  onAnswer: (type: string) => void;
  currentStep: number;
  totalSteps: number;
}

/**
 * 질문(Question) 컴포넌트
 * - 현재 질문, 답변 버튼, 진행률 바를 표시
 * - 답변 선택 시 onAnswer 콜백 호출
 */
export default function Question({ question, answers, onAnswer, currentStep, totalSteps }: QuestionProps) {
  /**
   * Question 컴포넌트
   * @param {Object} props
   * @param {string} props.question - 질문 텍스트
   * @param {Array} props.answers - 답변 목록
   * @param {function} props.onAnswer - 답변 선택 시 호출되는 함수
   * @param {number} props.currentStep - 현재 질문 번호
   * @param {number} props.totalSteps - 전체 질문 수
   * @returns {JSX.Element} 질문 UI
   */
  return (
    <motion.div {...getFadeInUp()} className="flex flex-col items-center justify-center min-h-screen px-4">
      {/* Progress Bar */}
      <div className="w-full max-w-md mb-8">
        <div className="flex justify-between text-sm text-gray-500 mb-2">
          <span>진행률</span>
          <span>
            {currentStep} / {totalSteps}
          </span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <motion.div
            className="bg-blue-500 h-2 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: `${(currentStep / totalSteps) * 100}%` }}
            transition={{ duration: 0.5 }}
          />
        </div>
      </div>

      {/* Question */}
      <motion.h2 {...getFadeIn(0.2)} className="text-2xl font-bold text-center mb-8 text-gray-800 max-w-lg">
        {question}
      </motion.h2>

      {/* Answers */}
      <div className="flex flex-col gap-4 w-full max-w-md">
        {answers.map((answer, index) => (
          <motion.button
            key={answer.type}
            {...(index === 0 ? getFadeInLeft(0.3) : getFadeInRight(0.4))}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => onAnswer(answer.type)}
            className="px-6 py-4 bg-white border-2 border-blue-500 text-blue-600 rounded-lg hover:bg-blue-500 hover:text-white transition-all duration-200 shadow-md hover:shadow-lg"
          >
            {answer.text}
          </motion.button>
        ))}
      </div>
    </motion.div>
  );
}
