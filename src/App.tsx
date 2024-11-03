import React from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import { UserProvider, useUser } from "./context/UserContext";
import LoginPage from "./pages/login/LoginPage";
import DashboardPage from "./pages/dashboard/DashboardPage";
import DataProvider from "./context/DataContext";

const PrivateRoute: React.FC<{ children: JSX.Element }> = ({ children }) => {
  const { user } = useUser();
  return user ? children : <Navigate to="/login" />;
};

const App: React.FC = () => {
  return (
    <UserProvider>
      <DataProvider>
      <Router>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route
            path="/dashboard"
            element={
              <PrivateRoute>
                <DashboardPage />
              </PrivateRoute>
            }
          />
        </Routes>
      </Router>
      </DataProvider>     
    </UserProvider>
  );
};

export default App;
