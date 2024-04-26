import { Routes, Route } from "react-router-dom";
import {
  Login,
  Register,
  HomePage,
  ProductsList,
  ProductDetail,
  CartPage,
} from "../pages";

export const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="products" element={<ProductsList />} />
        <Route path={"products/:id"} element={<ProductDetail />} />
        <Route path={"login"} element={<Login />} />
        <Route path={"register"} element={<Register />} />
        <Route path={"cart"} element={<CartPage />} />
      </Routes>
    </div>
  );
};
