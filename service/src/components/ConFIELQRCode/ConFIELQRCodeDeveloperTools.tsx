import { CopyIcon } from "@chakra-ui/icons";
import {
  Flex,
  FormControl,
  FormHelperText,
  Text,
  Input,
  useClipboard,
} from "@chakra-ui/react";
import { useEffect } from "react";

export const ConFIELQRCodeDeveloperTools = ({
  payload,
  setBaseURL,
  baseURL,
}: {
  payload: string,
  baseURL: string,
  setBaseURL: (url: string) => void;
}) => {
  const { onCopy, setValue, hasCopied } = useClipboard(payload);

  useEffect(() => {
    setBaseURL(baseURL);
  }, [baseURL]);

  return (
    <Flex mt="2" flexDir={"column"} gap="5">
      <FormControl>
        <Input
          fontSize={"xs"}
          onChange={(e) => setBaseURL(e.target.value)}
          type="text"
          value={baseURL}
          placeholder="https://app.confiel.id"
        />
        <FormHelperText fontSize={"xs"}>
          The URL to use for conFIEL ID App.
        </FormHelperText>
      </FormControl>
      <Text fontSize={"xs"} onClick={() => onCopy()}>
        <CopyIcon mr="2"/>
        {hasCopied ? `Copied QR Code content` : `Copy QR Code content`}
      </Text>
    </Flex>
  );
};
