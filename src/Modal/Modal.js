import React, { useEffect } from "react";
import "./Modal.css";
import { CSSTransition } from "react-transition-group";
import { useState } from "react";

// add pm image to additional image array
// on change update new image

const Modal = (props) => {
  let pmImage = [props.modalDetails.primaryImage];
  let addImgs = [...pmImage, props.modalDetails.additionalImages];

  if (!props.show) return null;
  console.log("modal details", props.modalDetails);

  const updateMainImage = (e, item) => {
    // setMainImage(item);
  };
  const additionalImages =
    addImgs > 0
      ? addImgs.map((item, index) => {
          return (
            <div key={index}>
              <img
                onMouseOver={(e) => updateMainImage(e, item)}
                src={item}
                height="100px"
                width="100px"
              />
            </div>
          );
        })
      : null;
  return (
    <CSSTransition
      in={props.show}
      unmountOnExit
      timeout={{ enter: 0, exit: 300 }}
    >
      <div
        className={`modal ${props.show ? "show" : ""}`}
        onClick={props.onClose}
      >
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
          <div className="modal-header">
            <h4 className="modal-title">
              {props.modalDetails ? props.modalDetails.title : ""}
            </h4>
          </div>
          <div className="modal-body">
            <div className="modal-img">
              <div className="additionalImgs">{additionalImages}</div>
              <div className="img-thumbnail"></div>

              <div className="pm-img">
                {props.modalDetails ? (
                  <img src={pmImage} className="pm-img-dim" />
                ) : (
                  <div>"No Image Found"</div>
                )}
              </div>
              <div className="img-desc">
                {props.modalDetails ? (
                  <div>Department: {props.modalDetails.department}</div>
                ) : null}
                {props.modalDetails ? (
                  <div>Culture: {props.modalDetails.culture}</div>
                ) : null}
                {props.modalDetails ? (
                  <div>Price: ${props.modalDetails.price} </div>
                ) : null}
              </div>
            </div>
          </div>
          <div className="modal-footer">
            <button className="button" onClick={props.onClose}>
              Close
            </button>
          </div>
        </div>
      </div>
    </CSSTransition>
  );
};

export default React.memo(Modal);
