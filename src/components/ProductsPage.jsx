import { useState } from "react";
import jsonData from "../data.json";
import SearchBar from "./SearchBar";
import ProductTable from "./ProductTable";

function ProductsPage() {
  const [products, setProducts] = useState(jsonData);

  return (
    <div>
      <h1>IronStore</h1>
      <SearchBar />
      {products.map((productData) => {
        return <ProductTable key={productData.id} product={productData} />;
      })}
    </div>
  );
}

export default ProductsPage;
