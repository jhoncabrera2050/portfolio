import { Box, Heading, HStack, Icon, Image, Link, Stack, Text, VStack } from '@chakra-ui/react';
import { FaLinkedin, FaGithub, FaInstagram, FaMapMarkerAlt } from 'react-icons/fa';
import { MdAlternateEmail } from 'react-icons/md';
import { BiCodeBlock } from 'react-icons/bi';

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
        
          <Text fontSize='md' color='blackAlpha.700'>Frontend/Backend Developer</Text>
        </Box>
      </Stack>
      <Box>
        <Image
          src="jhon3.jpg"
          alt="Profile Image"
          boxSize="150px" // Ajusta el tamaño de la imagen según tus preferencias
          borderRadius="full" // Puedes aplicar bordes redondeados para dar estilo
        />
      </Box>
    </Stack>
  );
};

export default IntroSection;
