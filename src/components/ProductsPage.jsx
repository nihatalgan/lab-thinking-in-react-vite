import { useState } from "react";
import jsonData from "../data.json";
import SearchBar from "./SearchBar";
import ProductTable from "./ProductTable";

function ProductsPage() {
  const [products, setProducts] = useState(jsonData);
  const [productsData, setProductsData] = useState(jsonData);

  const filterProducts = (str) => {
    let filteredProducts;
    {
      filteredProducts = productsData.filter((product) => {
        return (
          product.name.slice(0, str.length).toLowerCase() === str.toLowerCase()
        );
      });
    }

    setProducts(filteredProducts);
  };

  return (
    <div>
      <h1>IronStore</h1>
      <SearchBar filterProducts={filterProducts} />
      <ProductTable product={products} />
    </div>
  );
}

export default ProductsPage;
