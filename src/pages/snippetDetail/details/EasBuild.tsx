import { Box, Heading, Text, Stack, Code, Link } from "@chakra-ui/react"

const EasBuild = () => {
  return (
    <Stack
      mt='0px !important'
      maxW='850px'
      minH='100vh'
      pt={20}
      px={10}
      gap='20px'
      mb='8'
    >

      <Box
        alignSelf='flex-start'
      >
        <Heading
          size='lg'
          color='blackAlpha.800'
        >Expo React | eas APK build</Heading>
      </Box>
      <Stack gap='2'>
        <Text>
          Como primer paso debe crear un proyecto en <Link href='https://expo.dev' isExternal>expo</Link>{' '},
          una vez creado enlazaremos nuestro proyecto de <Link href='https://expo.dev' isExternal>expo</Link>{' '} con nuestro proyecto local
          para esto existen estos dos comandos que debemos ejecutar en la terminal
        </Text>
        <Stack
          backgroundColor='blackAlpha'
        >
          <Code colorScheme='blackAlpha'>
            npm install --global eas-cli
          </Code>
          <Code colorScheme='blackAlpha'>
            eas init --id $key
          </Code>
        </Stack>
        <Text>
          una vez enlazado el proyecto, nos loguearemos con nuestras credenciales de
          <Link href='https://expo.dev' isExternal>expo</Link>{' '}
          usando el comando
        </Text>
        <Code colorScheme='blackAlpha'>
          eas login
        </Code>
        <Text>
          luego ejecutaremos el comando de configuración
        </Text>
        <Code colorScheme='blackAlpha'>
          eas build:configure
        </Code>
        <Text>
          luego de terminar la configuración se creará el archivo <strong>eas.json</strong>, en el cual
          tendremos que crear un perfil nuevo para poder buildear la aplicación a un <strong>.apk</strong>
        </Text>
        <Stack
          backgroundColor='blackAlpha.200'
        >
          <Code colorScheme='blackAlpha.100'>
            "nameOfProfile": {'{'}
          </Code>
          <Code colorScheme='blackAlpha.100'>
            "android": {'{'}
          </Code>
          <Code colorScheme='blackAlpha.100'>
            "buildType": "apk"
          </Code>
          <Code colorScheme='blackAlpha.100'>
            {'} }'}
          </Code>
        </Stack>
        <Text>ahora si ejecutaremos el comando para buildear la aplicación</Text>
        <Stack
          backgroundColor='blackAlpha.200'
        >
          <Code colorScheme='blackAlpha.100'>
            eas build --profile {'<nameOfProfile>'}
          </Code>
        </Stack>
        <Text>para terminar deberá regresar a la página de su proyecto en
          {' '}<Link href='https://expo.dev' isExternal>expo</Link>{' '}
          y descarga el apk de su aplicación</Text>
      </Stack>
    </Stack >
  )
}
export default EasBuild