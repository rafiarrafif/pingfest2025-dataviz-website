"use server";

import { db } from "@/config/db";

export const countTotalEmployees = async () => {
  const row = db.prepare("SELECT COUNT(*) as total FROM employee").get() as {
    total: number;
  };
  return row.total;
};
