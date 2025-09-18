"use server";

import { db } from "@/config/db";

export const countTotalDepartments = async () => {
  const row = db.prepare("SELECT COUNT(*) as total FROM department").get() as {
    total: number;
  };
  return row.total;
};
