import SidebarNavigation from "@/shared/components/SidebarNavigation";
import React from "react";

const layout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <div className="flex h-screen w-screen p-2">
      <div className="bg-[#e7e7e7] h-full w-[12vw] shadow rounded-xl">
        <h1 className="font-bold text-2xl text-center mt-4 tracking-tight">
          Kopixel
        </h1>
        <SidebarNavigation />
      </div>
      <div>{children}</div>
    </div>
  );
};

export default layout;
