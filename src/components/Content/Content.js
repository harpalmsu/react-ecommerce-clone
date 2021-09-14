import { useState } from "react";
import "./Content.css";
import Service from "../../api/api-Client";
import GridContainer from "../GridContainer/GridContainer";

export default function Content() {
  const [productList, setProductList] = useState([]);
  const [gridStyle, setGridStyle] = useState(true);
  const searchApi = Service.baseUrl + Service.searchUrl;
  const searchResult = (e) => {
    if (e.key === "Enter") {
      console.log(e.target.value);
      let searchUrl = searchApi + "?q=" + e.target.value;
      let artUrl = Service.baseUrl + Service.artUrl;
      fetch(searchUrl)
        .then((res) => res.json())
        .then((res) => (res.objectIDs ? res.objectIDs.splice(0, 20) : []))
        .then((res) => {
          console.log(res);
          let objPromise = res.map((objectID) => {
            return fetch(artUrl + objectID).then((res) => res.json());
          });

          Promise.all(objPromise)
            .then((res) => {
              return res.map((item) => {
                let price = Math.floor(Math.random() * 50) + 1;
                let temp = item;
                temp["price"] = price;
                return temp;
              });
            })
            .then((res) => {
              console.log("123", res);
              setProductList(res);
            });
        })
        .catch((err) => {
          console.log("Err: ", err);
        });
    }
  };
  const changeDisplay = (e) => {
    setGridStyle(!gridStyle);
  };
  return (
    <div className="content">
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div>
          <h1>Content</h1>
        </div>
        <div>
          <button onClick={changeDisplay}>{gridStyle ? "List" : "Grid"}</button>
        </div>
      </div>

      <div className="searchDiv">
        Search :
        <input
          className="searchBar"
          type="search"
          placeholder="Search..."
          onKeyPress={searchResult}
        />
      </div>
      {/* get the result based on search criteria */}
      {/* read the tags or year to filter the record based on it */}
      {/* filter component  make it seperate for mobile reusablility*/}
      <GridContainer productList={productList} gridStyle={gridStyle} />
    </div>
  );
}
