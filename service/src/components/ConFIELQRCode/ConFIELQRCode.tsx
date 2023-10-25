import { Box, Flex, Text } from "@chakra-ui/react";
import dynamic from "next/dynamic";

const QRCode = dynamic(() => import("./QRCode").then((mod) => mod.QRCode), {
  ssr: false,
});

export const ConFIELQRCode = ({ payload }: { payload: string }) => {
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
          <QRCode payload={payload} />
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
        <Text mt="3" fontSize={"xs"} fontFamily={'mono'}>
          Verification code: X2SJML
        </Text>
      </Box>
    </Flex>
  );
};
