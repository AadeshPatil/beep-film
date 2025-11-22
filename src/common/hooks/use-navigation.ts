// Example: Custom hook for navigation
"use client";

import { useRouter } from "next/navigation";

export function useNavigation() {
  const router = useRouter();

  const navigateTo = (path: string) => {
    router.push(path);
  };

  const goBack = () => {
    router.back();
  };

  const refresh = () => {
    router.refresh();
  };

  return {
    navigateTo,
    goBack,
    refresh,
    router,
  };
}
