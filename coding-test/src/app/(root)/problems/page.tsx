import { Card } from "@/components/ui/card";
import React from "react";
import { DataTable } from "@/components/data-tables";
import { columns } from "./columns";
import { Problem } from "@/types";

type Props = {};

const data: Problem[] = [
  {
    id: "two-sum",
    status: "open",
    title: "Two Sum",
    difficulty: "medium",
    solutionURI: "https://leetcode.com/problemset/",
  },
  {
    id: "search-insert-position",
    status: "attempted",
    title: "Search Insert Position",
    difficulty: "easy",
    solutionURI: "https://leetcode.com/problemset/",
  },
  {
    id: "four-sum",
    status: "solved",
    title: "Four Sum",
    difficulty: "hard",
    solutionURI: "https://leetcode.com/problemset/",
  },
];

const problems = (props: Props) => {
  return (
    <main className="size-full p-2">
      <DataTable columns={columns} data={data} />
    </main>
  );
};

export default problems;
