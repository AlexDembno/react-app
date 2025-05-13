import { Outlet } from "react-router-dom";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

import LoaderComponent from "../../components/Loader";

const PublicRoute = () => {
  const { isLogin } = useSelector((state) => state.auth);
  const { accessToken } = useSelector((state) => state.auth);

  const { isKidsLogin } = useSelector((state) => state.kids);
  const { kidsAccessToken } = useSelector((state) => state.kids);

  if (!isLogin && accessToken) {
    return <LoaderComponent />;
  }

  if (!isKidsLogin && kidsAccessToken) {
    return <LoaderComponent />;
  }

  if (isLogin && accessToken) {
    return <Navigate to="/parents" />;
  }

  if (isKidsLogin && kidsAccessToken) {
    return <Navigate to="/kids" />;
  }

  return <Outlet />;
};

export default PublicRoute;
