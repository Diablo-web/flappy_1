import { NavLink } from "react-router-dom";
import { Flex, Icon, Link,Text, useColorModeValue } from "@chakra-ui/react";

const NavItem = ({ icon, children, path,  onClick, ...rest }) => {
  const colorModeValue = useColorModeValue(true, false);

  return (
    <Link
      as={NavLink}
      to={path}
      style={{ textDecoration: "none" }}
      _focus={{ boxShadow: "none" }}
      onClick={onClick}
    >
      {({ isActive }) =>
        isActive ? (
          <Flex
            align="center"
            py="3"
            px="4"
            mx="4"
            borderRadius="lg"
            role="group"
            cursor="pointer"
            // width="50%"
            bg={colorModeValue ? "blue.200" : "blue.200"}
            color={colorModeValue ? "black" : "white"}
            {...rest}
          >
            {icon && <Icon mr="6" fontSize="32" as={icon} />}
            {/* {children} */}
            <Text fontSize="larger">{children}</Text>
          </Flex>
        ) : (
          <Flex
            align="center"
            py="3"
            px="4"
            mx="4"
            borderRadius="lg"
            role="group"
            cursor="pointer"
            _hover={{
              bg: colorModeValue ? "blue.100" : "blue.900",
              color: colorModeValue ? "black" : "white",
            }}
            {...rest}
          >
            {icon && (
              <Icon
                mr="6"
                fontSize="32"
                _groupHover={{
                  color: colorModeValue ? "black" : "white",
                }}
                as={icon}
              />
            )}
            {/* {children} */}
            <Text fontSize="larger">{children}</Text>
          </Flex>
        )
      }
    </Link>
  );
};

export { NavItem };