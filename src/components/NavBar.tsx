import {
  Box,
  Flex,
  Text,
  Heading,
  HStack,
  Icon,
  Stack,
  Link
} from "@chakra-ui/react"
import { Link as ReachLink, useLocation } from "react-router-dom"
import { FaAsterisk } from "react-icons/fa"
import { BiBorderBottom } from "react-icons/bi"

const NavBar = () => {
  const href = useLocation().pathname.slice(1)
  const links: string[] = ["", "works", "snippets"]
  const slashs: string[] = ["Home", "Works", "Snippets"]

  return (
    <Box
      position='absolute'
      w='100%'
      maxW='850px'
    >
      <HStack
        m={3}
        py={3}
        px={8}
        bg={"#242424"}
        color={"#F1F1F1"}
        borderRadius={12}
        justify='space-between'
        alignItems='center'
        boxShadow={'md'}
      >
        <HStack
          gap={3}
        >
          {
            links.map((link, index) => (
              <Link
                key={index}
                to={link}
                as={ReachLink}
                _hover={{
                  textDecoration: 'none'
                }}
                style={{
                  borderBottom: `3px solid ${link === href ? '#fff' : '#242424'}`
                }}
              >
                {slashs[index]}
              </Link>
            ))
          }
        </HStack>
        {/* <HStack justify='center' align='center'> */}
        <Icon
          mt={0.3}
          as={FaAsterisk}
        />
        {/* <Heading size='md'>Alex-Dev</Heading> */}
        {/* </HStack> */}
      </ HStack>
    </Box>
  )
}

export default NavBar