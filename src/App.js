import "./App.css";
import { ScrollToTop } from "./frontend/components";
import { Router } from "./frontend/layouts";
import { Box, useColorModeValue, useToast } from "@chakra-ui/react";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllPosts, getAllUsers } from "./frontend/features";

function App() {
  const toast = useToast();

  const { error: postsError } = useSelector((state) => state.posts);
  const { error: usersError } = useSelector((state) => state.users);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllPosts());
    dispatch(getAllUsers());
  }, [dispatch]);

  useEffect(() => {
    if (postsError !== "") {
      toast({
        title: postsError.title,
        description: postsError.description,
        status: "error",
        position: "bottom-right",
        duration: 3000,
        isClosable: true,
      });
    }
  }, [postsError, toast]);

  useEffect(() => {
    if (usersError !== "") {
      toast({
        title: usersError.title,
        description: usersError.description,
        status: "error",
        position: "bottom-right",
        duration: 3000,
        isClosable: true,
      });
    }
  }, [usersError, toast]);

  return (
    <Box bg={useColorModeValue("white", "gray.900")}>
      <ScrollToTop>
        <Router />
      </ScrollToTop>
    </Box>
  );
}

export default App;
