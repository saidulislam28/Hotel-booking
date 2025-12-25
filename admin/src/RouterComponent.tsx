import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import { Spin } from "antd";
import RoomFeatures from "./pages/Room-features";
import RoomService from "./pages/Room-service";
import BathroomService from "./pages/Bathroom-service";
import Room from "./pages/Room";
import RoomDetails from "./pages/Room/details";
import FoodItems from "./pages/Food-Items";

const Dashboard = lazy(() => import("./pages/Home"));
const Users = lazy(() => import("./pages/User"));
const Login = lazy(() => import("./layouts/AuthLayout/Login"));
const Testimonial = lazy(() => import("./pages/Testimonial"));
const Blogs = lazy(() => import("./pages/Blog"));
const Tags = lazy(() => import("./pages/Tags"));
const Booking = lazy(() => import("./pages/Booking"));
const RouterComponent: React.FC = () => {
  return (
    <Suspense
      fallback={
        <Spin
          size="large"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
          }}
        />
      }
    >
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/users" element={<Users />} />
        <Route path="/login" element={<Login />} />
        <Route path="/room" element={<Room />} />
        <Route path="/food-items" element={<FoodItems />} />
        <Route path="/room-features" element={<RoomFeatures />} />
        <Route path="/room-services" element={<RoomService />} />
        <Route path="/bathroom-features" element={<BathroomService />} />
        <Route path="/room-details/:id" element={<RoomDetails />} />
        <Route path="/testimonial" element={<Testimonial />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/tags" element={<Tags />} />
        <Route path="/booking" element={<Booking />} />
      </Routes>
    </Suspense>
  );
};

export default RouterComponent;
