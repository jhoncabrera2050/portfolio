import { Box } from "@chakra-ui/react"
import SnippetsGrid from "../components/SnippetsGrid/snippetsgrid"

const SnippetsPage = () => {
  return (
    <Box
      mt='0px !important'
      minH='100vh'
      pt={20}
      px={10}
    >
      <SnippetsGrid />
    </Box>
  )
}
export default SnippetsPage 