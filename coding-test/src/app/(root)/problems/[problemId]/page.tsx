"use client";

import CodeWindow from "@/components/problem/code-window";
import ProblemInfo from "@/components/problem/problem-info";
import TestCases from "@/components/problem/test-cases";
import { Card } from "@/components/ui/card";
import React from "react";
import Split from "react-split";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

type Props = {};

const Problem = (props: Props) => {
  return (
    <>
      <Split
        className="flex size-full"
        sizes={[50, 50]}
        direction="horizontal"
        cursor="col-resize"
      >
        <div className="border size-full rounded-md">
          <ProblemInfo />
        </div>
        <div className="size-full flex flex-col">
          <Split className="size-full" sizes={[65, 35]} direction="vertical">
            <Card className="flex flex-col border gap-2 size-full rounded-md">
              <CodeWindow />
            </Card>
            <div className="flex flex-col border gap-2 size-full rounded-md">
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
