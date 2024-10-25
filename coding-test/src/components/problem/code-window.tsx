import React from "react";

import { javascript } from "@codemirror/lang-javascript";
import { vscodeDark, vscodeLight } from "@uiw/codemirror-theme-vscode";
import CodeMirror from "@uiw/react-codemirror";
import { useTheme } from "next-themes";
type Props = {};

const CodeWindow = (props: Props) => {
  const { theme } = useTheme();
  const [value, setValue] = React.useState(`class Solution {
    public int[] twoSum(int[] nums, int target) {
        // Write your code here
    }
}`);
  const onChange = React.useCallback((val: any, viewUpdate: any) => {
    console.log("val:", val);
    setValue(val);
  }, []);

  return (
    <div>
      <CodeMirror
        value={value}
        extensions={[javascript({ jsx: true })]}
        onChange={onChange}
        theme={theme === "light" ? vscodeLight : vscodeDark}
      />
    </div>
  );
};

export default CodeWindow;
