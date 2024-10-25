export type DifficultyLevel = "easy" | "medium" | "hard";
export type Status = "open" | "attempted" | "failed" | "solved";

export type Problem = {
  id: string;
  status: Status;
  title: string;
  difficulty: DifficultyLevel;
  solutionURI: string;
};
