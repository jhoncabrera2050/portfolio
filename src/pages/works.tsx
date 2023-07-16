import { Box, Heading, Stack } from "@chakra-ui/react"
import WorksGrid from "../components/WorksGrid/WorksGrid"
import { WorksData } from "../data/works"

const WorkPage = () => {

  return (
    <Box
      minH='100vh'
      w='100%'
      maxW='850px'
      pt={20}
      px={10}
    >
      <Heading size='lg'>Proyectos</Heading>
      <WorksGrid max={WorksData.length} />
    </Box>
  )
}

export default WorkPage
