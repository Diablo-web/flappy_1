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
import { signin } from "../../features";

const SignInPage = () => {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [signInMethod, setSignInMethod] = useState(null);

  const toast = useToast();

  const { loading } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";

  const handleSignIn = async (user) => {
    const response = await dispatch(signin(user));
    if (response?.payload?.encodedToken) {
      const foundUser = response.payload.foundUser;
      localStorage.setItem(TOKEN, response.payload.encodedToken);
      localStorage.setItem(DATA, JSON.stringify(foundUser));
      navigate(from, { replace: true });
      toast({
        title: "Signed In",
        description: `👋 Welcome back, ${foundUser.firstName}! `,
        position: "bottom-right", // Position the toast on the bottom-rights corner
        status: "success",
        duration: 3000,
        isClosable: true,
      });
    } else {
      toast({
        title: "Sign In Failed",
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
        onSubmit={(e) => {
          e.preventDefault();
          setSignInMethod("Manual");
          handleSignIn(user);
        }}
      >
        <Heading fontSize="4xl">Sign In</Heading>
        <Text fontStyle={"italic"} fontSize={"20px"}>Unlock yourself, Spread your Wings!</Text>
        <Flex direction="column" gap="2">
          <FormControl isRequired>
            <FormLabel htmlFor="username">UserName</FormLabel>
            <Input
              id="username"
              type="text"
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

          <Button
            isLoading={signInMethod === "Manual" && loading}
            colorScheme="blue"
            type="submit"
          >
            Sign In
          </Button>
          <Button
            isLoading={signInMethod === "Guest" && loading}
            colorScheme="blue"
            variant="outline"
            onClick={(e) => {
              e.preventDefault();
              setSignInMethod("Guest");
              setUser({
                username: "anish1234",
                password: "password",
              });
              handleSignIn({
                username: "anish1234",
                password: "password",
              });
            }}
          >
            Sign In as Guest
          </Button>
          <Flex gap="1">
            <Text>New to Flappy?</Text>
            <Link
              as={ReactLink}
              to="/signup"
              style={{ textDecoration: "none" ,  color: "#2B6CB0"}}
              pb="0.5px"
              // color="#2B6CB0"
              // color= "blue.800"
              borderBottom="1px"
            >
              Create an account!
            </Link>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export { SignInPage };
