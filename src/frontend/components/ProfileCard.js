import { Avatar, Button, Flex, Text } from "@chakra-ui/react";

const ProfileCard = () => {
  return (
    <Flex alignItems={"center"} justifyContent={"space-between"}>
      <Flex gap={2}>
        <Avatar
          name="Sumedh Kurhade"
          src={"https://avatars.githubusercontent.com/u/67695053?v=4"}
          alt={"Author"}
        />
        <Flex direction={"column"} fontSize={"sm"}>
          <Text fontWeight={600}>Sumedh Kurhade</Text>
          <Text color={"gray.500"}>@diablo</Text>
        </Flex>
      </Flex>
      <Button px={4} fontSize={"sm"} rounded={"full"}>
        Follow
      </Button>
    </Flex>
  );
};

export { ProfileCard };