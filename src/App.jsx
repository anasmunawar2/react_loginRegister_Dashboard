import Home from "./components/pages/Home";
import Layout from "./components/pages/layout";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Contact from "./components/pages/Contact";
import LoginReg from "./components/pages/auth/LoginReg";
import PasswordReset from "./components/pages/auth/PasswordReset";
import ResetPasswordForm from "./components/pages/auth/ResetPasswordForm";
import Dashboard from "./components/pages/Dashboard";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="Contact" element={<Contact />} />
            <Route path="login" element={<LoginReg />} />
            <Route path="passwordreset" element={<PasswordReset />} />
            <Route path="reset" element={<ResetPasswordForm />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
