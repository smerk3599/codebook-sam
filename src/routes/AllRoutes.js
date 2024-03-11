import { Routes, Route } from "react-router-dom";
import { HomePage, ProductsList, ProductDetail } from "../pages";

export const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductsList />} />
        <Route path={"/products/:id"} element={<ProductDetail />} />
      </Routes>
    </div>
  );
};
