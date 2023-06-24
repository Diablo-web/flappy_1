import { Route, Routes } from "react-router-dom";
import { SignInPage, SignUpPage } from "../../pages";
import { NavBar } from "../NavBar";
import { NavBarMenu } from "../NavBarMenu";

const Router = () => {
  return (
    <Routes>
      <Route element={<NavBar />}>
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/signup" element={<SignUpPage />} />
      </Route>
      <Route element={<NavBarMenu />}>
        <Route path="/profile" element={<>Profile</>} />
        <Route path="/" element={<>Feed</>} />
        <Route path="/explore" element={<>Explore</>} />
        <Route path="/bookmarks" element={<>Bookmarks</>} />
      </Route>
    </Routes>
  );
};

export { Router };