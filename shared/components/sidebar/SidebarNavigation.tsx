"use client";
import { Button, Link } from "@heroui/react";
import { Icon } from "@iconify/react";
import { usePathname } from "next/navigation";
import React from "react";

const SidebarNavigation = () => {
  const route = usePathname();
  const links = [
    {
      name: "Overview",
      url: "/",
      icon: "solar:widget-4-bold",
    },
    {
      name: "Employees",
      url: "/employees",
      icon: "solar:users-group-rounded-bold",
    },
    {
      name: "Departments",
      url: "/departments",
      icon: "solar:buildings-bold",
    },
    {
      name: "Performance",
      url: "/performance",
      icon: "solar:course-up-linear",
    },
    {
      name: "Managers",
      url: "/managers",
      icon: "solar:shield-star-bold",
    },
    {
      name: "Reports",
      url: "/reports",
      icon: "solar:book-bookmark-bold",
    },
  ];
  return (
    <div className="mt-8 flex flex-col w-full gap-0.5">
      {links.map((item, index) => {
        return (
          <div className="w-full flex" key={index}>
            <div
              className={`h-auto w-2 rounded-tr-xl rounded-br-xl transition-all duration-200 ${
                route === item.url ? "bg-primary-600" : "bg-transparent"
              }`}
            />
            <Button
              color={route === item.url ? "primary" : "secondary"}
              radius="none"
              variant="light"
              className="font-semibold text-md flex-1 justify-start bg-transparent data-[hover=true]:bg-transparent opacity-100"
              as={Link}
              href={item.url}
              startContent={<Icon icon={item.icon} className="w-5 h-5" />}
              isDisabled={route === item.url}
            >
              {item.name}
            </Button>
          </div>
        );
      })}
    </div>
  );
};

export default SidebarNavigation;
