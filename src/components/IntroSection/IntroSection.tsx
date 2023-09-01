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
          <HStack>
            <Heading size='lg'>Jhon Joseph Cabrera Ojanama</Heading>
            <Text fontSize='lg'>( Bear )</Text>
          </HStack>
        
          <Text fontSize='md' color='blackAlpha.700'>Fronted/Backend Developer </Text>
          <HStack>
            <Text fontSize='sm' color='blackAlpha.500'><Icon w={3} h={3} as={FaMapMarkerAlt} /> Lima, Peru</Text>
            <Text fontSize='sm' color='blackAlpha.500' ><Icon w={3} h={3} as={BiCodeBlock} /> 1 año programando</Text>
          </HStack>
        </Box>
      </Stack>
    </Stack >
  )
}

export default IntroSection
