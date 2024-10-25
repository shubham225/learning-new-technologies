import { useParams } from "next/navigation";
import React from "react";
import MarkdownPreview from "@uiw/react-markdown-preview";
import { useTheme } from "next-themes";

type Props = {};

const ProblemDescription = (props: Props) => {
  const param = useParams();
  const source = `
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
    <div className="flex flex-col p-2 px-4 h-full">
      <h1 className="text-lg font-semibold">
        Description of : {param.problemId}
      </h1>
      <MarkdownPreview
        wrapperElement={
          theme === "light"
            ? { "data-color-mode": "light" }
            : { "data-color-mode": "dark" }
        }
        source={source}
        className="pt-4 h-[calc(100vh_-_190px)] overflow-auto"
        style={{ background: "transparent" }}
      />
    </div>
  );
};

export default ProblemDescription;
