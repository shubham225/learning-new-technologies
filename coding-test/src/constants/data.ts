import { Code, CodeLangDetails, Problem, ProblemSummery, Submission, TestExecution, User } from "@/types";

export const initProblemDetails: Problem = {
  id: "344utvyb-4rhbhfj",
  urlCode: "two-sum",
  status: "open",
  title: "Two Sum",
  difficulty: "medium",
  codeSnippets: [ 
    {
      id: "dummyID",
      language: "java",
      code: `class Solution {
    public int[] twoSum(int[] nums, int target) {
        // Write your code here
    }
}`,
    },
    {
      id: "dummyID2",
      language: "javascript",
      code: `console.log('Hello World!!!')`,
    },
  ],
  languages: ["java", "javascript"],
};

export const initCodeDetails: Code[] = [
  {
    id: "dummyID",
    language: "java",
    code: `class Solution {
    public int[] twoSum(int[] nums, int target) {
        user has typed this
    }
}`,
  },
];

export const initSubmissionDetails: Submission[] = [
  {
    id: "dummySub",
    userProblemId: "dummy",
    date: new Date("2022-03-04"),
    status: "accepted",
    language: "java",
    runtime: 12345,
    memory: 23456,
  },
];

export const initUserDetails: User = {
  id: "tempId",
  name: "Guest",
  deafultlang: "java",
};

export const initCodeLangDetails: CodeLangDetails = {
  selLanguage: "java",
  codes: initCodeDetails,
};

export const initTestExecution: TestExecution = {
  status: "NO_ACTION",
  message: ""
}

export const dummyProblemSummery: ProblemSummery[] = [
  {
    id: "344utvyb-4rhbhfj",
    urlCode: "two-sum",
    status: "open",
    title: "Two Sum",
    difficulty: "medium",
  },
  {
    id: "344utvyb-4rhbhfj",
    urlCode: "search-insert-position",
    status: "pending",
    title: "Search Insert Position",
    difficulty: "easy",
  },
  {
    id: "344utvyb-4rhbhfj",
    urlCode: "four-sum",
    status: "solved",
    title: "Four Sum",
    difficulty: "hard",
  },
];
