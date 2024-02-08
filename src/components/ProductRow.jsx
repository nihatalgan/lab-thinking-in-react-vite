function ProductRow() {
  return (
    <div>
      <h1>nihat burak algan</h1>
      <table>
        <tbody>
          <tr>
            {/* <th>Picture</th> */}
            <th>Name</th>
            <th>Price</th>
          </tr>
          {/* {people.map((person) => {
            return (
              <tr key={person.id}>
                <td>
                  <img id="actor_img" src={person.pictureUrl} />
                </td>
                <td>{person.name}</td>
                <td>{person.popularity}</td>
                <td>{person.wonOscar && <p>🏆</p>}</td>
              
              </tr>
            );
          })} */}
          <th>ProductRow</th>
          <th>x</th>
          <th>y</th>
        </tbody>
      </table>
    </div>
  );
}

export default ProductRow;
