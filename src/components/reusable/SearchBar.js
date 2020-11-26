import PropTypes from "prop-types";
import styles from "./SearchBar.module.scss";

const SearchBar = ({ input, onInputChange }) => {
   return (
      <input
         value={input}
         placeholder={"Search..."}
         onChange={(e) => onInputChange(e.target.value)}
      />
   );
};

SearchBar.propTypes = {
   onInputChange: PropTypes.func.isRequired,
   input: PropTypes.string,
};

export default SearchBar;
