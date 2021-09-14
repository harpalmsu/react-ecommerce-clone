import { useState } from "react";
import "./Card.css";
import Modal from "../../Modal/Modal";

const Card = (props) => {
  const [show, setShow] = useState(false);
  const expand = (e, details) => {
    console.log("11111");
    console.log(details);
    setShow(true);
  };

  return (
    <div>
      <img
        onClick={(e) => expand(e, props.item)}
        className="card"
        src={props.item.primaryImageSmall}
        alt={props.item.title}
      />
      <Modal
        show={show}
        modalDetails={props.item}
        onClose={() => setShow(false)}
      />
    </div>
  );
};

export default Card;
