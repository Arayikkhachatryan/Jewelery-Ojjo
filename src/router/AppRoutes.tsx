import { Router } from "./router.d";
import { Routes, Route, useLocation } from "react-router-dom";
import HomePage from "../pages/HomePage";

const AppRoutes = () => {
  const location = useLocation();

  return (
    <Routes location={location} key={location.pathname}>
      <Route path={Router.HOME} element={<HomePage />} />;
    </Routes>
  );
};

export default AppRoutes;
