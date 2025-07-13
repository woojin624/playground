/**
 * getTestList 함수
 * - 테스트 목록을 가져오는 비동기 함수 (정적 JSON fetch)
 * @returns {Promise<any>} 테스트 목록 데이터
 */
export async function getTestList() {
  const res = await fetch("/tests/index.json");
  if (!res.ok) throw new Error("테스트 목록을 불러올 수 없습니다.");
  return await res.json();
}
