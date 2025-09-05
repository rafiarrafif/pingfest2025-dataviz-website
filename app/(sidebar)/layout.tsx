import SidebarNavigation from "@/shared/components/sidebar/SidebarNavigation";
import React from "react";

const layout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <div className="flex h-screen w-screen p-2">
      <div className="bg-[#f7f7f7] border border-[#f1f1f1] h-full w-[280px] shadow-sm rounded-xl">
        <h1 className="font-bold text-2xl text-center mt-8 tracking-tight">
          Kopixel
        </h1>
        <SidebarNavigation />
      </div>
      <div>{children}</div>
    </div>
  );
};

export default layout;
