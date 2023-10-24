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
} from "@chakra-ui/react";

import { Hero } from "../components/Hero";
import { Container } from "../components/Container";
import { Main } from "../components/Main";
import { DarkModeSwitch } from "../components/DarkModeSwitch";
import { Footer } from "../components/Footer";

const Index = () => (
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
        automatically fill the “Recipient” fields.
      </Text>
      <Flex borderWidth="1px" borderRadius="lg">
        <SimpleGrid columns={[1,1,2,2]} w="100%">
          <Flex p="6" flexDir={"column"} gap="10">
            <FormControl>
              <FormLabel>Payment name</FormLabel>
              <Input type="text" placeholder="Nano Ledger" />
              <FormHelperText>
                A product name to describe the actual item to transact.
              </FormHelperText>
            </FormControl>
            <FormControl>
              <FormLabel>Payment order number</FormLabel>
              <Input type="text" placeholder="182766-21" />
              <FormHelperText>
                A unique number used to identify the payment for your own
                records.
              </FormHelperText>
            </FormControl>
            <FormControl>
              <FormLabel>Recipient address</FormLabel>
              <Input isDisabled type="text" placeholder="rHb9CJAWyB4..." />
              <FormHelperText>
                The deposit address for your payment will be available here.
              </FormHelperText>
            </FormControl>
          </Flex>
          <Box w="320px" bg="#aaa" m="5" h="480px" />
        </SimpleGrid>
      </Flex>
    </Main>

    <DarkModeSwitch />
    <Footer>
      <Text>A Wave 5 XRPL Grant sponsored project.</Text>
    </Footer>
  </Container>
);

export default Index;
