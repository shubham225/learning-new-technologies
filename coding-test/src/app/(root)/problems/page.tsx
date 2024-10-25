import { Card } from "@/components/ui/card";
import React from "react";
import { DataTable } from "@/components/data-tables";
import { columns } from "./columns";
import { Problem } from "@/types";

type Props = {};

const data: Problem[] = [
  {
    id: "728ed52f",
    status: "open",
    title: "Two Sum",
    difficulty: "medium",
    solutionURI: "https://leetcode.com/problemset/"
  },
  {
    id: "728ed53f",
    status: "attempted",
    title: "Search Insert Position",
    difficulty: "easy",
    solutionURI: "https://leetcode.com/problemset/"
  },
  {
    id: "728ed5df",
    status: "solved",
    title: "Four Sum",
    difficulty: "hard",
    solutionURI: "https://leetcode.com/problemset/"
  },
];

const problems = (props: Props) => {
  return (
    <div className="size-full p-2">
      <DataTable columns={columns} data={data} />
    </div>
  );
};

export default problems;
