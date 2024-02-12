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

  const checkProducts = (check) => {
    console.log(check);
    let checkedProducts;
    if (check) {
      checkedProducts = productsData.filter((product) => {
        return product.inStock;
      });
    } else {
      console.log(check);
      checkedProducts = productsData.filter((product) => {
        return product;
      });
    }
    setProducts(checkedProducts);
  };

  return (
    <div>
      <h1>IronStore</h1>
      <SearchBar
        filterProducts={filterProducts}
        checkProducts={checkProducts}
      />
      <ProductTable product={products} />
    </div>
  );
}

export default ProductsPage;
