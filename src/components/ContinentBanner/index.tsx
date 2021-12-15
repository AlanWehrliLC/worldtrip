import { Flex, Heading } from '@chakra-ui/react'

interface ContinentBannerProps {
  banner: string
  text: string
}

export function ContinentBanner({ banner, text }: ContinentBannerProps) {
  return (
    <Flex
      w="100%"
      h={['150px', '300px', '500px']}
      px={['0', '0', '36']}
      pt={['0', '0', '72']}
      bgImage={`url(/${banner}.png)`}
      bgPosition="center"
      bgRepeat="no-repeat"
      bgSize="cover"
      align="center"
      justify={['center', 'center', 'flex-start']}
    >
      <Heading
        textAlign={['center', 'left']}
        fontSize={['1.75rem', '5xl']}
        color="gray.100"
        fontWeight="500"
      >
        {text}
      </Heading>
    </Flex>
  )
}
