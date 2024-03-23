import { useState } from "react";
import Header from "./components/Header";
import PostsList from "./components/PostsList";
import MobileCreatePostButton from "./components/MobileCreatePostButton";
import Modal from "./components/Modal";
import PostForm from "./components/PostForm";

const defaultPosts = [
  {
    id: 3,
    title: "Specific knowledge",
    description:
      "Specific knowledge is found by pursuing your genuine curiosity and passion rather than whatever is hot right now.",
    author: "@naval",
  },
  {
    id: 2,
    title: "Good time with my dad",
    description:
      "Drank a bottle of whiskey with my dad. Had a great conversation about physics and history. Life is beautiful. Love you all ❤️",
    author: "@lexfridman",
  },
  {
    id: 1,
    title: "Bad decisions",
    description:
      "The only thing worse than making a bad decision is sticking with it to try and prove to yourself you were right.",
    author: "@AlexHormozi",
  },
];

function App() {
  const [posts, setPosts] = useState(defaultPosts);
  const [isOpen, setIsOpen] = useState(false);
  const [postFormType, setPostFormType] = useState("creating");
  const [updatingPost, setUpdatingPost] = useState(undefined);

  const createPost = (postData) => {
    setPosts((prevPosts) => [
      { id: prevPosts.length + 1, ...postData },
      ...prevPosts,
    ]);
  };

  const updatePost = (updatedPost) => {
    setPosts((prevPosts) =>
      prevPosts.map((post) => (post.id === updatedPost.id ? updatedPost : post))
    );
  };

  const deletePost = (id) => {
    setPosts((prevPosts) => prevPosts.filter((post) => post.id !== id));
  };

  const openModal = () => setIsOpen(true);

  const closeModal = () => {
    setUpdatingPost(undefined);
    setIsOpen(false);
  };

  const handleCreatePostButtonClick = () => {
    setPostFormType("creating");
    openModal();
  };

  const handleUpdatePostButtonClick = (id) => {
    setPostFormType("updating");
    setUpdatingPost(posts.find((post) => post.id === id));
    openModal();
  };

  const handleDeletePostButtonClick = (id) => deletePost(id);

  return (
    <>
      <Header />
      <PostsList
        posts={posts}
        handleCreatePostButtonClick={handleCreatePostButtonClick}
        handleUpdatePostButtonClick={handleUpdatePostButtonClick}
        handleDeletePostButtonClick={handleDeletePostButtonClick}
      />
      <MobileCreatePostButton onClick={handleCreatePostButtonClick} />
      <Modal isOpen={isOpen} onClose={closeModal}>
        <PostForm
          type={postFormType}
          createPost={createPost}
          updatePost={updatePost}
          updatingPost={updatingPost}
          closeModal={closeModal}
        />
      </Modal>
    </>
  );
}

export default App;
