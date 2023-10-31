import {
  Box,
  Text,
  Flex,
  Heading,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  SimpleGrid,
  Textarea,
  Button,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";

import { Hero } from "../components/Hero";
import { Container } from "../components/Container";
import { Main } from "../components/Main";
import { DarkModeSwitch } from "../components/DarkModeSwitch";
import { Footer } from "../components/Footer";
import { ConFIELQRCode } from "../components/ConFIELQRCode/ConFIELQRCode";
import { useState } from "react";

const Index = () => {
  const [productName, setProductName] = useState("");
  const [productDescription, setProductDescription] = useState("");
  return (
    <Container height="100vh">
      <Hero />
      <Main>
        <Heading as="h3" fontSize={"2xl"}>
          Generate payment form
        </Heading>
        <Text color="text">
          conFIEL Core SDK is able to generate payment forms that can be used to
          request peer-to-peer transfers through an Escrow.
        </Text>
        <Text color="text" fontSize="sm">
          To generate a form, connect your <b>conFIEL ID</b> wallet to
          automatically fill the “Recipient Address” field.
        </Text>
        <Flex borderWidth="1px" borderRadius="lg" flexDir="column">
          <SimpleGrid columns={[1, 1, 2, 2]} w="100%">
            <Flex p="6" flexDir={"column"} gap="10">
              <FormControl>
                <FormLabel>Product name</FormLabel>
                <InputGroup>
                  <Input type="text" placeholder="Nano Ledger" />
                  <InputRightElement width="4.5rem">
                    <Button
                      fontSize={"xs"}
                      h="1.75rem"
                      size="sm"
                      onClick={() => {}}
                    >
                      Demo
                    </Button>
                  </InputRightElement>
                </InputGroup>
                <FormHelperText>
                  A product name to describe the actual item to transact with a
                  buyer.
                </FormHelperText>
              </FormControl>
              <FormControl>
                <FormLabel>Product description</FormLabel>
                <InputGroup>
                  <Textarea placeholder="Cold wallet to handle crypto..." />
                  <InputRightElement width="4.5rem">
                    <Button
                      fontSize={"xs"}
                      h="1.75rem"
                      size="sm"
                      onClick={() => {}}
                    >
                      Demo
                    </Button>
                  </InputRightElement>
                </InputGroup>
                <FormHelperText>
                  A detailed description of the product, including key features
                  and product benefits.
                </FormHelperText>
              </FormControl>
              <FormControl>
                <FormLabel>Total amount</FormLabel>
                <InputGroup>
                  <Input type="text" placeholder="$99.00" />
                  <InputRightElement width="4.5rem">
                    <Button
                      fontSize={"xs"}
                      h="1.75rem"
                      size="sm"
                      onClick={() => {}}
                    >
                      Demo
                    </Button>
                  </InputRightElement>
                </InputGroup>
                <FormHelperText>
                  Cost of the product and expected transaction value to be paid
                  in exchange of product.
                </FormHelperText>
              </FormControl>
              <Button colorScheme="red">Generate payment order</Button>
            </Flex>
            <Box m="5">
              <ConFIELQRCode payload="https://app.confiel.id" />
            </Box>
          </SimpleGrid>
          <Box m="5">
            <FormControl>
              <FormLabel>Recipient address</FormLabel>
              <Input isDisabled type="text" placeholder="rHb9CJAWyB4..." />
              <FormHelperText>
                The deposit address for your payment will be available here.
              </FormHelperText>
            </FormControl>
          </Box>
        </Flex>
      </Main>

      <DarkModeSwitch />
      <Footer>
        <Text>A Wave 5 XRPL Grant sponsored project.</Text>
      </Footer>
    </Container>
  );
};

export default Index;
