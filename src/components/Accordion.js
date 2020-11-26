import { useState } from "react";
import CSSTransitionGroup from "react-addons-css-transition-group";

import styles from "components/Accordion.module.scss";

function Accordion(props) {
   const [openStates, setOpenStates] = useState(
      Array(props.children.length).fill(false)
   );

   const handleClick = (e, index) => {
      const newOpen = [...openStates];
      newOpen[index] = !openStates[index];
      setOpenStates(newOpen);
   };

   return (
      <div className={styles.Accordion}>
         {props.children.map((child, i) => {
            return (
               <Section
                  key={i}
                  isOpen={openStates[i]}
                  onClick={(e) => handleClick(e, i)}
               >
                  {child}
               </Section>
            );
         })}
      </div>
   );
}

function Section(props) {
   const {
      isOpen,
      onClick,
      children: {
         props: { title },
      },
   } = props;

   const sectionProps = {
      className: `${styles.AccordionSection} ${styles.collapsed}`,
      onClick: onClick,
   };

   if (isOpen) {
      sectionProps.className = `${styles.AccordionSection} ${styles.expanded}`;
      sectionProps.onClick = null;
   }

   return (
      <section {...sectionProps}>
         <span className={styles.AccordionTitle} onClick={onClick}>
            {title}
         </span>
         <CSSTransitionGroup
            transitionName="slide"
            transitionEnterTimeout={300}
            transitionLeaveTimeout={300}
         >
            {isOpen && props.children}

            {isOpen && (
               <div className={styles.collapseSection} onClick={onClick}>
                  <span className={styles.collapseText}>collapse</span>
               </div>
            )}
         </CSSTransitionGroup>
      </section>
   );
}

export default Accordion;
