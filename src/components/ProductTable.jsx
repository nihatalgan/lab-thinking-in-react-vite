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

          <ProductRow product={props.product} />
        </tbody>
      </table>
    </div>
  );
}

export default ProductTable;
