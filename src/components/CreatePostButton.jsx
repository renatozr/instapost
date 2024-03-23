import PropTypes from "prop-types";
import styles from "../styles/CreatePostButton.module.css";

function CreatePostButton({ onClick }) {
  return (
    <button type="button" onClick={onClick} className={styles.button}>
      Create Post
    </button>
  );
}

CreatePostButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default CreatePostButton;
