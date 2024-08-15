import { useSelector } from "react-redux";
import LoaderComponent from "../../components/Loader";

const PrivatRoute = () => {
  const { isLogin } = useSelector((state) => state);
  console.log("isLogin", isLogin);
};

export default PrivatRoute;
