import { HStack, Tag, Image, Text } from "@chakra-ui/react"
import { StackData } from "../../data/stack"

const Stack = () => {
  return (
    <HStack mt='6' gap='2' wrap='wrap'>
      {
        StackData.map((stack, index) => (
          <Tag
            key={index}
            p={2}
            cursor='grab'
            gap='2'
            className='stack'
            bg='#b21e35' color="#F3F3E9">
            <Image
              alt={stack.alt}
              boxSize='20px'
              src={stack.src}
            />
            <Text as='b' >{stack.alt}</Text>
          </Tag>
        ))
      }
    </HStack>
  )
}

export default Stack