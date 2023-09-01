import {
  Box,
  Collapse,
  Heading,
  HStack,
  Image,
  Stack,
  Text,
  useDisclosure,
  VStack,
} from "@chakra-ui/react"

const Experience = () => {
  const { isOpen, onToggle } = useDisclosure()

  return (
    <Box mt={10}>
      <Heading size='lg'>Experience</Heading>
      <HStack>
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
              src={'agencia.jpg'}
              alt="yanbal"
            />
            <Box>
              <Text fontWeight='semibold'>Maquetador Web</Text>
              <Text fontSize='15px'>
                Agencia Online JF
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
              src={'yanbal.jpg'}
              alt="atento"
            />
            <Box>
              <Text fontWeight='semibold'>Pasante Programador</Text>
              <Text fontSize='15px'>
                Yanbal Unique
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
              <Text fontWeight='semibold'>Asesor Técnico</Text>
              <Text fontSize='15px'>
                Atento
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
      </HStack>
    </Box>

  )
}

export default Experience