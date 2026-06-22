
import { PropsWithChildren } from 'react';
import { 
  Html, 
  Head,
  Body, 
  Tailwind,
  Text,
  Hr,
  Section,
  Heading,
} from 'react-email'
import DisclaimerInternal from '~/emails/_components/en/disclaimer';
import { getT } from '~/locales';

type OneTimePasswordProps = {
  fullName: string
  email: string
  code: number
}

export default function OneTimePassword(
  props: OneTimePasswordProps
) {
 
  return (
    <Tailwind>
      <Html>
      <Head>
        
      </Head>
      <Body>
        <Section className='max-w-112.5 mx-auto bg-white p-4'>
          <Section>

          </Section>
          <Section>
            <Heading>Verification Code</Heading>
            <Text>
              Dear {props.fullName ?? '{ fullName }'},
            </Text>
            <Text>
              We're sending you this one-time password verification code to 
              confirm if it's really you accessing the RBPICore.
            </Text>
            <Text className='text-center text-[24px] font-mono'>
              { props.code ?? '000000' }
            </Text>
            <Text>
              Thank you,<br />
              Rural Bank of Pilar (Sor.), Inc.
            </Text>
            <DisclaimerInternal />
          </Section>
        </Section>
      </Body>
      </Html>
    </Tailwind>
  )
}