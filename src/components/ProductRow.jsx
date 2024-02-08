function ProductRow(props) {
  function checkStock(stock) {
    if (!stock) {
      return <span className="red">{props.product.name}</span>;
    } else {
      return <span className="black">{props.product.name}</span>;
    }
  }
  return (
    <tr>
      <th>ProductRow</th>
      <th>{checkStock(props.product.inStock)}</th>

      <th>{props.product.price}</th>
    </tr>
  );
}

export default ProductRow;
