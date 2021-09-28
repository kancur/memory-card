import '../styles/modal.css'
import { IoClose } from "react-icons/io5";
import React from 'react';
import ReactDOM from 'react-dom';

const Modal = ({isShowing, hide}) => isShowing ? ReactDOM.createPortal(
  <React.Fragment>
    <div className="modal-wrapper">
      <div className="modal">
        <h1>You won! You've remembered all the images.</h1>
        <IoClose onClick={hide} size="2em"/>
      </div>
    </div>
    </React.Fragment>, document.body
) : null;

export default Modal;