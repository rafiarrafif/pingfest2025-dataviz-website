"use server";
import { db } from "@/config/db";

export const countTotalHiredByYear = async () => {
  const rows = db
    .prepare(
      `
        SELECT strftime('%m-%Y', hire_date) as date,
            COUNT(*) as hired
        FROM employee
        GROUP BY strftime('%m-%Y', hire_date)
        ORDER BY hire_date
        `
    )
    .all();

  return rows.map((r: any) => ({
    date: r.date,
    hired: r.hired,
  }));
};
