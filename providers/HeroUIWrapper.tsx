"use client";

import { HeroUIProvider } from "@heroui/react";
import { useRouter } from "next/navigation";
import React from "react";

const HeroUIWrapper = ({
  children,
}: Readonly<{ children: React.ReactNode }>) => {
  const router = useRouter();
  return (
    <div>
      <HeroUIProvider navigate={router.push}>{children}</HeroUIProvider>
    </div>
  );
};

export default HeroUIWrapper;
