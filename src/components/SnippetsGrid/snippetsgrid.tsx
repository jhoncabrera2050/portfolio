import { Box, Flex, Stack, HStack } from "@chakra-ui/react"
import { SnippetsData } from "../../data/snippets"
import Snippet from "../snippet/snippet"

const SnippetsGrid = () => {
  return (
    <HStack
      pt={2}
      gap={10}
      justify='space-between'
      my='5'>
      {
        SnippetsData.map((snpt, index) => (
          <Snippet key={index}
            title={snpt.title}
            date={snpt.date} />
        ))
      }
    </HStack>
  )
}
export default SnippetsGrid