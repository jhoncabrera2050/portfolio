import { Box, Flex, Stack, Link, Icon, Tag, Image, Text, Heading, HStack } from "@chakra-ui/react"
import { useParams } from "react-router-dom"
import { useState } from "react"
import { WorksData } from "../data/works"
import { IconType } from "react-icons"
import { FaGithub } from "react-icons/fa"
import { HiOutlineExternalLink } from "react-icons/hi"
import moment from 'moment'

const WorkDetail = () => {
  const { title } = useParams<{ title: string }>()
  const [doc, setDoc] = useState(WorksData.find(e => e.title === title))
  const icons: IconType[] = [HiOutlineExternalLink, FaGithub]
  const linksName: string[] = ["External", "Github"]

  return (
    <Stack
      minH='100vh'
      w='100%'
      maxW='850px'
      mt='0 !important'
      pt={20}
      pb={4}
      px={10}
      gap='20px'
    >
      <Box
        alignSelf='flex-start'
      >
        <Heading
          size='lg'
          color='blackAlpha.800'
        >
          {doc?.title}
        </Heading>
        <Text mt='2'>{doc?.author} | {moment(new Date(doc?.date as string)).format('LL')}</Text>
      </Box>
      <Image
        width={doc?.size}
        alignSelf='center'
        borderRadius='12px'
        objectFit='cover'
        shadow='xs'
        alt={doc?.title}
        src={doc?.src}
      />
      <Box >
        <Text fontSize='lg' >{doc?.body}</Text>
      </Box>
      <Stack
        alignSelf='flex-start'
        gap='10px'
      >
        <Heading
          size='lg'
          color='blackAlpha.800'
        >Links
        </Heading>
        <HStack>
          {
            doc?.href.map((link, index) => (
              !link ? " "
                :
                <Link
                  color='gray.600'
                  key={index}
                  href={link}
                  isExternal
                >
                  <HStack
                    bg={"#242424"}
                    color={"#F1F1F1"}
                    boxShadow={'md'}
                    p={'2'}
                    borderRadius={9}
                    className='stack'
                  >
                    <Icon w={5} h={5} as={icons[index]} />
                    <Text>{linksName[index]}</Text>
                  </HStack>
                </Link>
            ))
          }
        </HStack>
      </Stack>
    </Stack>
  )
}

export default WorkDetail