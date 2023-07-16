import { Box, Heading, HStack, Icon, Image, Link, Stack, Text, VStack } from '@chakra-ui/react'
import { FaLinkedin, FaGithub, FaInstagram, FaMapMarkerAlt } from 'react-icons/fa';
import { MdAlternateEmail } from 'react-icons/md'
import { BiCodeBlock } from 'react-icons/bi'

const IntroSection = () => {
  return (
    <Stack
      direction='row'
      alignItems='center'
      justifyContent='space-between'
    >
      <Stack
        direction='row'
        alignItems='center'
        justify='start'
        wrap='wrap'
        gap={4}
      >
        <Box>

          <Heading size='lg'>Jhon Joseph Cabrera Ojanama</Heading>
          <Text fontSize='md' color='blackAlpha.700'>Fronted/Backend Developer </Text>
          <HStack>
            <Text fontSize='sm' color='blackAlpha.500'><Icon w={3} h={3} as={FaMapMarkerAlt} /> Lima, Peru</Text>
            <Text fontSize='sm' color='blackAlpha.500' ><Icon w={3} h={3} as={BiCodeBlock} /> 1 año programando</Text>
          </HStack>
        </Box>
      </Stack>
      <VStack>
        <Link
          className='link'
          isExternal
          href='https://www.linkedin.com/in/jhon-joseph-cabrera-ojanama-086439252/'
        >
          <Icon w={5} h={5} as={FaLinkedin} />
        </Link>
        <Link
          className='link'
          isExternal
          href='https://github.com/jhoncabrera2050'
        >
          <Icon w={5} h={5} as={FaGithub} />
        </Link>
        <Link
          className='link'
          isExternal
          href='mailto:jhoncabrera2050@gmail.com'
        >
          <Icon w={5} h={5} as={MdAlternateEmail} />
        </Link>
        <Link
          className='link'
          isExternal
          href='https://www.instagram.com/sokarito.r' 
        >
          <Icon w={5} h={5} as={FaInstagram} />
        </Link>
      </VStack>
    </Stack >
  )
}

export default IntroSection
