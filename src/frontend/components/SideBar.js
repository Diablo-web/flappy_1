import {
  Box,
  CloseButton,
  Flex,
  Heading,
  Image,
  useColorModeValue,
} from "@chakra-ui/react";
import { MdOutlineAccountCircle, MdOutlineExplore } from "react-icons/md";

import { BiHomeCircle, BiBookmarks } from "react-icons/bi";
import { Link } from "react-router-dom";
import { NavItem } from "./NavItem";
import { useSelector } from "react-redux";

const Sidebar = ({ onClose, ...rest }) => {
  const auth = useSelector((state) => state.auth);

  const LinkItems = [
    { name: "Feed", icon: BiHomeCircle, path: "/" },
    { name: "Explore", icon: MdOutlineExplore, path: "/explore" },
    { name: "Bookmarks", icon: BiBookmarks, path: "/bookmarks" },
    {
      name: "Profile",
      icon: MdOutlineAccountCircle,
      path: `/profile/${auth?.user?.username}`,
    },
  ];

  return (
    <Box
      bg={useColorModeValue("white", "gray.900")}
      borderRight="1px"
      borderRightColor={useColorModeValue("gray.200", "gray.700")}
      w={{ base: "full", md: "56", lg: "64", xl: "72" }}
      pos="fixed"
      h="full"
      {...rest}
    >
      <Flex
        h="20"
        alignItems="center"
        mx="6"
        mb="2"
        justifyContent="space-between"
      >
        <Flex as={Link} to="/" h="16" alignItems="center" gap={8}>
          <Image src="/assets/logo/flappy.png" maxH="100%" />
          <Heading fontSize="3xl">Flappy</Heading>
        </Flex>
        <CloseButton display={{ base: "flex", md: "none" }} onClick={onClose} />
      </Flex>
      <Flex direction="column" gap={4} p="8">
        {LinkItems.map((link) => (
          <NavItem
            key={link.name}
            icon={link.icon}
            path={link.path}
            onClick={onClose}
          >
            {link.name}
          </NavItem>
        ))}
      </Flex>
    </Box>
  );
};

export { Sidebar };
