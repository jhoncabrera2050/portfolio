import {
  Box,
  Collapse,
  Heading,
  HStack,
  Image,
  Stack,
  Text,
  useDisclosure,
} from "@chakra-ui/react"

const Experience = () => {
  const { isOpen, onToggle } = useDisclosure()

  return (
    <Box mt={10}>
      <Heading size='lg'>Experience</Heading>
      <Stack
        bg='#FFF'
        maxW={"350px"}
        borderWidth='1px'
        rounded='md'
        my={'5'}
        p={'2'}
        _hover={{
          boxShadow: 'rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px',
        }}
      >
        <HStack align='flex-start' onClick={onToggle}>
          <Image
            boxSize={'55px'}
            src={'yanbal.jpg'}
            alt="yanbal"
          />
          <Box>
            <Text fontWeight='semibold'>Programador Junior</Text>
            <Text fontSize='15px'>
              Yanbal
            </Text>
            <Text fontSize='15px'>
              ene. 2023 - Marzo · 3 meses
            </Text>
          </Box>
          {/* <Collapse in={isOpen} animateOpacity>
            <Box
              p='40px'
              bg={"#181818"}
              position='absolute'
              color='white'
              rounded='md'
              shadow='md'
              maxWidth={'400px'}
            >
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum eveniet laborum animi vel quod omnis perferendis ipsum! Voluptatum enim necessitatibus tempore minima doloribus repudiandae! Dignissimos voluptate facilis a ducimus earum.
            </Box>
          </Collapse> */}
        </HStack>
      </Stack>
      <Stack
        bg='#FFF'
        maxW={"350px"}
        borderWidth='1px'
        rounded='md'
        my={'5'}
        p={'2'}
        _hover={{
          boxShadow: 'rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px',
        }}
      >
        <HStack align='flex-start' onClick={onToggle}>
          <Image
            boxSize={'55px'}
            src={'atento.jpg'}
            alt="atento"
          />
          <Box>
            <Text fontWeight='semibold'>Asesor de Servicio</Text>
            <Text fontSize='15px'>
              Atento
            </Text>
            <Text fontSize='15px'>
              ene. 2022 - Enero · 2023 1 año 
            </Text>
          </Box>
          {/* <Collapse in={isOpen} animateOpacity>
            <Box
              p='40px'
              bg={"#181818"}
              position='absolute'
              color='white'
              rounded='md'
              shadow='md'
              maxWidth={'400px'}
            >
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum eveniet laborum animi vel quod omnis perferendis ipsum! Voluptatum enim necessitatibus tempore minima doloribus repudiandae! Dignissimos voluptate facilis a ducimus earum.
            </Box>
          </Collapse> */}
        </HStack>
      </Stack>
    </Box>
    
  )
}

export default Experience