import PropTypes from "prop-types";
import styles from "./SearchBar.module.scss";

const SearchBar = ({ input, onInputChange }) => {
   return (
      <div className={styles.Wrapper}>
         <input
            value={input}
            placeholder={"Search..."}
            onChange={(e) => onInputChange(e.target.value)}
         />
         <i className={`material-icons ${styles.SearchIcon}`}>search</i>
      </div>
   );
};

SearchBar.propTypes = {
   onInputChange: PropTypes.func.isRequired,
   input: PropTypes.string,
};

export default SearchBar;
