import ProductRow from "./ProductRow";

function ProductTable(props) {
  return (
    <div>
      <table>
        <tbody>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Price</th>
          </tr>
          {props.product.map((productData) => {
            return <ProductRow key={productData.id} product={productData} />;
          })}
        </tbody>
      </table>
    </div>
  );
}

export default ProductTable;
