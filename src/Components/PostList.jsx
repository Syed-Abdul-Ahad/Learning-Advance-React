import { useContext, useEffect, useState } from "react";
import ViewPost from "./ViewPost";
import { PostListContext } from "../Context/PostContext";
import WelcomeMessage from "./WelcomeMessage";
import LoadingSpinner from "./LoadingSpinner";

const PostList = () => {

    const { postList, addInitialPosts } = useContext(PostListContext)

    const [fetching, setFetching] = useState(false)

    useEffect(()=>{

        if (postList.length > 0) {
            // If data already exists in context, skip fetching
            return;
        }
        
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
