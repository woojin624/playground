import { useQuery } from "@tanstack/react-query";
import { getTestList } from "@/lib/getTestList";

/**
 * useTestList 커스텀 훅
 * - 테스트 목록을 react-query로 패칭하는 훅
 * @returns {object} react-query useQuery 리턴값
 */
export const useTestList = () => {
  return useQuery({
    queryKey: ["test-list"],
    queryFn: getTestList,
    staleTime: Infinity,
  });
};
