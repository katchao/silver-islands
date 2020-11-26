import React from "react";
import { Link } from "react-router-dom";
import latiosLogo from "images/latios-logo.svg";

import styles from "./Header.module.scss";

function Header() {
   return (
      <header className={styles.Header}>
         <div className={styles.LogoContainer}>
            <img src={latiosLogo} className={styles.Logo} alt="logo" />
         </div>

         <nav>
            <ul>
               <li>
                  <Link
                     className={`${styles.NavLink} ${styles.ArtLink}`}
                     to={`/`}
                  >
                     Art
                  </Link>
               </li>
               <li>
                  <Link
                     className={`${styles.NavLink} ${styles.IconsLink}`}
                     to="/icons"
                  >
                     Icons
                  </Link>
               </li>
               <li>
                  <Link
                     className={`${styles.NavLink} ${styles.TutorialLink}`}
                     to={`/tutorial`}
                  >
                     Tutorial
                  </Link>
               </li>
            </ul>
         </nav>
      </header>
   );
}

export default Header;
