import { extendTheme } from "@chakra-ui/react";

const fonts = {
    heading: `'Dosis', sans-serif`,
//   heading: `'Raleway', sans-serif`,
};

const config = {
  initialColorMode: "system",
  useSystemColorMode: false,
};

const theme = extendTheme({
  fonts,
  config,
});

export { theme };