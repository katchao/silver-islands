import { useState } from "react";

import styles from "components/reusable/SearchBar.module.scss";

const SearchBar = ({ input, onInputChange }) => {
   return (
      <input
         value={input}
         placeholder={"Search..."}
         onChange={(e) => onInputChange(e.target.value)}
      />
   );
};

export default SearchBar;
