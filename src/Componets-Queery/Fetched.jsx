import { ArrowBackIcon, ArrowForwardIcon, Search2Icon } from "@chakra-ui/icons";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import React from "react";
import {  useSearchParams } from "react-router-dom";
import Category from "./Category";
import debounce from "lodash.debounce";
import Products from "./Products";

const Fetched = () => {
  const [searchPrams, setsearchPrams] = useSearchParams({
    limit: 4,
    skip: 0,
    search: '',
    category: ''
  });

  const Limit = parseInt(searchPrams.get("limit") || 4);
  const skip = parseInt(searchPrams.get("skip") || 0);
  const category = searchPrams.get("category") || "";
  const search = searchPrams.get("search") || "";

  const HandleMove = (LimitCount) => {
    const newSkip = Math.max(skip + LimitCount, 0);
    setsearchPrams({ limit: Limit, skip: newSkip, search, category });
  };
  const FetchData = async () => {
    let baseURL = process.env.REACT_APP_API_BASE_URL;
    let url = `${baseURL}/products?limit=${Limit}&skip=${skip}`;

    if (category) {
      url = `${baseURL}/products/category/${category}?limit=${Limit}&skip=${skip}`;
    }
    
    if (search) {
      url = `${baseURL}/products/search?limit=${Limit}&skip=${skip}&q=${search}`;
    }

    const response = await fetch(url);
    const products = await response.json();
    return products;
    
  };

  const {
    isLoading: productsLoading,
    error: productsError,
    data: product,
  } = useQuery({
    queryKey: ["products", Limit, skip, search, category],
    queryFn: FetchData,
    staleTime: Infinity,
    placeholderData: keepPreviousData
  });



  if (productsLoading)
    return (
      <h2 className="text-2xl font-bold ml-[44rem] mt-80 tracking-tight text-gray-900">
        Loading...
      </h2>
    );
  if (productsError)
    return (
      <div className="text-2xl font-bold tracking-tight text-gray-100">
        Error: {productsError.message}
      </div>
    );

  return (
    <>
      <div className="bg-slate-700 border-t-2 border-white min-h-screen">
        <div className="mx-auto max-w-2xl px-4 py-6 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h2 className="text-4xl font-bold tracking-tight text-gray-100 mb-10 text-center border-b-2 border-gray-600 pb-4">
            Products
          </h2>

          <div className="flex items-center mb-6 space-x-[18rem]">
            <div className="relative w-1/2">
              <input
                onChange={debounce((e) => {
                  setsearchPrams({ limit: Limit, skip: 0, search: e.target.value, category });
                }, 900)}
                type="text"
                placeholder="Search products..."
                className="p-2 rounded-lg border bg-slate-700 text-white border-gray-300 w-full pl-2"
              />
              <Search2Icon
                style={{
                  color: "white",
                  marginLeft: "35rem",
                }}
                className="absolute  top-1/2 left-3 transform -translate-y-1/2 "
              />
            </div>

            <Category setsearchPrams={setsearchPrams}/>
          </div>

          <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            <Products product={product}/>
          </div>

          <div className="flex justify-between mt-10">
            <button
              disabled={skip < Limit}
              onClick={() => {
                HandleMove(-Limit);
              }}
              className="px-4 py-2 bg-blue-400 text-gray-200 rounded-lg shadow-md"
            >
              <ArrowBackIcon /> Previous
            </button>
            <button
            disabled={product?.total <= skip + Limit}
              onClick={() => {
                HandleMove(Limit);
              }}
              className="px-4 py-2 bg-blue-400 text-gray-200 rounded-lg shadow-md"
            >
              Next <ArrowForwardIcon />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Fetched;

