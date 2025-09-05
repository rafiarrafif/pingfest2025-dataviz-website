"use client";
import { Button, Link } from "@heroui/react";
import { Icon } from "@iconify/react";
import { usePathname } from "next/navigation";
import React from "react";

const SidebarNavigation = () => {
  const route = usePathname();
  return (
    <div className="mt-8 flex flex-col w-full gap-0.5">
      <div className="w-full flex">
        <div
          className={`h-auto w-2 rounded-tr-xl rounded-br-xl transition-all duration-200 ${
            route === "/" ? "bg-primary-600" : "bg-transparent"
          }`}
        />
        <Button
          color={route === "/" ? "primary" : "secondary"}
          radius="none"
          variant="light"
          className="font-semibold text-md flex-1 justify-start bg-transparent data-[hover=true]:bg-transparent opacity-100"
          as={Link}
          href="/"
          startContent={<Icon icon="solar:widget-4-bold" className="w-5 h-5" />}
          isDisabled={route === "/"}
        >
          Dashboard
        </Button>
      </div>
      <div className="w-full flex">
        <div
          className={`h-auto w-2 rounded-tr-xl rounded-br-xl transition-all duration-200 ${
            route === "/tutorial" ? "bg-primary-600" : "bg-transparent"
          }`}
        />
        <Button
          color={route === "/tutorial" ? "primary" : "secondary"}
          radius="none"
          variant="light"
          className="font-semibold text-md flex-1 justify-start bg-transparent data-[hover=true]:bg-transparent opacity-100"
          as={Link}
          href="/tutorial"
          startContent={
            <Icon
              icon="solar:lightbulb-minimalistic-bold"
              className="w-5 h-5"
            />
          }
          isDisabled={route === "/tutorial"}
        >
          Tutorial
        </Button>
      </div>
      <div className="w-full flex">
        <div
          className={`h-auto w-2 rounded-tr-xl rounded-br-xl transition-all duration-200 ${
            route === "/about-us" ? "bg-primary-600" : "bg-transparent"
          }`}
        />
        <Button
          color={route === "/about-us" ? "primary" : "secondary"}
          radius="none"
          variant="light"
          className="font-semibold text-md flex-1 justify-start bg-transparent data-[hover=true]:bg-transparent opacity-100"
          as={Link}
          href="/about-us"
          startContent={
            <Icon icon="solar:question-square-bold" className="w-5 h-5" />
          }
          isDisabled={route === "/about-us"}
        >
          About Us
        </Button>
      </div>
    </div>
  );
};

export default SidebarNavigation;
