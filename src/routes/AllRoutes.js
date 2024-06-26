import { Routes, Route } from "react-router-dom";
import {
  Login,
  Register,
  HomePage,
  ProductsList,
  ProductDetail,
  CartPage,
  OrderPage,
  DashboardPage,
} from "../pages";
import { ProtectedRoute } from "./ProtectedRoute";

export const AllRoutes = () => {
  const token = true;

  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="products" element={<ProductsList />} />
        <Route path="products/:id" element={<ProductDetail />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route
          path="cart"
          element={
            <ProtectedRoute>
              <CartPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="order-summary"
          element={
            <ProtectedRoute>
              <OrderPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="dashboard"
          element={
            <ProtectedRoute>
              <DashboardPage />
            </ProtectedRoute>
          }
        />
      </Routes>
    </div>
  );
};
