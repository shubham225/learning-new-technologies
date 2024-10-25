import React from "react";

import { javascript } from "@codemirror/lang-javascript";
import { vscodeDark, vscodeLight } from "@uiw/codemirror-theme-vscode";
import CodeMirror from "@uiw/react-codemirror";
import { useTheme } from "next-themes";
import { Braces, Code, IterationCw, Undo, Undo2 } from "lucide-react";
import { Separator } from "../ui/separator";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { supportedLanguage } from "@/types";

type Props = {};

const CodeWindow = (props: Props) => {
  const { theme } = useTheme();
  const [value, setValue] = React.useState(`class Solution {
    public int[] twoSum(int[] nums, int target) {
        // Write your code here
    }
}`);

  const [selectedLang, setSelectedlang] =
    React.useState<supportedLanguage>("java");
  const onChange = React.useCallback((val: any, viewUpdate: any) => {
    console.log("val:", val);
    setValue(val);
  }, []);

  return (
    <div className="flex flex-col gap-1 h-full">
      <div className="rounded-t-md flex flex-col dark:bg-[#333333] bg-gray-50">
        <div className="flex gap-1 p-1">
          <Braces className="dark:text-teal-400 text-teal-500 p-1" />
          <h1 className="text-l font-semibold">Code</h1>
        </div>
      </div>
      <div className="flex flex-row justify-between p-0 px-2">
        <Select defaultValue={selectedLang} >
          <SelectTrigger className="w-[120px] h-8 bg-transparent border-none">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="java">Java</SelectItem>
              <SelectItem value="javascript">Javascript</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
        <IterationCw className="p-1" />
      </div>
      <Separator />
      <div className="overflow-auto h-full max-h-fit">
        <CodeMirror
          value={value}
          extensions={[javascript({ jsx: true })]}
          onChange={onChange}
          theme={theme === "light" ? vscodeLight : vscodeDark}
        />
      </div>
    </div>
  );
};

export default CodeWindow;
