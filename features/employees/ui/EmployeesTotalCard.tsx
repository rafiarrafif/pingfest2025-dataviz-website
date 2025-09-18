"use client";
import { Card, CardBody } from "@heroui/react";
import React from "react";

const EmployeesTotalCard = () => {
  return (
    <div className="flex-1">
      <Card>
        <CardBody className="items-center">
          <div className="flex items-end">
            <h1 className="text-6xl font-black">199</h1>
            &nbsp;
            <p>Employees</p>
          </div>
        </CardBody>
      </Card>
    </div>
  );
};

export default EmployeesTotalCard;
