import { useReducer, createContext, useState, useEffect} from "react";


export const PostListContext = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
  fetching: false
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



  const [fetching, setFetching] = useState(false)

  useEffect(()=>{
      
      setFetching(true)  // making loading state true

      const controller = new AbortController();
      const signal = controller.signal;

      const fetchData = async ()=>{
          try{
              const response = await fetch("https://dummyjson.com/posts",{signal})
              const data = await response.json()
              if(!response.ok){
                  throw new Error("Http error occured", response.status)
              }
              console.log(data.posts)
              addInitialPosts(data.posts)
              setFetching(false) // making loading state false
          }
          catch(err){
              console.log(err)
          }
      }
      fetchData();

      return ()=>{
          console.log("cleaning up")
          controller.abort();
      }
  },[])


  return (
    <PostListContext.Provider
      value={{
        postList: postList,
        addPost: addPost,
        deletePost: deletePost,
        fetching: fetching
      }}
    >
      {children}
    </PostListContext.Provider>
  );
};

export default PostListProvider;
