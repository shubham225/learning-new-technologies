import React, { useEffect, useState } from "react";
import { Check, Loader2, SquareCheck, X } from "lucide-react";
import { Card } from "../ui/card";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import { toast, ToastContainer } from "react-toastify";

type Props = {};

enum CodeStatus {
  NO_ACTION = 0,
  SUBMITTING = 1,
  SUBMIT_FAILED = 2,
  COMPILING = 3,
  COMPILATION_ERROR = 4,
  RUNNING = 5,
  RUNTIME_ERROR = 6,
  TESTCASE_FAILED = 7,
  SUCCESS = 8,
}

const TestCases = (props: Props) => {
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [execStatus, setExecStatus] = useState<CodeStatus>(
    CodeStatus.NO_ACTION
  );

  const updateStatus = () => {
    setExecStatus((execStatus + 1) % 9);
  };

  useEffect(() => {
    if (execStatus === CodeStatus.SUCCESS)
      toast.success("Congratulations, Solution is Accepted...");
  }, [execStatus]);

  return (
    <div className="flex flex-col h-full space-between">
      <div className="rounded-t-md flex flex-col dark:bg-[#333333] bg-gray-50">
        <div className="flex gap-1 p-1">
          <SquareCheck className="dark:text-teal-400 text-teal-500 p-1" />
          <h1 className="text-l font-semibold">Testcase</h1>
        </div>
      </div>
      <div className="flex-grow overflow-auto">
        <div
          className={cn("p-2 size-full flex flex-col gap-2", {
            hidden: execStatus === CodeStatus.NO_ACTION,
          })}
        >
          {/* Submission  */}
          <div className="flex gap-2">
            {execStatus <= CodeStatus.SUBMITTING && (
              <>
                <Loader2 className="animate-spin text-teal-400" />
                <h1 className="text-sm font-medium">Submitting code...</h1>
              </>
            )}
            {execStatus === CodeStatus.SUBMIT_FAILED && (
              <>
                <X className="text-red-600" />
                <h1 className="text-sm font-medium">Submit Failed</h1>
              </>
            )}
            {execStatus > CodeStatus.SUBMIT_FAILED && (
              <>
                <Check className="text-green-500" />
                <h1 className="text-sm font-medium">Submitted successfully</h1>
              </>
            )}
          </div>

          {/* Compilation  */}
          <div className="flex gap-2">
            {execStatus <= CodeStatus.COMPILING && (
              <>
                <Loader2 className="animate-spin text-teal-400" />
                <h1 className="text-sm font-medium">Compiling...</h1>
              </>
            )}{" "}
            {execStatus === CodeStatus.COMPILATION_ERROR && (
              <>
                <X className="text-red-600" />
                <h1 className="text-sm font-medium">Compilation Error:</h1>
              </>
            )}
            {execStatus > CodeStatus.COMPILATION_ERROR && (
              <>
                <Check className="text-green-500" />
                <h1 className="text-sm font-medium">Compilation Successful</h1>
              </>
            )}
          </div>
          <div
            className={cn("flex gap-2", {
              hidden: execStatus === CodeStatus.COMPILATION_ERROR,
            })}
          >
            {execStatus <= CodeStatus.RUNNING && (
              <>
                <Loader2 className="animate-spin text-teal-400" />
                <h1 className="text-sm font-medium">Validating Testcases...</h1>
              </>
            )}
            {execStatus === CodeStatus.RUNTIME_ERROR && (
              <>
                <X className="text-red-600" />
                <h1 className="text-sm font-medium">Runtime Error:</h1>
              </>
            )}
            {execStatus === CodeStatus.TESTCASE_FAILED && (
              <>
                <X className="text-red-600" />
                <h1 className="text-sm font-medium">Testcases failed:</h1>
              </>
            )}
            {execStatus > CodeStatus.TESTCASE_FAILED && (
              <>
                <Check className="text-green-500" />
                <h1 className="text-sm font-medium">All testcases passed</h1>
              </>
            )}
          </div>
          <Card
            className={cn("p-1 text-xs leading-4 font-mono", {
              hidden:
                execStatus !== CodeStatus.COMPILATION_ERROR &&
                execStatus !== CodeStatus.RUNTIME_ERROR &&
                execStatus !== CodeStatus.TESTCASE_FAILED,
            })}
          >
            Exception in thread "main" java.lang.ArithmeticException: / by zero
            at
            ArithmeticExceptionExample.main(ArithmeticExceptionExample.java:4)
            Exception in thread "main" java.lang.ArithmeticException: / by zero
            at
            ArithmeticExceptionExample.main(ArithmeticExceptionExample.java:4)
            Exception in thread "main" java.lang.ArithmeticException: / by zero
            at
            ArithmeticExceptionExample.main(ArithmeticExceptionExample.java:4)
            Exception in thread "main" java.lang.ArithmeticException: / by zero
            at
            ArithmeticExceptionExample.main(ArithmeticExceptionExample.java:4)
            Exception in thread "main" java.lang.ArithmeticException: / by zero
            at
            ArithmeticExceptionExample.main(ArithmeticExceptionExample.java:4)
            Exception in thread "main" java.lang.ArithmeticException: / by zero
            at
            ArithmeticExceptionExample.main(ArithmeticExceptionExample.java:4)
          </Card>
        </div>
      </div>
      <footer>
        <div className="flex flex-row space-between p-2">
          <div className="flex-grow"></div>
          <div className="flex gap-2">
            <Button variant="secondary">Run</Button>
            <Button variant="default" onClick={updateStatus}>
              Submit
            </Button>
          </div>
        </div>
      </footer>
      <ToastContainer />
    </div>
  );
};

export default TestCases;
