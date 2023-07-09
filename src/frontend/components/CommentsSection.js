import { Button, Flex, Input, useToast } from "@chakra-ui/react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPostComment } from "../features";
import { Comment } from "./Comment";

const CommentsSection = ({ postId, comments }) => {
  const toast = useToast();

  const [commentData, setCommentData] = useState({ text: "" });
  const [isCommenting, setIsCommenting] = useState(false);

  const {
    token,
    user: { firstName, lastName, username, avatarURL },
  } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const handleAddComment = async () => {
    if (commentData.text !== "") {
      setIsCommenting(true);
      console.log("Comment Data:", commentData);
      console.log("Token:", token);
      console.log("User:", {
        firstName,
        lastName,
        username,
        avatarURL,
      });

      const response = await dispatch(
        addPostComment({
          postId,
          commentData: {
            firstName,
            lastName,
            username,
            avatarURL,
            text: commentData.text,
          },
          token,
        })
      );
      // console.log("Response:", response);

      setIsCommenting(false);
      if (response?.payload?.posts) {
        toast({
          title: "Comment posted!",
          description: "Your comment was posted successfully.",
          status: "success",
          position: "bottom-right",
          duration: 3000,
          isClosable: true,
        });
        setCommentData({ ...commentData, text: "" });
      }
    } else {
      toast({
        title: "Empty Comment!",
        description: "Comment can't be left empty.",
        position: "bottom-right",
        status: "warning",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  return (
    <Flex direction={"column"} px={{ base: "1", md: "4" }}>
      <Flex gap={"2"}>
        <Input
          type={"text"}
          placeholder={"Add a comment..."}
          autoFocus
          value={commentData.text}
          rounded={"xl"}
          onChange={(e) =>
            setCommentData({ ...commentData, text: e.target.value })
          }
        />
        <Button
          isLoading={isCommenting}
          bgColor={"blue.300"}
          color={"white"}
          _hover={{ bgColor: "blue.400" }}
          rounded={"full"}
          onClick={handleAddComment}
        >
          Comment
        </Button>
      </Flex>
      <Flex direction={"column"}>
        {comments.map((comment) => (
          <Comment key={comment._id} postId={postId} comment={comment} />
        ))}
      </Flex>
    </Flex>
  );
};

export { CommentsSection };

