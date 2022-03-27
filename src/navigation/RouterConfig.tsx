import { Routes, Route } from "react-router-dom";
import Home from "pages/Home/index";
import { NotFound } from "navigation/NotFound";
// import { AUTH_PAGE1 } from "navigation/CONSTANTS";
// import { AuthorizedPage1 } from "pages/AuthorizedPage1";
// import PrivateRoute from "./Auth/PrivateRoute";

export const RouterConfig = () => {
  return (
    <div>
      <Routes>
        {/* List all public routes here */}
        <Route path="/" element={<Home />} />

        {/* List all private/auth routes here */}
        {/* <PrivateRoute path={AUTH_PAGE1}>
          <AuthorizedPage1 />
        </PrivateRoute> */}

        {/* List a generic 404-Not Found route here */}
        {/* <Route path="*">
          <NotFound />
        </Route> */}
      </Routes>
    </div>
  );
};
