import { Box, Text } from "@chakra-ui/react"
import { Carousel } from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css";


const Profile = () => {
  return (
    <Box mt={5}  >
      <Carousel>
        <div>
          <img src="imagen1.jpg" alt="Imagen 1" />
        </div>
        <div>
          <img src="imagen2.jpg" alt="Imagen 2" />
        </div>
      </Carousel>
    </Box>
  );
};

export default Profile