import {
  Box,
  Code,
  useSteps,
  Stepper,
  Step,
  StepIndicator,
  StepStatus,
  StepIcon,
  StepNumber,
  StepTitle,
  StepDescription,
  StepSeparator,
  Text,
} from "@chakra-ui/react";

export const CoreWorkflow = () => {
  const steps = [
    {
      title: "Purchase order created",
      description: (
        <Text>
          The <Code>seller</Code> uses the SDK method <Code>order.create</Code>{" "}
          with the following details: <Code>amount</Code>,{" "}
          <Code>recipient</Code> (address), <Code>description</Code>,
          <Code>public key</Code>. This information is signed with the{" "}
          <Code>seller</Code>’s <b>conFIEL wallet</b> to generate a JSON Web
          Token (<Code>JWT</Code>) with a QR Code able to be scanned as a
          payment order.
        </Text>
      ),
    },
    {
      title: "Purchase order scanned",
      description: (
        <Text>
          The <Code>buyer</Code> scans an order QR, where they can see the
          information for the purchase order. If they accept to acquire the
          item, their <b>conFIEL wallet</b> signs the transaction, and generates
          the barebones of a <Code>escrowCreate</Code> transaction, alongside a
          time-locked encrypted <Code>Fulfillment</Code>, included as{" "}
          <Code>MemoData</Code>.
        </Text>
      ),
    },
    {
      title: "Escrow Transaction submitted",
      description: (
        <Text>
          The <Code>buyer</Code> submits the signed <Code>escrowCreate</Code>
          transaction, which can be indexed by the <Code>seller</Code>’s wallet.
          Once indexed, the <Code>seller</Code> sees the details of the
          transaction and decides to release the item the<Code>buyer</Code>{" "}
          bought.
        </Text>
      ),
    },
    {
      title: "Escrow Transaction released",
      description: (
        <Text>
          Once the <Code>seller</Code> has released the item, the{" "}
          <Code>buyer</Code>
          can release the escrow by submitting the <Code>Fulfillment</Code>{" "}
          transaction. Alternatively, once the time lock has expired, the{" "}
          <Code>buyer</Code> can release the escrow themselves within their own{" "}
          <b>conFIEL wallet</b>.
        </Text>
      ),
    },
  ];
  const { activeStep } = useSteps({
    index: 0,
    count: steps.length,
  });

  return (
    <Stepper
      colorScheme="green"
      index={activeStep}
      orientation="vertical"
      height="400px"
      gap="0"
    >
      {steps.map((step, index) => (
        <Step key={index}>
          <StepIndicator>
            <StepStatus
              complete={<StepIcon />}
              incomplete={<StepNumber />}
              active={<StepNumber />}
            />
          </StepIndicator>

          <Box>
            <StepTitle>{step.title}</StepTitle>
            <StepDescription>{step.description}</StepDescription>
          </Box>

          <StepSeparator />
        </Step>
      ))}
    </Stepper>
  );
};
