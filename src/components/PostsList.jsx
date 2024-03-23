import PropTypes from "prop-types";
import CreatePostButton from "./CreatePostButton";
import Post from "./Post";
import styles from "../styles/PostsList.module.css";

function PostsList({
  posts,
  handleCreatePostButtonClick,
  handleUpdatePostButtonClick,
  handleDeletePostButtonClick,
}) {
  return (
    <div className={styles.postsList}>
      <CreatePostButton onClick={handleCreatePostButtonClick} />
      {posts.length > 0 ? (
        posts.map((post) => (
          <Post
            key={post.id}
            {...post}
            onUpdate={handleUpdatePostButtonClick}
            onDelete={handleDeletePostButtonClick}
          />
        ))
      ) : (
        <p className={styles.noPostsMessage}>
          There are currently no posts. Why not be the first to share something?
        </p>
      )}
    </div>
  );
}

PostsList.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    })
  ).isRequired,
  handleCreatePostButtonClick: PropTypes.func.isRequired,
  handleUpdatePostButtonClick: PropTypes.func.isRequired,
  handleDeletePostButtonClick: PropTypes.func.isRequired,
};

export default PostsList;
