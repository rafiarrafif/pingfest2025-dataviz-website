"use client";
import { Card, CardBody } from "@heroui/react";
import React, { useEffect } from "react";
import { countTotalDepartments } from "../model/countTotalDepartements";

const DepartmentsTotalCard = () => {
  const [totalDepartments, setTotalDepartments] = React.useState<
    string | number
  >("...");

  useEffect(() => {
    const fetchTotalDepartment = async () => {
      const total = await countTotalDepartments();
      setTotalDepartments(total);
    };
    fetchTotalDepartment();
  }, []);

  return (
    <div className="flex-1">
      <Card>
        <CardBody className="items-center">
          <div className="flex items-end">
            <h1 className="text-6xl font-black">{totalDepartments}</h1>
            &nbsp;
            <p>Departments</p>
          </div>
        </CardBody>
      </Card>
    </div>
  );
};

export default DepartmentsTotalCard;
