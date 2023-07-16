import { Box, Heading, VStack } from '@chakra-ui/react'
import Experience from '../components/Experience/Experience'
import IntroSection from '../components/IntroSection/IntroSection'
import Profile from '../components/Profile/Profile'
import Stack from '../components/Stack/Stack'
import WorksGrid from '../components/WorksGrid/WorksGrid'

const Home = () => {
  return (
    <Box
      mt='0px !important'
      maxW='850px'
      minH='100vh'
      pt={20}
      px={10}
    >
      <IntroSection />
      <Profile />
      <Stack />
      <Experience />
      <Box mt={10}>
        <Heading size='lg'>Proyectos Recientes</Heading>
        <WorksGrid max={2} />
      </Box>
    </Box >
  )
}

export default Home