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
  title: string;
  questions: Question[];
  results: Record<string, Result>;
}

/** 질문 */
export interface Question {
  question: string;
  answers: Answer[];
}

/** 답변 */
export interface Answer {
  type: string;
  text: string;
}

/** 결과 */
export interface Result {
  label: string;
  description: string;
}
