import { Section, Text } from "react-email";



export default function DisclaimerInternal() {

  return (
    <Section>
      <Text className='text-[12px] text-zinc-500 font-mono'>
        Disclaimer: This is an internal message. Do not attempt
        to share or expose any information or attachments in this
        message to a public network. Moreover, if it is confidential
        and intended only for an individual or a single entity, 
        do not expose its content to anyone.
      </Text>
    </Section>
  )
}