import { useColorMode } from "@chakra-ui/react";
import SyntaxHighlighter from "react-syntax-highlighter";
import {
    stackoverflowDark,
    stackoverflowLight,
} from "react-syntax-highlighter/dist/cjs/styles/hljs";

export const CodeBlock = ({ codeString }: { codeString: string }) => {
  const { colorMode } = useColorMode();

  return (
    <SyntaxHighlighter
      language="typescript"
      style={colorMode === "dark" ? stackoverflowDark : stackoverflowLight}
    >
      {codeString}
    </SyntaxHighlighter>
  );
};
