import { extendTheme } from "@chakra-ui/react";

const fonts = {
    heading: `'Bungee', cursive`,
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