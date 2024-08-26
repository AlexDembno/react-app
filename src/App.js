import { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import LoaderComponent from "./components/Loader";
import HomePage from "./pages/HomePage";
import KidsPage from "./pages/KidsPage";
import NotFoundPage from "./pages/NotFoundPage";
import ParentsPage from "./pages/ParentsPage";
import AddKids from "./pages/AddKidsPage";
import RegisterPage from "./pages/AuthPages/RegistrationPage/RegistrationPage";
import LoginPage from "./pages/AuthPages/LoginPage/LoginPage";
import KidsLoginPage from "./pages/AuthPages/KidsLoginPage/KidsLoginPage";
import PublicRoute from "./utils/Routes/PublicRoute";
import PrivatRoute from "./utils/Routes/PrivatRoute";
import KidsPublicRoute from "./utils/Routes/KidsPublicRoute";
import KidsPrivatRoute from "./utils/Routes/KidsPrivatRoute";

function App() {
  return (
    <>
      <Suspense fallback={<LoaderComponent />}>
        <Routes>
          <Route element={<PublicRoute />}>
            <Route path="/registration" element={<RegisterPage />} />
            <Route path="/login" element={<LoginPage />} />
          </Route>
          <Route element={<PrivatRoute />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/parents" element={<ParentsPage />} />
            <Route path="*" element={<NotFoundPage />} />
            <Route path="/addkids" element={<AddKids />} />
          </Route>
          <Route element={<KidsPrivatRoute />}>
            <Route path="/kids" element={<KidsPage />} />
          </Route>
          <Route element={<KidsPublicRoute />}>
            <Route path="/kidslogin" element={<KidsLoginPage />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
