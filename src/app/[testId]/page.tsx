"use client";

import { tests } from "../../data/tests";
import { useState, use } from "react";
import Question from "../components/Question";
import Result from "../components/Result";

interface Params {
  params: Promise<{ testId: string }>;
}

/**
 * 개별 심리 테스트 페이지
 * - testId에 따라 해당 테스트의 질문을 순차적으로 보여주고, 결과를 계산하여 출력
 * - 잘못된 testId 처리, 테스트 재시작 기능 포함
 */

export default function TestPage({ params }: Params) {
  const { testId } = use(params);
  const test = tests[testId as keyof typeof tests];
  type ResultKey = "teto_male" | "egen_male" | "teto_female" | "egen_female";
  const [step, setStep] = useState(0);
  const [gender, setGender] = useState<string | null>(null);
  const [answers, setAnswers] = useState<string[]>([]);

  if (!test) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen">
        <h1 className="text-2xl font-bold text-red-600 mb-4">존재하지 않는 테스트입니다.</h1>
        <p className="text-gray-600">올바른 테스트 URL을 확인해주세요.</p>
      </div>
    );
  }

  const handleAnswer = (type: string) => {
    if (step === 0) {
      setGender(type); // 첫 번째 질문은 성별
    } else {
      setAnswers([...answers, type]);
    }
    setStep(step + 1);
  };

  const handleRestart = () => {
    setStep(0);
    setGender(null);
    setAnswers([]);
  };

  if (step >= test.questions.length) {
    // 결과 계산: gender + (테토/에겐 카운트)
    const tetoCount = answers.filter((a) => a === "teto").length;
    const egenCount = answers.filter((a) => a === "egen").length;
    let resultKey: ResultKey = "teto_male";
    if (gender === "male" || gender === "female") {
      if (tetoCount >= egenCount) {
        resultKey = `teto_${gender}` as ResultKey;
      } else {
        resultKey = `egen_${gender}` as ResultKey;
      }
    }
    const result = test.results[resultKey];
    return <Result result={result.label + " - " + result.description} onRestart={handleRestart} />;
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
