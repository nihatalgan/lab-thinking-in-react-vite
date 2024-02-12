function SearchBar(props) {
  const handleSelect = (e) => {
    // console.log("selected", e.target.value);
    props.filterProducts(e.target.value);
  };

  return (
    <div>
      <div>search</div>
      <input onChange={handleSelect}></input>
      <div>
        <input type="checkbox"></input>
        <p>Only show products in stock</p>
      </div>
    </div>
  );
}

export default SearchBar;
