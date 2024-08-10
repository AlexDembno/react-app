import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import KidsPage from "./pages/KidsPage";
import NotFoundPage from "./pages/NotFoundPage";
import ParentsPage from "./pages/ParentsPage";
import RegisterPage from "./pages/AuthPages/RegistrationPage/RegistrationPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/registration" element={<RegisterPage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/kids" element={<KidsPage />} />
        <Route path="/parents" element={<ParentsPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;
