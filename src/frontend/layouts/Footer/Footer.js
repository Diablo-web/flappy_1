import {
  Box,
  Container,
  Link,
  SimpleGrid,
  Stack,
  Text,
  useColorModeValue,
  Flex,
  Image,
  Heading,
  IconButton,
} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { FaInstagram, FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <Box
      ml={{ base: "0", md: "60" }}
      bg={useColorModeValue("gray.50", "gray.900")}
      color={useColorModeValue("gray.700", "gray.200")}
      borderTopWidth="1px"
      borderTopColor={useColorModeValue("gray.200", "gray.700")}
    >
      <Container as={Stack} maxW={"6xl"} py={10}>
        <SimpleGrid
          templateColumns={{
            base: "1fr",
            sm: "1fr 1fr",
            xl: "2fr 1fr 1fr 1fr",
          }}
          spacing={8}
          m="4"
          p="6"
        >
          <Stack spacing={10}>
            <Box>
              <Flex
                as={Link}
                to="/"
                h="12"
                alignItems="center"
                gap={6}
                _hover={{ textDecoration: "none" }}
              >
                <Image src="/assets/logo/flappy.png" maxH="100%" />
                <Heading fontSize="2xl">flappy</Heading>
              </Flex>
            </Box>
            <Text fontSize="2xl" textAlign="left">
              © 2022 Flappy. All rights reserved
            </Text>

            <Stack direction={"row"} fontSize="4xl" spacing={10}>
              <IconButton
                as={RouterLink}
                to="https://www.instagram.com/sumedh__20/"
                label="Instagram"
              >
                <FaInstagram />
              </IconButton>
              <IconButton
                as={RouterLink}
                to="https://twitter.com/SumedhK01/"
                label="Twitter"
              >
                <FaTwitter />
              </IconButton>
              <IconButton
                as={RouterLink}
                to="https://github.com/Diablo-web"
                label="GitHub"
              >
                <FaGithub />
              </IconButton>
              <IconButton
                as={RouterLink}
                to="https://www.linkedin.com/in/sumedh-kurhade-98274a19b/"
                label="LinkedIn"
              >
                <FaLinkedin />
              </IconButton>
            </Stack>
          </Stack>
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export { Footer };
