import { Heading, Link, Text } from "@chakra-ui/react"
import { NavLink } from "react-router-dom"

type Props = {
  title: string
  date: string
}


const Snippet = ({ title, date }: Props) => {
  return (
    <Link
      as={NavLink}
      to={`/snippets/${title}`}
      _hover={{
        textDecoration: 'none',
        boxShadow: 'rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px',
      }}
      bg='#FFF'
      borderWidth='1px'
      rounded='md'
      pl='8'
      pr='14'
      py='2'
    >
      <Text fontSize='xl'>{title}</Text>
      <Text>
        {new Date(date).toLocaleDateString("en-US",
          { day: 'numeric', month: 'long', year: 'numeric' }
        )}
      </Text>
    </Link >
  )
}
export default Snippet