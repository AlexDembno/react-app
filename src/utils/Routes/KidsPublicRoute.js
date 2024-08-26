import { Outlet } from "react-router-dom";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

import LoaderComponent from "../../components/Loader";

const KidsPublicRoute = () => {
  const { isKidsLogin } = useSelector((state) => state.kids);
  const { kidsAccessToken } = useSelector((state) => state.kids);

  if (!isKidsLogin && kidsAccessToken) {
    return <LoaderComponent />;
  }

  if (isKidsLogin && kidsAccessToken) {
    return <Navigate to="/kids" />;
  }

  return <Outlet />;
};

export default KidsPublicRoute;
