"use client";
import { Button, Link } from "@heroui/react";
import { Icon } from "@iconify/react";
import { usePathname } from "next/navigation";
import React from "react";

const SidebarNavigation = () => {
  const route = usePathname();
  return (
    <div className="mt-8 flex flex-col w-full gap-0.5">
      <Button
        color={route === "/" ? "primary" : "secondary"}
        radius="none"
        variant="light"
        className="font-semibold text-md justify-start bg-transparent data-[hover=true]:bg-transparent"
        as={Link}
        href="/"
        startContent={<Icon icon="solar:widget-4-bold" className="w-5 h-5" />}
      >
        Dashboard
      </Button>
      <Button
        color={route === "/tutorial" ? "primary" : "secondary"}
        radius="none"
        variant="light"
        className="font-semibold text-md justify-start bg-transparent data-[hover=true]:bg-transparent"
        as={Link}
        href="/tutorial"
        startContent={
          <Icon icon="solar:lightbulb-minimalistic-bold" className="w-5 h-5" />
        }
      >
        Tutorial
      </Button>
      <Button
        color={route === "/about-us" ? "primary" : "secondary"}
        radius="none"
        variant="light"
        className="font-semibold text-md justify-start bg-transparent data-[hover=true]:bg-transparent"
        as={Link}
        href="/about-us"
        startContent={
          <Icon icon="solar:question-square-bold" className="w-5 h-5" />
        }
      >
        About Us
      </Button>
    </div>
  );
};

export default SidebarNavigation;
