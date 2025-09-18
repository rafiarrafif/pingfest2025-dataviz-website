"use client";
import { Card, CardBody } from "@heroui/react";
import React from "react";

const EmployeSalariesTotalCard = () => {
  return (
    <div className="flex-1">
      <Card>
        <CardBody className="items-center">
          <div className="flex items-end">
            <h1 className="text-6xl font-black">199$</h1>
            &nbsp;
            <p>Total Salary</p>
          </div>
        </CardBody>
      </Card>
    </div>
  );
};

export default EmployeSalariesTotalCard;
