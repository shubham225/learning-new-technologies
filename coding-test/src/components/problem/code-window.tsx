import React from "react";

import { java } from "@codemirror/lang-java";
import { vscodeDark, vscodeLight } from "@uiw/codemirror-theme-vscode";
import CodeMirror, { ViewUpdate } from "@uiw/react-codemirror";
import { useTheme } from "next-themes";
import { Braces, IterationCw } from "lucide-react";
import { Separator } from "../ui/separator";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { supportedLanguage } from "@/types";
import { Button } from "../ui/button";

type Props = {};

const CodeWindow = (props: Props) => {
  const initialCode = {
    java: `class Solution {
    public int[] twoSum(int[] nums, int target) {
        // Write your code here
    }
}`,
    javascript: `console.log('Hello World!!!')`,
  };

  const { theme } = useTheme();
  const [selectedLang, setSelectedlang] =
    React.useState<supportedLanguage>("java");
  const [code, setCode] = React.useState(initialCode[selectedLang]);

  const resetEditor = React.useCallback(() => {
    setCode(initialCode[selectedLang]);
  }, [selectedLang]);

  const onCodeChange = React.useCallback(
    (value: string, viewUpdate: ViewUpdate) => {
      setCode(value);
    },
    []
  );

  const onLangChange = React.useCallback((val: supportedLanguage) => {
    setSelectedlang(val);
    setCode(initialCode[val]);
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
        <Select
          defaultValue={selectedLang}
          value={selectedLang}
          onValueChange={onLangChange}
        >
          <SelectTrigger className="w-auto gap-2 h-8 border-none focus:ring-transparent dark:bg-[#1e1e1e]">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="java">Java</SelectItem>
              <SelectItem value="javascript">Javascript</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
        <Button variant="ghost" size="icon" onClick={resetEditor}>
          <IterationCw />
        </Button>
      </div>
      <Separator />
      <div className="overflow-auto h-full max-h-fit">
        <CodeMirror
          value={code}
          extensions={[java()]}
          onChange={onCodeChange}
          theme={theme === "light" ? vscodeLight : vscodeDark}
        />
      </div>
    </div>
  );
};

export default CodeWindow;
