import { useReducer, createContext, useState } from "react";


export const PostListContext = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
  addInitialPosts: () => {}
});





const PostListProvider = ({ children }) => {

    const [postList, setPostList] = useState([])

  const addPost = (data) => {
    setPostList([data,...postList])
  };

  const deletePost = (title) => {
    const newPostList = postList.filter((item)=>{
        return item.title !== title
    })
    setPostList(newPostList)
  };


  const addInitialPosts = (posts) =>{
    setPostList(posts)
  }

  return (
    <PostListContext.Provider
      value={{
        postList: postList,
        addPost: addPost,
        deletePost: deletePost,
        addInitialPosts: addInitialPosts
      }}
    >
      {children}
    </PostListContext.Provider>
  );
};

export default PostListProvider;
