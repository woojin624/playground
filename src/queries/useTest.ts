import { useQuery } from "@tanstack/react-query";
import { getTest } from "@/lib/getTest";

/**
 * useTest 커스텀 훅
 * - 특정 testId에 해당하는 테스트 데이터를 react-query로 패칭하는 훅
 * @param {string} testId - 테스트 ID
 * @returns {object} react-query useQuery 리턴값
 */
export const useTest = (testId: string) => {
  return useQuery({
    queryKey: ["test", testId],
    queryFn: () => getTest(testId),
    staleTime: Infinity,
  });
};
