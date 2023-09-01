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
import { FaLinkedin, FaGithub, FaInstagram, FaMapMarkerAlt } from 'react-icons/fa';
import { MdAlternateEmail } from 'react-icons/md'
import { FaAsterisk } from "react-icons/fa"
import { BiBorderBottom } from "react-icons/bi"

const NavBar = () => {
  const href = useLocation().pathname.slice(1)
  const links: string[] = ["", "works", "snippets"]
  const slashs: string[] = ["Home", "Works", "Snippets"]

  return (
    <Box
      position='fixed'
      w='100%'
      maxW='100%'
      zIndex={1000}
    >
      <HStack
        m={0}
        py={5}
        px={20}
        bg={"#242424"}
        color={"#F1F1F1"}
        borderRadius={0}
        justify='space-between'
        alignItems='center'
        boxShadow={'md'}
        gap={3}
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
        <HStack gap={20} >
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
        </HStack>
        {/* <HStack justify='center' align='center'> */}

        {/* <Heading size='md'>Alex-Dev</Heading> */}
        {/* </HStack> */}
      </ HStack>
    </Box>
  )
}

export default NavBar