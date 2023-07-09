import { Route, Routes } from "react-router-dom";
import { NavBar } from "../NavBar";
import { NavBarMenu } from "../NavBarMenu";
import Mockman from "mockman-js";
import { RequireAuth } from "../../components";
import {
  ExplorePage,
  BookMarkPage,
  FeedPage,
  ProfilePage,
  SignInPage,
  SignUpPage,
  SinglePostPage,
} from "../../pages";

const Router = () => {
  return (
    <Routes>
      <Route element={<NavBar />}>
        <Route path="/mockman" element={<Mockman />} />
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/signup" element={<SignUpPage />} />
      </Route>

      <Route element={<RequireAuth />}>
        <Route element={<NavBarMenu />}>
          <Route path="/profile/:username" element={<ProfilePage />} />
          <Route path="/" element={<FeedPage />} />
          <Route path="/explore" element={<ExplorePage />} />
          <Route path="/bookmarks" element={<BookMarkPage />} />
          <Route path="/post/:postId" element={<SinglePostPage />} />
        </Route>
      </Route>
    </Routes>
  );
};

export { Router };
