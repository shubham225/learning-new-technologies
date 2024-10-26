export type DifficultyLevel = "easy" | "medium" | "hard";
export type Status = "open" | "attempted" | "failed" | "solved";
export type ResultStatus = "Accepted" | "Wrong Answer" | "Time Limit Exceed";

export type Problem = {
  id: string;
  status: Status;
  title: string;
  difficulty: DifficultyLevel;
  solutionURI: string;
};

export type supportedLanguage = "java" | "javascript";

export type Result = {
  id: string;
  time: Date;
  status: ResultStatus;
  language: string;
  runtime: string;
  memory: string;
};
