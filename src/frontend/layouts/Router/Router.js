import { Route, Routes } from "react-router-dom";
// import { SignInPage, SignUpPage } from "../../pages";
import { NavBar } from "../NavBar";
import { NavBarMenu } from "../NavBarMenu";
import Mockman from "mockman-js";
import { RequireAuth } from "../../components";
import {
  BookmarksPage,
  ExplorePage,
  FeedPage,
  ProfilePage,
  SignInPage,
  SignUpPage,
} from "../../pages";

const Router = () => {
  return (
    <Routes>
      <Route element={<NavBar />}>
      <Route path="/mockman" element={<Mockman/>} />
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/signup" element={<SignUpPage />} />
      </Route>
      <Route element={<NavBarMenu />}>

      <Route
          path="/profile"
          element={
            <RequireAuth>
              <ProfilePage />
            </RequireAuth>
          }
        />
        <Route
          path="/"
          element={
            <RequireAuth>
              <FeedPage />
            </RequireAuth>
          }
        />
        <Route
          path="/explore"
          element={
            <RequireAuth>
              <ExplorePage />
            </RequireAuth>
          }
        />
        <Route
          path="/bookmarks"
          element={
            <RequireAuth>
              <BookmarksPage />
            </RequireAuth>
          }
        />
       
      </Route>
    </Routes>
  );
};

export { Router };