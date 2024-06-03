import React, { useState } from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import {
  transitions,
  positions,
  types,
  Provider as AlertProvider,
} from "react-alert";
import AlertTemplate from "react-alert-template-basic";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Pages/Home/Home";
import Footer from "./Components/Footer/Footer";
import Appoinment from "./Pages/Appoinment/Appoinment";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import UserProfile from "./Pages/UserProfile/UserProfile";
import DashboardApp from "./Pages/Dashboard/DashboardApp";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import MyAppoinment from "./Pages/Appoinment/MyAppoinment";
import DashboardHome from "./Pages/Dashboard/DashboardChildCompnent/DashboardHome";
import DashboardUser from "./Pages/Dashboard/DashboardChildCompnent/DashboardUser";
import DashboardServices from "./Pages/Dashboard/DashboardChildCompnent/DashboardServices";
import AdminRoute from "./AdminRoute/AdminRoute";
import Order from "./Pages/Order/Order";
import DashboardDoctors from "./Pages/Dashboard/DashboardChildCompnent/DashboardDoctors";
import DashboardContactUs from "./Pages/Dashboard/DashboardChildCompnent/DashboardContactUs";
import Error404 from "./Pages/Error404/Error404";

const options = {
  position: positions.TOP_RIGHT,
  timeout: 4000,
  offset: "90px",
  transition: transitions.FADE,
  type: types.SUCCESS,
};

function App() {
  const location = useLocation();

  const excludedRoutes = [
    "/dashboard",
    "/dashboard/users",
    "/dashboard/services",
    "/dashboard/doctors",
    "/dashboard/contact-us",
  ];
  return (
    <AlertProvider template={AlertTemplate} {...options}>
      {!excludedRoutes.includes(location.pathname) && <Navbar />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/appoinment"
          element={
            <PrivateRoute>
              <Appoinment />
            </PrivateRoute>
          }
        />

        <Route
          path="/order/:appoinmentId"
          element={
            <PrivateRoute>
              <Order />
            </PrivateRoute>
          }
        />

        <Route
          path="/my-appoinment"
          element={
            <PrivateRoute>
              <MyAppoinment />
            </PrivateRoute>
          }
        />

        <Route
          path="/user-profile"
          element={
            <PrivateRoute>
              <UserProfile />
            </PrivateRoute>
          }
        />

        <Route
          path="/dashboard"
          element={
            <AdminRoute>
              <DashboardApp />
            </AdminRoute>
          }
        >
          <Route
            path=""
            element={
              <AdminRoute>
                <DashboardHome />
              </AdminRoute>
            }
          />
          <Route
            path="users"
            element={
              <AdminRoute>
                <DashboardUser />
              </AdminRoute>
            }
          />
          <Route
            path="services"
            element={
              <AdminRoute>
                <DashboardServices />
              </AdminRoute>
            }
          />

          <Route
            path="doctors"
            element={
              <AdminRoute>
                <DashboardDoctors />
              </AdminRoute>
            }
          />

          <Route
            path="contact-us"
            element={
              <AdminRoute>
                <DashboardContactUs />
              </AdminRoute>
            }
          />
        </Route>
        <Route exact path="*" element={<Error404 />} />
      </Routes>
      {!excludedRoutes.includes(location.pathname) && <Footer />}
    </AlertProvider>
  );
}
export default App;
