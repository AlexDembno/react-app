import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import LoaderComponent from "../../components/Loader";

const KidsPrivatRoute = () => {
  const { isKidsLogin } = useSelector((state) => state.kids);
  const { kidsAccessToken } = useSelector((state) => state.kids);

  if (!isKidsLogin && kidsAccessToken) {
    return <LoaderComponent />;
  }

  if (!isKidsLogin && !kidsAccessToken) {
    return <Navigate to="/login" />;
  }

  return <Outlet />;
};

export default KidsPrivatRoute;
