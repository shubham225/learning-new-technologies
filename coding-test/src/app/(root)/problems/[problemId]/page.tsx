"use client";

import CodeWindow from "@/components/problem/code-window";
import ProblemDescription from "@/components/problem/problem-description";
import TestCases from "@/components/problem/test-cases";
import { useTheme } from "next-themes";
import { useParams } from "next/navigation";
import React from "react";
import Split from "react-split";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

type Props = {};

const Problem = (props: Props) => {
  return (
    <>
      <Split
        className="split size-full"
        sizes={[50, 50]}
        direction="horizontal"
        cursor="col-resize"
      >
        <div className="flex flex-col gap-2 p-2 size-full rounded-md">
          <ProblemDescription />
        </div>
        <div className="size-full flex flex-col">
          <Split className="size-full py-2" sizes={[65, 35]} direction="vertical">
            <div className="flex flex-col gap-2 size-full rounded-md overflow-auto">
              <CodeWindow />
            </div>
            <div className="flex flex-col m-2  gap-2 size-full rounded-md">
              <TestCases />
            </div>
          </Split>
        </div>
      </Split>
      <ToastContainer />
    </>
  );
};

export default Problem;
