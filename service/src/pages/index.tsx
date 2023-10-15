import {
  Link as ChakraLink,
  Text,
  Code,
  List,
  ListIcon,
  ListItem,
} from '@chakra-ui/react'
import { CheckCircleIcon, LinkIcon } from '@chakra-ui/icons'

import { Hero } from '../components/Hero'
import { Container } from '../components/Container'
import { Main } from '../components/Main'
import { DarkModeSwitch } from '../components/DarkModeSwitch'
import { CTA } from '../components/CTA'
import { Footer } from '../components/Footer'
import Image from 'next/image'
import { CoreWorkflow } from '../components/CoreWorkflow'

const Index = () => (
  <Container height="100vh">
    <Hero />
    <Main>
      <Text color="text">
        conFIEL core is an SDK used to generate KYC-ready peer-to-peer escrow-based payments using the XRP Ledger network.
        By leveraging <Code>escrowCreate</Code>, a payment can have a custom condition to ensure payment
        for an item is only released after the payment has been made or the expiration time has passed, given
        enough time for resolution in case of payment disputes.
      </Text>

      <Image src="/images/conFIEL-core.png" width={2160} height={1620} alt='conFIEL core diagram'/>
      <Text color="text">
        KYC-ready payments require a wallet derived from a <Code>.cer</Code> stamped RSA 2048 keys.
      </Text>
      <CoreWorkflow />
    </Main>

    <DarkModeSwitch />
    <Footer>
      <Text>Next ❤️ Chakra</Text>
    </Footer>
    <CTA />
  </Container>
)

export default Index
