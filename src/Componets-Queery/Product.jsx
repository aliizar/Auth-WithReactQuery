import { useQuery } from "@tanstack/react-query";
import React from "react";
import { Link, useParams } from "react-router-dom";
import "../CSS-Files/LandingPage.css";

const Product = () => {
  const { Productid } = useParams();

  const FetchData = async () => {
    const response = await fetch(`https://dummyjson.com/products/${Productid}`);
    const data = await response.json();
    return data;
  };

  const { isLoading, error, data } = useQuery({
    queryKey: ["product", Productid],
    queryFn: FetchData,
    staleTime: Infinity,
  });

  if (isLoading) return <div className="text-2xl font-bold text-gray-900 text-center mt-32">Loading...</div>;
  if (error) return <div className="text-2xl font-bold text-gray-100 text-center mt-32">Error: {error.message}</div>;

  return (
    <>
      <div className="bg-gray-900 min-h-screen flex flex-col justify-center items-center">
        <h1 className="text-4xl font-extrabold text-white mb-8 px-4 py-2 bg-blue-300 rounded-lg shadow-lg transition-transform transform hover:scale-110">
          {data.title}
        </h1>
        <div className="flex justify-center items-center w-full">
          <div className="shadow-xl shadow-blue-200 bg-gray-800 p-8 rounded-lg transition-transform transform hover:scale-105 relative">
            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:h-80">
              <img
                src={data.thumbnail}
                alt={data.title}
                className="h-full w-full object-cover object-center lg:h-full lg:w-full"
              />
            </div>
            <div className="mt-4 flex justify-between items-start">
              <div>
                <h3 className="text-lg font-semibold text-gray-100">
                  <div>
                    <span aria-hidden="true" className="absolute inset-0"></span>
                    {data.title}
                  </div>
                </h3>
                <p className="mt-2 text-sm text-gray-300">{data.description}</p>
              </div>
              <p className="text-lg font-medium text-green-400">${data.price}</p>
            </div>
            <Link
              to="/React-queery"
              className="block mt-6 text-center text-sm font-semibold text-blue-400 hover:text-blue-200 z-10 relative"
            >
              Back to Products
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
