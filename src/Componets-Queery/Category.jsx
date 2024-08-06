import { useQuery } from "@tanstack/react-query";

const FetchCategories = async () => {
  const response = await fetch("https://dummyjson.com/products/categories");
  const data = await response.json();
  return data;
};
const Category = ({ setsearchPrams }) => {
  const {
    isLoading: categoriesLoading,
    error: categoriesError,
    data: categories,
  } = useQuery({
    queryKey: ["categories"],
    queryFn: FetchCategories,
  });
  if (categoriesLoading)
    return (
      <h2 className="text-2xl font-bold ml-[44rem] mt-80 tracking-tight text-gray-900">
        Loading...
      </h2>
    );
  if (categoriesError)
    return (
      <div className="text-2xl font-bold tracking-tight text-gray-100">
        Error: {categoriesError.message}
      </div>
    );

  return (
    <>
      <select
        className="p-2 rounded-lg border bg-slate-700 text-white border-gray-300 w-1/4"
        value={categories.name}
        onChange={(e) => {
          setsearchPrams((prev) => {
            prev.set("category", e.target.value);
            prev.delete("search")
            prev.set('skip', 0);
            return prev
          });
          
        }}
      >
        <option value="">Select Category</option>
        {categories.length > 0 ? (
          categories.map((categories, index) => (
            <option key={index} value={categories.name}>
              {categories.name}
            </option>
          ))
        ) : (
          <option>No categories available</option>
        )}
      </select>
    </>
  );
};

export default Category;

