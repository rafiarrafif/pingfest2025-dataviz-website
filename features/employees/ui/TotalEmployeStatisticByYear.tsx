"use client";
import dynamic from "next/dynamic";
import React, { useEffect, useState } from "react";
import { countTotalHiredByYear } from "../model/countTotalHiredByYear";

const TotalEmployeStatisticByYear = () => {
  const [statData, setStatData] = useState<
    | {
        date: string;
        hired: number;
      }[]
    | null
  >();

  useEffect(() => {
    const fecthStatData = async () => {
      const callback = await countTotalHiredByYear();
      setStatData(callback);
    };
    fecthStatData();
  }, []);

  return (
    <div className="w-full h-[52vh] my-6">
      <h1>{JSON.stringify(statData)}</h1>
    </div>
  );
};

export default TotalEmployeStatisticByYear;
