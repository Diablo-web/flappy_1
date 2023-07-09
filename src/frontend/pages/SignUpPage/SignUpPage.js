import {
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
  Link,
  Text,
  useToast,
  useColorModeValue,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { Link as ReactLink, useLocation, useNavigate } from "react-router-dom";
import { DATA, TOKEN } from "../../constants";
import { signup } from "../../features";

const SignUpPage = () => {

  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    username: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  const { loading } = useSelector((state) => state.auth);
  const toast = useToast();

  const dispatch = useDispatch();

  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";

  const handleSignUp = async (e, user) => {
    e.preventDefault();
    const response = await dispatch(signup(user));
    if (response?.payload?.encodedToken) {
      localStorage.setItem(
        TOKEN,
        response.payload.encodedToken
      );
      localStorage.setItem(
        DATA,
        JSON.stringify(response.payload.createdUser)
      );
      navigate(from, { replace: true });
      toast({
        title: "Account has been created.",
        description: "Thanks for creating account.",
        position: "bottom-right",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
    } else {
      toast({
        title: "Sign Up Failed",
        description: response.payload,
        position: "bottom-right",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };
  return (
    <Flex grow="1" alignItems="center" justifyContent="center">
      <Flex
        as={"form"} 
        direction="column"
        gap="4"
        w="25rem"
        maxW="84vw"
        bg={useColorModeValue("gray.100", "gray.800")}
        px="5"
        py="4"
        rounded="lg"
        onSubmit={(e) => handleSignUp(e, user)}
      >
        <Heading fontSize="4xl">Sign Up</Heading>
        <Text fontStyle={"italic"} fontSize={"20px"}>Join the Flappy, Spread your Wings!</Text>
        <Flex direction="column" gap="2">
          <Flex  direction={["column", "row"]} gap="2">
            <FormControl isRequired>
              <FormLabel htmlFor="firstName">First name</FormLabel>
              <Input
                id="firstName"
                type="text"
                placeholder="e.g. Sam"
                value={user.firstName}
                onChange={(e) =>
                  setUser({ ...user, firstName: e.target.value })
                }
              />
            </FormControl>
            <FormControl isRequired>
              <FormLabel htmlFor="lastName">Last name</FormLabel>
              <Input
                id="lastName"
                type="text"
                placeholder="e.g. Marsh"
                value={user.lastName}
                onChange={(e) => setUser({ ...user, lastName: e.target.value })}
              />
            </FormControl>
          </Flex>
          <FormControl isRequired>
          <FormLabel htmlFor="username">Username</FormLabel>
            <Input
               id="username"
               type="text"r
               placeholder="e.g. diablo"
               value={user.username}
               onChange={(e) => setUser({ ...user, username: e.target.value })}
            />
          
          </FormControl>
          <FormControl isRequired>
            <FormLabel htmlFor="password">Password</FormLabel>
            <InputGroup size="md">
              <Input
                id="password"
                pr="3rem"
                type={showPassword ? "text" : "password"}
                placeholder="Enter password"
                value={user.password}
                onChange={(e) => setUser({ ...user, password: e.target.value })}
              />
              <InputRightElement>
                <IconButton
                  size="sm"
                  rounded="md"
                  aria-label={showPassword ? "Hide Password" : "Show Password"}
                  icon={showPassword ? <IoMdEye /> : <IoMdEyeOff />}
                  onClick={() => setShowPassword(!showPassword)}
                />
              </InputRightElement>
            </InputGroup>
          </FormControl>
          <Checkbox colorScheme="blue" defaultChecked>
            Remember Me
          </Checkbox>
          <Button isLoading={loading} colorScheme="blue" type="submit">
            Sign Up
          </Button>
          <Flex gap="1">
            <Text>Already have an account?</Text>
            <Link
              as={ReactLink}
              to="/signin"
              style={{ textDecoration: "none" , color: "#2B6CB0"}}
              pb="0.5px"
              borderBottom="1px"
            >
              Login here!
            </Link>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export { SignUpPage };
