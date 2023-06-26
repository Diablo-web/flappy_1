import { Flex } from "@chakra-ui/react";
import { Post } from "./Post";

const PostSection = ({ posts }) => {
  return (
    // <Flex direction="column-reverse">
    //   {[...Array(31).keys()].slice(1).map((post) => (
    //     <Post key={post} post={post} />
    //   ))}
    // </Flex>
    <Flex flexGrow={"1"} direction="column" justifyContent={"start"}>
      {posts.map((post) => (
        <Post key={post._id} post={post} />
      ))}
    </Flex>
  );
};

export { PostSection };
