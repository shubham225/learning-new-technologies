import { Problem, ProblemSummery, Submission } from "@/types";
import apiClient from "./apiClient";
import { SubmitResponse } from "@/types/api";
import {
  dummyProblemSubmissions,
  dummyProblemSummery,
  initProblemDetails,
} from "@/constants/data";

export async function fetchProblemsById(problemId: string): Promise<Problem> {
  try {
    // const response = await apiClient.get<Problem>(`/problems/${problemId}`);
    const response: { data: Problem } = {
      data: initProblemDetails,
    };
    return response.data;
  } catch (error) {
    console.error("Failed to fetch problem data:", error);
    throw error;
  }
}

export async function fetchAllProblems(): Promise<ProblemSummery[]> {
  try {
    // const response = await apiClient.get<ProblemSummery[]>('/problems');
    const response: { data: ProblemSummery[] } = {
      data: dummyProblemSummery,
    };

    return response.data;
  } catch (error) {
    console.error("Failed to fetch all problems:", error);
    throw error;
  }
}

export async function fetchAllSubmissions(
  problemId: string
): Promise<Submission[]> {
  try {
    // const response = await apiClient.get<Submission[]>(`/submissions/${problemId}`);
    const response: { data: Submission[] } = {
      data: dummyProblemSubmissions,
    };

    return response.data;
  } catch (error) {
    console.error("Failed to fetch all problems:", error);
    throw error;
  }
}

// Test Case Submission
export async function submitAndCompileCode(
  problemId: string
): Promise<SubmitResponse> {
  try {
    // const response = await apiClient.post<SubmitResponse>(`/submissions/compile/${problemId}`);
    const response: { data: SubmitResponse } = {
      data: {
        submission: null,
        status: "COMPILATION_SUCCESS",
        message: `Exception in thread "main" java.lang.ArithmeticException: / by zero
            at
            ArithmeticExceptionExample.main(ArithmeticExceptionExample.java:4)`,
      },
    };

    return response.data;
  } catch (error) {
    console.error("Failed to fetch all problems:", error);
    throw error;
  }
}

export async function submitAndExecuteCode(
  problemId: string
): Promise<SubmitResponse> {
  try {
    // const response = await apiClient.post<SubmitResponse>(`/submissions/exec/${problemId}`);
    const response: { data: SubmitResponse } = {
      data: {
        submission: null,
        status: "TESTCASE_FAILED",
        message: `Exception in thread "main" java.lang.ArithmeticException: / by zero
            at
            ArithmeticExceptionExample.main(ArithmeticExceptionExample.java:4)`,
      },
    };

    return response.data;
  } catch (error) {
    console.error("Failed to fetch all problems:", error);
    throw error;
  }
}
