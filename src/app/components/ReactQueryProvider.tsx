"use client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactNode, useState } from "react";

/**
 * ReactQueryProvider 컴포넌트
 * - react-query(QueryClientProvider)를 클라이언트 컴포넌트에서 적용하기 위한 Provider
 * - QueryClient를 생성하여 children을 감싼다
 */
export default function ReactQueryProvider({ children }: { children: ReactNode }) {
  const [client] = useState(() => new QueryClient());
  return <QueryClientProvider client={client}>{children}</QueryClientProvider>;
}
