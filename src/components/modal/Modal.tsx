import React, { useEffect, useRef } from "react"
import { ModalProps } from "types/ModalProps"

import "../../assets/scss/components/modal/Modal.scss"

function Modal(props: ModalProps) {
  const modalRef = useRef(null)
  useEffect(() => {
    if (props.show) {
      modalRef.current.classList.add("visible")
    } else {
      modalRef.current.classList.remove("visible")
    }
  }, [props.show])

  return (
    <div className="backdrop" ref={modalRef}>
      <div className="modal">
        <p>{props.text}</p>
        <div className="btn-wrapper">
          <button className="btn btn--alt" onClick={props.onClose}>
            Cancel
          </button>
          <button className="btn" onClick={props.onConfirm}>
            Confirm
          </button>
        </div>
      </div>
    </div>
  )
}

export default Modal
