"use server";

import { db } from "@/config/db";

export const countTotalSalaries = async () => {
  const row = db.prepare("SELECT SUM(amount) as total FROM salary").get() as {
    total: number;
  };
  return row.total ?? 0;
};
