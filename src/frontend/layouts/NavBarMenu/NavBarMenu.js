import React from "react";
import {
  Box,
  useColorModeValue,
  Drawer,
  DrawerContent,
  useDisclosure,
} from "@chakra-ui/react";
import { MobileNav, Sidebar } from "../../components";
import { Outlet } from "react-router-dom";
import { Footer } from "../Footer";

const NavBarMenu = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box minH="100vh" bg={useColorModeValue("white", "gray.900")}>
        <Sidebar
          onClose={() => onClose}
          display={{ base: "none", md: "block" }}
        />
        <Drawer
          autoFocus={false}
          isOpen={isOpen}
          placement="left"
          onClose={onClose}
          returnFocusOnClose={false}
          onOverlayClick={onClose}
          size={"full"}
        >
          <DrawerContent>
            <Sidebar onClose={onClose} />
          </DrawerContent>
        </Drawer>
        <MobileNav onOpen={onOpen} />
        <Box ml={{ base: "0", md: "56", lg: "64", xl: "72" }} p="4">
          <Outlet />
        </Box>
      </Box>
      <Footer />
    </>
  );
};

export { NavBarMenu };
