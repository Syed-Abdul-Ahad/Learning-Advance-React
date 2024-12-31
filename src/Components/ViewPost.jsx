import { RiDeleteBin6Line } from "react-icons/ri";
import { PostListContext } from "../Context/PostContext";
import { useContext, useRef } from "react";


const ViewPost = ({ data }) => {

    const {deletePost} = useContext(PostListContext)


    const titleData = useRef()

    const handleOnClick = ()=>{
        const title = titleData.current.textContent;
        deletePost(title)
    }


  return (
    <>
      <div className="card single-post">
        <div className="card-body">
          <h5 className="card-title" ref={titleData}>{data.title}</h5>
          <p className="card-text">{data.body}</p>
          <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
            {data.reactions.likes}
          </span>
          <p className="card-text">
            {data.tags.map((element) => {
              return (
                <span className="badge text-bg-primary hashtags" key={element}>#{element} </span>
              );
            })}
          </p>
          <div className="delete"><RiDeleteBin6Line onClick={handleOnClick}/></div>
        </div>
      </div>
    </>
  );
};

export default ViewPost;
