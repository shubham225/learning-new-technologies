import { useParams } from "next/navigation";
import React from "react";
import MarkdownPreview from "@uiw/react-markdown-preview";
import { useTheme } from "next-themes";
import { Badge } from "../ui/badge";
import { CircleCheckBig, Clock } from "lucide-react";
import { cn } from "@/lib/utils";
import { Problem } from "@/types";

type Props = {problem: Problem};

const ProblemDescription = (props: Props) => {
  const param = useParams();
  let problem = {
    id: param.problemId,
    source: "",
    dificulty: "Easy",
    status: "Pending",
  };

  problem.source = `
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
You may assume that each input would have exactly one solution, and you may not use the same element twice.
You can return the answer in any order.

#### Example 1:
> **Input:** nums = [2,7,11,15], target = 9
>
> **Output:** [0,1]
>
> **Explanation:** Because nums[0] + nums[1] == 9, we return [0, 1].

#### Example 2:
> **Input:** nums = [3,2,4], target = 6
>
> **Output:** [1,2]

#### Constraints:
 + \`2 <= nums.length <= 104\`
 + \`-109 <= nums[i] <= 109\`
 + \`-109 <= target <= 109\`
`;

  const { theme } = useTheme();

  return (
    <div className="p-2 px-4 h-full">
      <div className="flex flex-col h-full overflow-auto">
        <h1 className="text-lg font-semibold">Description of : {problem.id}</h1>
        <div className="flex gap-2 py-2">
          <Badge
            variant="secondary"
            className={cn("font-normal", {
              "text-teal-400": problem.dificulty === "Easy",
              "text-orange-400": problem.dificulty === "Medium",
              "text-red-500": problem.dificulty === "Hard",
            })}
          >
            {problem.dificulty}
          </Badge>
          <Badge
            variant="secondary"
            className={cn("font-normal", {
              "text-teal-400": problem.status === "Solved",
              "text-orange-400": problem.status === "Pending",
            })}
          >
            {problem.status === "Solved" && <CircleCheckBig className="p-1" />}
            {problem.status === "Pending" && <Clock className="p-1" />}
            {problem.status}
          </Badge>
        </div>
        <MarkdownPreview
          wrapperElement={
            theme === "light"
              ? { "data-color-mode": "light" }
              : { "data-color-mode": "dark" }
          }
          source={problem.source}
          className="h-[calc(100vh_-_250px)]"
          style={{ background: "transparent" }}
        />
      </div>
    </div>
  );
};

export default ProblemDescription;
