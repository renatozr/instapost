import PropTypes from "prop-types";
import styles from "../styles/MobileCreatePostButton.module.css";

function MobileCreatePostButton({ onClick }) {
  return (
    <button type="button" onClick={onClick} className={styles.button}>
      Create Post
    </button>
  );
}

MobileCreatePostButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default MobileCreatePostButton;
