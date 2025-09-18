"use client";
import DepartmentsTotalCard from "@/features/departments/ui/DepartmentsTotalCard";
import EmployeesTotalCard from "@/features/employees/ui/EmployeesTotalCard";
import EmployeSalariesTotalCard from "@/features/employees/ui/EmployeSalariesTotalCard";
import React from "react";

const HighlightOverview = () => {
  return (
    <div className="flex gap-2">
      <EmployeesTotalCard />
      <DepartmentsTotalCard />
      <EmployeSalariesTotalCard />
    </div>
  );
};

export default HighlightOverview;
