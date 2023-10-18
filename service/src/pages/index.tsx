import {
  Text,
  Code,
  List,
  ListItem,
  ListIcon,
  OrderedList,
} from "@chakra-ui/react";
import { CheckCircleIcon, InfoIcon, WarningIcon } from "@chakra-ui/icons";

import { Hero } from "../components/Hero";
import { Container } from "../components/Container";
import { Main } from "../components/Main";
import { DarkModeSwitch } from "../components/DarkModeSwitch";
import { Footer } from "../components/Footer";
import Image from "next/image";
import { CoreWorkflow } from "../components/CoreWorkflow";
import { CodeBlock } from "../components/CodeBlock";
import { MEMO_TAG_GENERATION, SEED_GENERATION_CODE } from "../constants";

const Index = () => (
  <Container height="100vh">
    <Hero />
    <Main>
      <Text color="text">
        With the <Code>MemoData</Code> generated, we can now generate the actual
        <Code>escrowCreate</Code> transaction. The escrow will be a{" "}
        <Code>Timed conditional with expiration</Code>, which means that:
      </Text>
      <List spacing={3}>
        <ListItem>
          <Text color="text">
            <ListIcon as={CheckCircleIcon} color="green.500" />
            The <Code>buyer</Code> can release the payment after 1-15 days.
          </Text>
        </ListItem>
        <ListItem>
          <Text color="text">
            <ListIcon as={InfoIcon} color="yellow.500" />
            The <Code>seller</Code> can submit a claim after an unreleased
            payment from 15-30 days.
          </Text>
        </ListItem>
        <ListItem>
          <Text color="text">
            <ListIcon as={WarningIcon} color="red.500" />
            The <Code>buyer</Code> can cancel the payment from 30 days onwards.
          </Text>
        </ListItem>
      </List>
      <Text color={"text"}>
        To ensure these times are respected, the <Code>escrowCreate</Code> uses
        a <Code>Condition</Code> field which relies on a{" "}
        <Code>Fulfillment</Code>
        unknown to the <Code>buyer</Code>. The <Code>Fulfillment</Code> is
        stored in two formats:
      </Text>
      <OrderedList spacing={3}>
        <ListItem color="text">
          Accessible to the <Code>seller</Code> time-locked for 30 days, and
          encrypted with its public key.
        </ListItem>
        <ListItem color="text">
          Accessible to the <Code>buyer</Code> encrypted with its public key.
        </ListItem>
      </OrderedList>
      <Text color="text">
        The following workflow explains these different stages.
      </Text>
      <CoreWorkflow />
    </Main>

    <DarkModeSwitch />
    <Footer>
      <Text>A Wave 5 XRPL Grant sponsored project.</Text>
    </Footer>
  </Container>
);

export default Index;
