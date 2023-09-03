import { Box, Heading, Stack, Text } from '@chakra-ui/react';

const Programacion2 = () => {
    return (
        <Stack
            direction='row'
            alignItems='center'
            justifyContent='space-between'
        >
            <Stack
                direction='row'
                alignItems='center'
                justify='start'
                wrap='wrap'
                gap={4}
            >
                <Box
                    borderWidth="1px"
                    borderRadius="md"
                    p={4}
                    boxShadow="base"
                >
                    <Heading size='lg' textAlign='justify'>¿Por qué es importante el Desarrollo de Software ?</Heading>

                    <Text fontSize='md' padding={5} textAlign='justify'> En primer lugar, el desarrollo de software permite la automatización de tareas, lo que ahorra tiempo y recursos. Desde sistemas de gestión empresarial hasta aplicaciones móviles, el software es responsable de mejorar la eficiencia y productividad en una amplia gama de industrias. Esto es importante para mantener la competitividad en un mundo empresarial.</Text>
                    <Text fontSize='md' padding={5} textAlign='justify'>Mi rol como programador es de suma importancia. Nosotros somos los arquitectos y constructores de estas soluciones digitales, transformamos ideas en código, diseñamos algoritmos y solucionamos problemas complejos. La capacidad de trabajar en equipo, comunicarnos eficazmente y mantenernos actualizados en las últimas tecnologías es esencial para el éxito de cualquier proyecto de desarrollo de software que se nos presente.</Text>
                </Box>
            </Stack>
        </Stack>
    );
};

export default Programacion2;
