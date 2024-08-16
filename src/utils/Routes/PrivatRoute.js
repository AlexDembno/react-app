import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import LoaderComponent from "../../components/Loader";

const PrivatRoute = () => {
  const { isLogin } = useSelector((state) => state.auth);
  const { accessToken } = useSelector((state) => state.auth);
  console.log("isLogin", isLogin);
  if (!isLogin && accessToken) {
    return <LoaderComponent />;
  }

  if (!isLogin && !accessToken) {
    return <Navigate to="/login" />;
  }

  return <Outlet />;
};

export default PrivatRoute;
