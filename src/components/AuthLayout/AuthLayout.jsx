import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchCurrent } from "../../redux/auth/authOperations";
// import { fetchKidsCurrent } from "../../redux/kids/kidsOperations";

const AuthLayout = ({ children }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCurrent());
  }, [dispatch]);

  // useEffect(() => {
  //   dispatch(fetchKidsCurrent());
  // }, [dispatch]);

  return <>{children}</>;
};

export default AuthLayout;
