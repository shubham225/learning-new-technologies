import React from "react";
import { Separator } from "../ui/separator";
import { SquareCheck } from "lucide-react";

type Props = {};

const TestCases = (props: Props) => {
  return (
    <div className="flex flex-col gap-1 h-full">
      <div className="rounded-t-md flex flex-col dark:bg-[#333333] bg-gray-50">
        <div className="flex gap-1 p-1">
          <SquareCheck className="dark:text-teal-400 text-teal-500 p-1" />
          <h1 className="text-l font-semibold">Testcase</h1>
        </div>
      </div>
    </div>
  );
};

export default TestCases;
