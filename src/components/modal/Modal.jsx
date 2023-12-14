import { createPortal } from "react-dom";
import { useEffect } from "react";
import { ReactComponent as CloseMenuIcon } from "../../images/close.svg";
import styles from './Modal.module.scss'

const modalRoot = document.querySelector( '#modal-root' )

export const Modal = ( { onClose, children } ) => {
  const handlePressEscape = ( e ) => {
    if (e.code === "Escape") {
      onClose()
    }
  }

  const handleBackdropClick = ( e ) => {
    if (e.currentTarget === e.target || e.code === "Escape") {
      onClose()
    }
  }

  useEffect( () => {
    window.addEventListener( 'keydown', handlePressEscape );

    return () => (window.removeEventListener( 'keydown', handlePressEscape ))
  }, [] );

  return createPortal(
    <>
      <div
        className={styles.modalBackdrop}
        onClick={handleBackdropClick}
      >
        <button
          type='button'
          onClick={() => onClose()}
          className={styles.closeIcon}
        >
          <CloseMenuIcon />
        </button>
        <div className={styles.modalContent}>
          {children}
        </div>
      </div>
    </>, modalRoot
  )
}