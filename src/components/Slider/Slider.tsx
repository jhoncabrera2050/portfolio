import { Box, Text } from "@chakra-ui/react"
import { Carousel } from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css";


const Profile = () => {
  return (
    <Box mt={5}>
      <Carousel>
        <div>
          <img src="imagen1.png" alt="Imagen 1" />
        </div>
        <div>
          <img src="imagen2.png" alt="Imagen 2" />
        </div>
        <div>
          <img src="imagen3.png" alt="Imagen 3" />
        </div>
      </Carousel>
    </Box>
  );
};

export default Profile