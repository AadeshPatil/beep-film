"use client";

import { useState, useEffect } from "react";
import { Header, Hero, Loader } from "@/common";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check if loader has been shown before
    const hasShownLoader = sessionStorage.getItem("hasShownLoader");

    if (hasShownLoader) {
      // Skip loader if already shown in this session
      setIsLoading(false);
    } else {
      // Show loader for 2 seconds on first load
      const timer = setTimeout(() => {
        setIsLoading(false);
        sessionStorage.setItem("hasShownLoader", "true");
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <>
      <Loader isLoading={isLoading} />
      {!isLoading && (
        <main className="main-page">
          <Header />
          <Hero />
        </main>
      )}
    </>
  );
}
