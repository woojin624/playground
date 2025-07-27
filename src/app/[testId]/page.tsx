"use client";

import { use } from "react";
import { useTest } from "@/queries/useTest";
import { useState } from "react";
import Question from "../components/Question";
import Result from "../components/Result";

/**
 * 개별 심리 테스트 페이지
 * - testId에 따라 해당 테스트의 질문을 순차적으로 보여주고, 결과를 계산하여 출력
 * - 잘못된 testId 처리, 테스트 재시작 기능 포함
 */

export default function TestPage({ params }: { params: Promise<{ testId: string }> }) {
  const { testId } = use(params); // ✅ 이렇게 언래핑
  const { data: test, error, isLoading } = useTest(testId);
  // 분석 축별 점수 누적용 state
  const [scores, setScores] = useState<Record<string, Record<string, number>>>({});
  const [step, setStep] = useState(0);
  // 기존 gender/answers state 제거

  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen">
        <h1 className="text-2xl font-bold text-red-600 mb-4">로딩 중...</h1>
      </div>
    );
  }
  if (error || !test) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen">
        <h1 className="text-2xl font-bold text-red-600 mb-4">존재하지 않는 테스트입니다.</h1>
        <p className="text-gray-600">올바른 테스트 URL을 확인해주세요.</p>
      </div>
    );
  }

  // 답변 effects를 받아서 점수 누적
  const handleAnswer = (effects: Record<string, string>) => {
    // 새로운 점수 객체 복사
    const newScores = { ...scores };
    // 각 축별로 점수 누적
    Object.entries(effects).forEach(([dimension, value]) => {
      if (!newScores[dimension]) newScores[dimension] = {};
      if (!newScores[dimension][value]) newScores[dimension][value] = 0;
      newScores[dimension][value] += 1;
    });
    setScores(newScores);
    setStep(step + 1);
  };

  // 테스트 재시작
  const handleRestart = () => {
    setStep(0);
    setScores({});
  };

  if (step >= test.questions.length) {
    // 결과 분석: 각 축별로 점수 높은 값을 조합
    let resultKey = "";
    if (test.dimensions && test.dimensions.length > 0) {
      resultKey = test.dimensions
        .map((dimension: string) => {
          const values = scores[dimension] || {};
          // 가장 점수 높은 값 찾기
          let maxValue = "";
          let maxScore = -1;
          Object.entries(values).forEach(([value, score]) => {
            if (score > maxScore) {
              maxScore = score;
              maxValue = value;
            }
          });
          return maxValue;
        })
        .join("");
    }
    // 결과가 없으면 기타로 처리
    const result = test.results[resultKey] || test.results["기타"] || { title: "결과를 찾을 수 없습니다.", description: "" };
    return <Result result={result} onRestart={handleRestart} />;
  }

  const currentQuestion = test.questions[step];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <Question
        question={currentQuestion.question}
        answers={currentQuestion.answers}
        onAnswer={handleAnswer}
        currentStep={step}
        totalSteps={test.questions.length}
      />
    </div>
  );
}

/**
 * TestPage 컴포넌트
 * @param {Object} params - 라우트 파라미터 (testId)
 * @returns {JSX.Element} 테스트 진행 및 결과 UI
 */
