import { ChakraProvider, ColorModeProvider, Heading } from '@chakra-ui/react';
import '../styles/globals.css';
import { GoogleFonts } from 'next-google-fonts';
import theme from '../styles/theme';

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <ColorModeProvider
        options={{
          useSystemColorMode: true,
        }}
      >
        <Component {...pageProps} />
        <Heading>Here</Heading>
      </ColorModeProvider>

    </ChakraProvider>
  );
}

export default MyApp;
