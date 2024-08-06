import React from "react";
import { Link } from "react-router-dom";

const Products = ({product}) => {

  return <>
  {product.products?.map((data) => {
              return (
                <div
                  key={data.id}
                  className="group relative shadow-2xl shadow-white bg-gray-800 p-4 rounded-lg transition-transform transform hover:scale-105"
                >
                  <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                    <img
                      src={data.thumbnail}
                      alt={data.title}
                      className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                    />
                  </div>
                  <div className="mt-4 flex justify-between">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-300">
                        <Link to={`/React-queery/${data.id}`}>
                          <span
                            aria-hidden="true"
                            className="absolute inset-0"
                          ></span>
                          {data.title}
                        </Link>
                      </h3>
                      <p className="mt-1 text-sm text-gray-200">
                        {data.description}
                      </p>
                    </div>
                    <p className="text-lg font-medium text-green-400">
                      ${data.price}
                    </p>
                  </div>
                </div>
              );
            })}</>;
};

export default Products;
