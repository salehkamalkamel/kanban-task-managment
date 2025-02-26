import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import SideBarState from "./contexts/SideBarState";
import MainDataContext from "./contexts/MainDataContext";
import ActiveBoardContext from "./contexts/ActiveBoard";
import { AuthProvider } from "./contexts/AuthProvider";
import ProtectedRoute from "./features/auth/ProtectedRoute";
import PageNotFound from "./pages/PageNotFound";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";

export default function App() {
  return (
    <MainDataContext>
      <SideBarState>
        <ActiveBoardContext>
          <AuthProvider>
            <BrowserRouter>
              <Routes>
                <Route path="login" element={<LoginPage />} />
                <Route path="signup" element={<SignUpPage />} />
                <Route path="*" element={<PageNotFound />} />
                <Route element={<ProtectedRoute />}>
                  <Route index element={<Home />} />
                  <Route path="/" element={<Home />} />
                </Route>
              </Routes>
            </BrowserRouter>
          </AuthProvider>
        </ActiveBoardContext>
      </SideBarState>
    </MainDataContext>
  );
}
