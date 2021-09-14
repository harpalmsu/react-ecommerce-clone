import React from "react";
import Card from "../Card/Card";
import "./GridContainer.css";

const GridContainer = (props) => {
  const display = props.gridStyle;
  const productList = props.productList.map((item) => {
    return item ? <Card item={item} key={item.objectID} /> : null;
  });

  return (
    <div className={display ? "gridContainer" : "listContainer"}>
      {" "}
      {productList}{" "}
    </div>
  );
};
export default React.memo(GridContainer);
