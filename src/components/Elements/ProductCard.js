import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../../context";
import { Rating } from "./Rating";

export const ProductCard = (/**{product} */) => {
  /**   const { cartList, addToCart, removeFromCart } = useCart();
  const [inCart, setInCart] = useState(false);
  const { id, name, overview, poster, price, rating, best_seller } = product;*/

  /**   useEffect(() => {
    const productInCart = cartList.find((item) => item.id === product.id);

    if (productInCart) {
      setInCart(true);
    } else {
      setInCart(false);
    }
  }, [cartList, product.id]);*/

  return (
    <div className="m-3 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
      <Link to={`/products/`} className="relative">
        {/**
      {best_seller && (
          <span className="absolute top-4 left-2 px-2 bg-orange-500 bg-opacity-90 text-white rounded">
            Best Seller
          </span>
        )} */}
        <span className="absolute top-4 left-2 px-2 bg-orange-500 bg-opacity-90 text-white rounded">
          boo
        </span>
        <img
          className="rounded-t-lg w-full h-64"
          src="assets/images/10001.avif"
          alt="Image"
        />
      </Link>
      <div className="p-5">
        <Link to={`/products/`}>
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Half{/** {name} */}
          </h5>
        </Link>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {/**{overview} */}Amet reprehenderit commodo excepteur nostrud ipsum
          deserunt eiusmod consectetur labore quis cupidatat pariatur officia.
          Voluptate fugiat ipsum anim Lorem amet aliquip ad deserunt adipisicing
          in fugiat nisi sit reprehenderit. Elit cillum non esse laboris
          occaecat consectetur. Adipisicing proident excepteur occaecat ut
          consectetur esse aliquip nostrud id. Ut elit aliqua exercitation ad
          incididunt id anim qui laborum. Mollit nisi quis nostrud eiusmod
          deserunt velit occaecat sit cupidatat dolor consectetur.
        </p>

        <div className="flex items-center my-2">
          2{/**{<Rating rating={rating} />} */}
        </div>

        <p className="flex justify-between items-center">
          <span className="text-2xl dark:text-gray-200">
            <span>$</span>
            <span>45{/** {price} */}</span>
          </span>
          {/**
        {!inCart && (
            <button
              onClick={() => addToCart(product)}
              className={`inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 ${
                product.in_stock ? "" : "cursor-not-allowed"
              }`}
              disabled={product.in_stock ? "" : "disabled"}
            >
              Add To Cart <i className="ml-1 bi bi-plus-lg"></i>
            </button>
          )} */}
          {/**
        {inCart && (
            <button
              onClick={() => removeFromCart(product)}
              className={`inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-red-600 rounded-lg hover:bg-red-800 ${
                product.in_stock ? "" : "cursor-not-allowed"
              }`}
              disabled={product.in_stock ? "" : "disabled"}
            >
              Remove Item <i className="ml-1 bi bi-trash3"></i>
            </button>
          )} */}
          <button
            className={`inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-red-600 rounded-lg hover:bg-red-800`}
          ></button>
        </p>
      </div>
    </div>
  );
};
