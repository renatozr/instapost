import PropTypes from "prop-types";
import { useState } from "react";
import styles from "../styles/PostForm.module.css";

function PostForm({
  type,
  createPost,
  updatePost,
  updatingPost = { id: 0, title: "", description: "", author: "" },
  closeModal,
}) {
  const [title, setTitle] = useState(updatingPost.title);
  const [description, setDescription] = useState(updatingPost.description);
  const [author, setAuthor] = useState(updatingPost.author);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (type === "creating") {
      createPost({ title, description, author });
    }

    if (type === "updating") {
      updatePost({ id: updatingPost.id, title, description, author });
    }

    closeModal();
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <h2 className={styles.title}>{`${type[0].toUpperCase()}${type.slice(
        1
      )} post`}</h2>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
        required
        className={styles.input}
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        maxLength={140}
        rows={5}
        placeholder="Description"
        required
        className={styles.input}
      />
      <input
        type="text"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
        placeholder="Author"
        required
        className={styles.input}
      />
      <div className={styles.buttonsWrapper}>
        <button type="button" onClick={closeModal} className={styles.button}>
          Close
        </button>
        <button type="submit" className={styles.button}>
          Submit
        </button>
      </div>
    </form>
  );
}

PostForm.propTypes = {
  type: PropTypes.string.isRequired,
  createPost: PropTypes.func.isRequired,
  updatePost: PropTypes.func.isRequired,
  updatingPost: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
  }),
  closeModal: PropTypes.func.isRequired,
};

export default PostForm;
