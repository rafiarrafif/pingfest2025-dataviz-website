"use client";
import { Card, CardBody } from "@heroui/react";
import React, { useEffect } from "react";
import { countTotalEmployees } from "../model/countTotalEmployees";
import { formatNumberWithComma } from "@/shared/helpers/formatNumberWithComma";

const EmployeesTotalCard = () => {
  const [totalEmployees, setTotalEmployees] = React.useState<string | number>(
    "..."
  );

  useEffect(() => {
    const fetchTotalEmployees = async () => {
      const total = await countTotalEmployees();
      setTotalEmployees(formatNumberWithComma(total));
    };
    fetchTotalEmployees();
  }, []);

  return (
    <div className="flex-1">
      <Card>
        <CardBody className="items-center">
          <div className="flex items-end">
            <h1 className="text-6xl font-black">{totalEmployees}</h1>
            &nbsp;
            <p>Employees</p>
          </div>
        </CardBody>
      </Card>
    </div>
  );
};

export default EmployeesTotalCard;
