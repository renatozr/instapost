import PropTypes from "prop-types";
import styles from "../styles/Post.module.css";

function Post({ id, title, description, author, onUpdate, onDelete }) {
  return (
    <div>
      <div className={styles.card}>
        <div className={styles.titleWrapper}>
          <h3 className={styles.title}>{title}</h3>
          <p className={styles.author}>{author}</p>
        </div>
        <p className={styles.description}>{description}</p>
      </div>
      <div className={styles.buttonsWrapper}>
        <button
          type="button"
          onClick={() => onUpdate(id)}
          className={styles.button}
        >
          Update Post
        </button>
        <button
          type="button"
          onClick={() => onDelete(id)}
          className={styles.button}
        >
          Delete Post
        </button>
      </div>
    </div>
  );
}

Post.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  onUpdate: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default Post;
