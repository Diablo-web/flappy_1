
import './App.css';
import { ScrollToTop } from "./frontend/components";
import { Router } from "./frontend/layouts";
import { useToast } from "@chakra-ui/react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllPosts, getAllUsers } from "./frontend/features";


function App() {

  const toast = useToast();

  const { error: postsError } = useSelector((state) => state.posts);
  const dispatch = useDispatch();

  useEffect(() => {
    if (postsError !== "" && postsError.isOnlyPostError) {
      toast({
        title: postsError.title,
        description: postsError.description,
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  }, [postsError, toast]);

  useEffect(() => {
    dispatch(getAllPosts());
    dispatch(getAllUsers());
  }, [dispatch]);

  return (
    <div className="App">
      <ScrollToTop>
        <Router/>
      </ScrollToTop>
      {/* <h1>Hello World</h1> */}
    
    </div>
  );
}

export default App;
