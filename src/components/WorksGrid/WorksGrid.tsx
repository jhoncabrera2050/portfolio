import { Box, Flex, Heading } from "@chakra-ui/react"
import Work from "../Work/Work"
import { WorksData } from "../../data/works"

type Props = {
  max: number;
}

const WorksGrid = ({ max }: Props) => {

  return (
    <Flex
      justifyContent='center'
      gap='10'
      wrap='wrap'
      align="center"
      my='5'>
      {
        WorksData.sort(function (a, b) {
          let x = a.date
          let y = b.date
          x = x.split('/').reverse().join('');
          y = y.split('/').reverse().join('');
          return x > y ? 1 : x < y ? -1 : 0;
        }).reverse().slice(0, max).map((work, index) => (
        <Work
          title={work.title}
          size='160px'
          src={work.src}
          body={work.body}
          tags={work.tags}
          _href={work.href}
        />
        ))
      }
    </Flex>
  )
}
export default WorksGrid