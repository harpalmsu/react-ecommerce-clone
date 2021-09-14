import "./MainContainer.css";

import Content from "../Content/Content";
import Sidenav from "../Sidenav/Sidenav";

const MainContainer = () => {
  return (
    <div className="mainContainer">
      <Sidenav />
      <Content />
    </div>
  );
};

export default MainContainer;
