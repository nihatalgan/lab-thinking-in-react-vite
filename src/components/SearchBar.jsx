function SearchBar(props) {
  const handleSelect = (e) => {
    // console.log("selected", e.target.value);
    props.filterProducts(e.target.value);
  };

  const handleCheck = (e) => {
    // console.log(e.target.checked);
    props.checkProducts(e.target.checked);
  };

  return (
    <div>
      <div>search</div>
      <input onChange={handleSelect}></input>
      <div>
        <input type="checkbox" onChange={handleCheck}></input>
        <p>Only show products in stock</p>
      </div>
    </div>
  );
}

export default SearchBar;
