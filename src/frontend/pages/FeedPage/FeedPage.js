import { Box, Flex, Heading, useColorModeValue } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import {
  CreatePost,
  FilterSection,
  PostSection,
  SuggestedProfiles,
} from "../../components";
import { giveFeedPosts } from "../../utils";

const FeedPage = () => {
  const {
    user: { following, username },
  } = useSelector((state) => state.auth);
  const { sortBy } = useSelector((state) => state.filters);
  const { data: posts } = useSelector((state) => state.posts);

  const feedPosts = giveFeedPosts(posts, following, username, sortBy);

  return (
    <Flex gap={"12"} position={"relative"}>
      <Flex flexGrow={"1"} direction={"column"} gap={"4"}>
        <Box display={{ base: "block", lg: "none" }} mt={"2"}>
          <FilterSection />
        </Box>
        <CreatePost />
        <PostSection posts={feedPosts} />
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
