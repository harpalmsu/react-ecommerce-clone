const ReactTable = () => {
  var productData = [
    {
      category: "Sporting Goods",
      price: "$49.99",
      stocked: true,
      name: "Football",
    },
    {
      category: "Sporting Goods",
      price: "$9.99",
      stocked: true,
      name: "Baseball",
    },
    {
      category: "Sporting Goods",
      price: "$29.99",
      stocked: false,
      name: "Basketball",
    },
    {
      category: "Electronics",
      price: "$99.99",
      stocked: true,
      name: "iPod Touch",
    },
    {
      category: "Electronics",
      price: "$399.99",
      stocked: false,
      name: "iPhone 5",
    },
    {
      category: "Electronics",
      price: "$199.99",
      stocked: true,
      name: "Nexus 7",
    },
  ];
  const searchQuery = (e) => {
    if (e.key === "Enter") {
      let q = e.target.value;
      console.log(q);
    }
  };

  return (
    <>
      <div className="filterableProductTable">
        <div className="searchBar">
          <input type="text" onKeyPress={searchQuery} />
        </div>
        <div className="productTable">
          <table>
            <thead>
              <th>Name</th>
              <th>Price</th>
            </thead>
            <tbody>
              <tr>
                <th>Electronics</th>
              </tr>
              {productData.map((item) => {
                if (item.category === "Electronics") {
                  return (
                    <tr key={item.name}>
                      <td>{item.name}</td>
                      <td>{item.price}</td>
                    </tr>
                  );
                }
              })}
              <tr>
                <th>Sporting Goods</th>
              </tr>
              {productData.map((item) => {
                if (item.category === "Sporting Goods") {
                  return (
                    <tr key={item.name}>
                      <td>{item.name}</td>
                      <td>{item.price}</td>
                    </tr>
                  );
                }
              })}
              {/* <tr className="productCategoryRow"></tr>
                <tr className="productRow"></tr> */}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};
export default ReactTable;
