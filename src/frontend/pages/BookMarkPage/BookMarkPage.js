import {
  Flex,
  Heading,
  Spinner,
  useColorModeValue,
  useToast,
} from "@chakra-ui/react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBookmarkPosts } from "../../features";
import { PostSection, SuggestedProfiles } from "../../components";

const BookMarkPage = () => {
  const toast = useToast();

  const { token } = useSelector((state) => state.auth);
  const {
    data: bookmarks,
    loading,
    error,
  } = useSelector((state) => state.bookmarks);

  const { data: posts } = useSelector((state) => state.posts);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBookmarkPosts(token));
  }, [dispatch, token]);

  useEffect(() => {
    if (error !== "") {
      toast({
        title: error.title,
        description: error.description,
        position: "bottom-right",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  }, [error, toast]);


  const bookmarkedPosts = posts.filter((post) =>
    bookmarks.find((bookmarkedPost) => bookmarkedPost._id === post._id)
  );

  return (
    <Flex gap={"12"} position={"relative"}>
      {bookmarks.length === 0 ? (
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
            No Bookmarks
          </Flex>
        )
      ) : (
        <PostSection posts={bookmarkedPosts} />
      )}
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
        <Heading fontSize={"2xl"}>Suggested</Heading>
        <SuggestedProfiles />
      </Flex>
    </Flex>
  );
};

export { BookMarkPage };
