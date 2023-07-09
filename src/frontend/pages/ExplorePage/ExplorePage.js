import {
  Box,
  Flex,
  Heading,
  Spinner,
  useColorModeValue,
  useToast,
} from "@chakra-ui/react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { PostSection, SuggestedProfiles, FilterSection } from "../../components";
import { giveExplorePosts } from "../../utils";

const ExplorePage = () => {

  const toast = useToast();

  const { data: posts, loading, error } = useSelector((state) => state.posts);
  const { show } = useSelector((state) => state.filters);

  useEffect(() => {
    if (error !== "") {
      toast({
        title: error.title,
        description: error.description,
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  }, [error, toast]);

  const explorePosts = giveExplorePosts(posts, show);

  return (
    <Flex gap={"12"} position={"relative"}>
        <Flex flexGrow={"1"} direction={"column"} gap={"4"}>
        <Box display={{ base: "block", lg: "none" }} mt={"2"}>
          <FilterSection />
        </Box>
        {posts.length === 0 ? (
          loading ? (
            <Flex
              direction={"column"}
              flexGrow={"1"}
              alignItems={"center"}
              justifyContent={"center"}
            >
            <Spinner
              thickness="8px"
              speed="0.85s"
              emptyColor="gray.300"
              color="blue.400"
              size="xl"
            />
            </Flex>
          ) : (
            <Flex
              direction={"column"}
              flexGrow={"1"}
              alignItems={"center"}
              justifyContent={"center"}
            >
              No Posts Found
            </Flex>
          )
        ) : (
          <PostSection posts={explorePosts} />
        )}
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
        bgColor={useColorModeValue("white.100", "gray.800")}
        borderWidth={"3px"}
        borderColor={useColorModeValue("gray.200", "gray.700")}
      >
         <FilterSection />
        <Heading fontSize={"2xl"}>Suggested</Heading>
        <SuggestedProfiles />
      </Flex>
    </Flex>
  );
};

export { ExplorePage };