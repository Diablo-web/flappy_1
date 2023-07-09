import React from "react";
import { useColorMode, useColorModeValue, IconButton } from "@chakra-ui/react";
import {BsSun,BsMoon} from "react-icons/bs";

const ColorModeSwitch = (props) => {
  const { toggleColorMode } = useColorMode();
  const text = useColorModeValue("dark", "light");
  const SwitchIcon = useColorModeValue(BsMoon,BsSun );

  return (
    <IconButton
      size="md"
      fontSize="lg"
      aria-label={`Switch to ${text} mode`}
      variant="ghost"
      color="current"
      marginLeft="2"
      borderColor={"black"}
      border={"1px"}
      onClick={toggleColorMode}
      icon={<SwitchIcon />}
      {...props}
    />
  );
};

export { ColorModeSwitch };