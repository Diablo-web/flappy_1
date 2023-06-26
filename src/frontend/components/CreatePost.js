import {
  Avatar,
  Button,
  Flex,
  Text,
  Textarea,
  useToast,
  useColorModeValue,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createPost } from "../features";

const CreatePost = () => {
  const [postData, setPostData] = useState({ content: "" });
  const [isPosting, setIsPosting] = useState(false);

  const toast = useToast();

  const {
    token,
    user: { avatarURL, firstName, lastName, username },
  } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const handleCreatePost = async () => {
    if (postData.content !== "") {
      setIsPosting(true);
      const response = await dispatch(createPost({ postData, token }));
      if (response?.payload?.posts !== undefined) {
        toast({
          title: "Post Created!",
          description: "Your post has been created successfully.",
          status: "success",
          duration: 3000,
          isClosable: true,
        });
        setPostData({ content: "" });
      }
      setIsPosting(false);
    } else {
      toast({
        title: "Empty Post!",
        description: "Post can't be left empty.",
        status: "warning",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  return (
    <Flex
      width={"full"}
      direction={"column"}
      gap={"2"}
      px={{ base: "1", md: "4" }}
      py={"6"}
    >
      <Flex gap={2}>
        <Avatar
          as={Link}
          to={`/profile/${username}`}
          name={`${firstName} ${lastName}`}
          src={avatarURL}
          alt={username}
        />
        <Flex
          direction={"column"}
          fontSize={"sm"}
          as={Link}
          to={`/profile/${username}`}
        >
          <Text fontWeight={600}>{`${firstName} ${lastName}`}</Text>
          <Text color={"gray.500"}>@{username}</Text>
        </Flex>
      </Flex>
      <Textarea
        w="full"
        h={{ base: 24, md: 28 }}
        border="none"
        outline="none"
        resize="vertical"
        focusBorderColor="transparent"
        placeholder="What's on your mind?"
        value={postData.content}
        onChange={(e) => setPostData({ ...postData, content: e.target.value })}
      />
      <Button
        isLoading={isPosting}
        alignSelf={"flex-end"}
        colorScheme={useColorModeValue("blue.200")}
        onClick={handleCreatePost}
      >
        Post
      </Button>
    </Flex>
  );
};

export { CreatePost };
