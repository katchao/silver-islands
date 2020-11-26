import { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import styles from "./Modal.module.scss";

const Modal = ({ title, show, closeModal, children }) => {
   const wrapperRef = useRef(null);

   const handleClickOutside = (e) => {
      if (
         wrapperRef &&
         wrapperRef.current &&
         !wrapperRef.current.contains(e.target)
      ) {
         closeModal();
      }
   };

   useEffect(() => {
      document.addEventListener("click", handleClickOutside, true);
      return () => {
         document.removeEventListener("click", handleClickOutside, true);
      };
   }, []);

   if (!show) {
      return null;
   }

   return (
      <div className={styles.ModalContainer}>
         <div className={styles.Modal} ref={wrapperRef}>
            <div className={styles.Header}>
               <h2>{title}</h2>
               <div className={styles.Clear}>
                  <i
                     onClick={closeModal}
                     className={`material-icons ${styles.ClearIcon}`}
                  >
                     clear
                  </i>
               </div>
            </div>
            <div className={styles.Content}>{children}</div>
         </div>
      </div>
   );
};

Modal.propTypes = {
   title: PropTypes.string,
   show: PropTypes.bool.isRequired,
   closeModal: PropTypes.func.isRequired,
};

export default Modal;
