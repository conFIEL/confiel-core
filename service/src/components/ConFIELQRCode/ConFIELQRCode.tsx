import { Box, Flex, Text } from "@chakra-ui/react";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { CONFIEL_ID_BASE_URI } from "../../constants/conFIEL";
import { SettingsIcon } from "@chakra-ui/icons";
import { ConFIELQRCodeDeveloperTools } from "./ConFIELQRCodeDeveloperTools";

const QRCode = dynamic(() => import("./QRCode").then((mod) => mod.QRCode), {
  ssr: false,
});

export const ConFIELQRCode = ({
  baseURL,
  setBaseURL,
  payload,
}: {
  setBaseURL: (baseUrl: string) => void;
  baseURL: string;
  payload: string;
}) => {
  const [enableDeveloperTools, setEnableDeveloperTools] = useState(false);
  const [actualPayload, setActualPayload] = useState(payload);

  useEffect(() => {
    setActualPayload(payload);
  }, [payload]);

  return (
    <Flex flexDir={"column"} gap="5" align={"center"}>
      <Box w="336px">
        <Box
          borderWidth="10px"
          borderRadius="lg"
          borderColor={"rgb(229,104,105)"}
          bgColor={"#fff"}
          textAlign={"center"}
          p="2"
          justifyContent={"center"}
        >
          <QRCode payload={actualPayload} />
        </Box>
      </Box>
      <Box textAlign={"center"}>
        <Text as="h3" fontSize={"xl"} fontWeight={"700"}>
          conFIEL Code
        </Text>
        <Text>
          Open <b>conFIEL ID</b> with your credentials loaded and scan this QR
          code.
        </Text>
        <Text mt="3" fontSize={"xs"} fontFamily={"mono"}>
          Verification code: X2SJML
        </Text>
      </Box>
      <Box mt="10" w="100%" textAlign={"right"}>
        <Text
          onClick={() => setEnableDeveloperTools(!enableDeveloperTools)}
          fontFamily={"mono"}
          cursor={"pointer"}
          fontSize={"xs"}
        >
          <SettingsIcon /> {!enableDeveloperTools ? `Display` : `Hide`}{" "}
          developer tools.
        </Text>
        {enableDeveloperTools && (
          <ConFIELQRCodeDeveloperTools
            payload={actualPayload}
            baseURL={baseURL}
            setBaseURL={setBaseURL}
          />
        )}
      </Box>
    </Flex>
  );
};
