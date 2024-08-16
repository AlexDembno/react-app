import { Outlet } from "react-router-dom";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

import LoaderComponent from "../../components/Loader";

const PublicRoute = () => {
  const { isLogin } = useSelector((state) => state.auth);
  const { accessToken } = useSelector((state) => state.auth);
  console.log("isLogin", isLogin);
  if (!isLogin && accessToken) {
    return <LoaderComponent />;
  }

  if (isLogin && accessToken) {
    return <Navigate to="/" />;
  }

  return <Outlet />;
};

export default PublicRoute;
