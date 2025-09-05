"use client";
import { Button, Link } from "@heroui/react";
import React from "react";

const SidebarNavigation = () => {
  return (
    <div className="mt-8 flex flex-col w-full gap-0.5">
      <Button
        color="primary"
        radius="none"
        variant="light"
        className="font-semibold text-md justify-start bg-transparent data-[hover=true]:bg-transparent"
        as={Link}
        href="/"
      >
        Dashboard
      </Button>
      <Button
        color="primary"
        radius="none"
        variant="light"
        className="font-semibold text-md justify-start bg-transparent data-[hover=true]:bg-transparent"
        as={Link}
        href="/tutorial"
      >
        Tutorial
      </Button>
      <Button
        color="primary"
        radius="none"
        variant="light"
        className="font-semibold text-md justify-start bg-transparent data-[hover=true]:bg-transparent"
        as={Link}
        href="/about-us"
      >
        About Us
      </Button>
    </div>
  );
};

export default SidebarNavigation;
