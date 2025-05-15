import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import LoaderComponent from "../../components/Loader";

const PrivatRoute = () => {
  const { isLogin } = useSelector((state) => state.auth);
  const { accessToken } = useSelector((state) => state.auth);

  // const { isKidsLogin } = useSelector((state) => state.kids);
  // const { kidsAccessToken } = useSelector((state) => state.kids);

  if (!isLogin && accessToken) {
    return <LoaderComponent />;
  }

  if (!isLogin && !accessToken) {
    return <Navigate to="/" />;
  }

  return <Outlet />;
};

export default PrivatRoute;
