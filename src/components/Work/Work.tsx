import { Box, Flex, HStack, Icon, Image, Link, Tag, Text } from "@chakra-ui/react"
import { IconType } from "react-icons"
import { FaGithub } from "react-icons/fa"
import { HiOutlineExternalLink } from "react-icons/hi"
import { NavLink } from "react-router-dom"

type Props = {
  title: string
  body: string
  tags: string[]
  _href: string[]
  src: string
  size: string
}

const Work = ({ title, body, tags, _href, src, size }: Props) => {

  return (
    <Link
      as={NavLink}
      to={`/works/${title}`}
      _hover={{
        textDecoration: 'none',
        boxShadow: 'rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px',
      }}
      bg='#b21e35'
      maxW={"350px"}
      borderWidth='1px'
      rounded='md'
      p={'4'}
    >
      <Flex
        alignItems='center'
        gap={4}
        direction='column'
      >
        <Image
          src={src}
          alt={title}
          borderRadius='12px'
          objectFit='cover'
          shadow='xs'
          boxSize={size}
          width='auto'
        />
        <Text noOfLines={1}>
          {body}
        </Text>
      </Flex>
      <HStack
        mt='2'
        align='center'
      >
        {tags.map((tag, index) =>
          <Tag key={index}>{tag}</Tag>
        )}
      </HStack>
    </Link>
  )
}
export default Work