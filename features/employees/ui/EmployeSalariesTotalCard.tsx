"use client";
import { Card, CardBody } from "@heroui/react";
import React, { useEffect } from "react";
import { countTotalSalaries } from "../model/countTotalEmployeSalaries";
import { formatShortNumber } from "@/shared/helpers/formatShortNumber";

const EmployeSalariesTotalCard = () => {
  const [totalSalaries, setTotalSalaries] = React.useState<string | number>(
    "..."
  );

  useEffect(() => {
    const fetchTotalSalaries = async () => {
      const total = await countTotalSalaries();
      setTotalSalaries(formatShortNumber(total));
    };
    fetchTotalSalaries();
  }, []);

  return (
    <div className="flex-1">
      <Card>
        <CardBody className="items-center">
          <div className="flex items-end">
            <h1 className="text-6xl font-black">{totalSalaries}</h1>
            &nbsp;
            <p>Total Salary</p>
          </div>
        </CardBody>
      </Card>
    </div>
  );
};

export default EmployeSalariesTotalCard;
