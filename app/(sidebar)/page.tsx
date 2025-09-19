import TotalEmployeStatisticByYear from "@/features/employees/ui/TotalEmployeStatisticByYear";
import HighlightOverview from "@/widgets/overview/HighlightOverview";
import React from "react";

const page = () => {
  return (
    <div>
      <HighlightOverview />
      <TotalEmployeStatisticByYear />
    </div>
  );
};

export default page;
