//import { useState } from 'react'
//import reactLogo from '../assets/react.svg'
import '../App.css'

// eslint-disable-next-line react/prop-types
function Modal({ isOpen, onClose }) {
  return (
    <div className="modal-wrapper" style={{ display: isOpen ? 'flex' : 'none' }}>
      <div className="modal">
        <div className="modal-content">
          <div className="modal-title">안녕하세요</div>
          <p>모달 내용은 어쩌고 저쩌고..</p>
          <div className="modal-close">
            <button onClick={() => { console.log("모달이 꺼짐"); onClose(); }}>닫기</button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Modal;