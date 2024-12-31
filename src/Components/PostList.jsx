import { useContext, useEffect, useState } from "react";
import ViewPost from "./ViewPost";
import { PostListContext } from "../Context/PostContext";
import WelcomeMessage from "./WelcomeMessage";
import LoadingSpinner from "./LoadingSpinner";

const PostList = () => {

    const { postList, fetching} = useContext(PostListContext)




    // const handleGetPostsClick = async () => {

    //     fetch("https://dummyjson.com/posts")
    //     .then((response)=>{
    //         if(!response.ok){
    //             throw new Error("Http error!")
    //         }
    //         return response.json()
    //     })
    //     .then((data)=>{
    //         console.log(data.posts)
    //     })
    //     .catch((err)=>{
    //         console.error("Error: ",err )
    //     })

  
    // }


  return (
    <>
        {fetching && <LoadingSpinner></LoadingSpinner>}
        {!fetching && postList.length === 0 && <WelcomeMessage /*onGetPostsClick={handleGetPostsClick}*//>}

        <div className="allPost">
           {!fetching && postList.map((item)=>{
                return <ViewPost key={item.id} data={item}/>
            })} 
            
      </div>
    </>
  );
};

export default PostList;
