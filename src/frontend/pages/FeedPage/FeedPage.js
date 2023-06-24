import { Box, Flex, Heading, useColorModeValue } from "@chakra-ui/react";
import {
  CreatePost,
  FilterSection,
  PostSection,
  SuggestedProfiles,
} from "../../components";

const FeedPage = () => {
  return (
    <Flex gap={"12"} position={"relative"}>
      <Flex direction={"column"} gap={"4"}>
        <Box display={{ base: "block", lg: "none" }}>
          <FilterSection />
        </Box>
        <CreatePost />
        <PostSection />
      </Flex>
      <Flex
        display={{ base: "none", lg: "flex" }}
        position={"sticky"}
        top={"24"}
        mt={"4"}
        direction="column"
        gap={"4"}
        alignSelf={"start"}
        p={4}
        rounded={"lg"}
        minW={{ base: "52", lg: "72", xl: "80" }}
        bgColor={useColorModeValue("gray.100", "gray.800")}
      >
        <Heading fontSize={"2xl"}>Sort By</Heading>
        <FilterSection />
        <Heading fontSize={"2xl"}>Suggested</Heading>
        <SuggestedProfiles />
      </Flex>
    </Flex>
  );
};

export { FeedPage };