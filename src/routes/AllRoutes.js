import { Routes, Route } from "react-router-dom";
import { HomePage, ProductsList } from "../pages";

export const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductsList />} />
      </Routes>
    </div>
  );
};
