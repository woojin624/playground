/**
 * 테스트 관련 타입 정의 파일
 * - 테스트, 질문, 답변, 결과 등 전역적으로 사용하는 타입을 정의
 */

/** 테스트 목록의 각 항목 */
export interface TestListItem {
  id: string;
  title: string;
}

/** 개별 테스트 */
export interface Test {
  id?: string; // 테스트 ID (옵션)
  title: string;
  dimensions: string[]; // 분석 축(예: ["EI", "SN", ...])
  questions: Question[];
  results: Record<string, Result>; // 결과 키-값 (ex: { "ESTJ": {title, description} })
}

/** 질문 */
export interface Question {
  question: string;
  answers: Answer[];
}

/** 답변 */
export interface Answer {
  text: string; // 답변 텍스트
  effects: Record<string, string>; // { 축: 값 } 형태로, 여러 축에 영향 가능
}

/** 결과 */
export interface Result {
  title: string; // 결과 타이틀
  description: string; // 결과 설명
}
