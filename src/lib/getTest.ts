/**
 * getTest 함수
 * - 특정 testId에 해당하는 테스트 데이터를 가져오는 비동기 함수 (정적 JSON fetch)
 * @param {string} testId - 테스트 ID
 * @returns {Promise<any>} 테스트 데이터
 */
export async function getTest(testId: string) {
  const res = await fetch(`/tests/${testId}.json`);
  if (!res.ok) throw new Error("테스트 데이터를 불러올 수 없습니다.");
  return res.json();
}
