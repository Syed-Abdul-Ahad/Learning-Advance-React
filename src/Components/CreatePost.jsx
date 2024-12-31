import { useContext, useRef } from "react";
import { PostListContext } from "../Context/PostContext";

const CreatePost = () => {

  const {addPost} = useContext(PostListContext)

  const inputTitle = useRef()
  const inputBody = useRef()
  const inputTags = useRef()

  const submitHandler = (event) =>{
    event.preventDefault()
    const titleValue  = inputTitle.current.value;
    const bodyValue = inputBody.current.value;
    const tags = inputTags.current.value.split(' ')
    const reactions = parseInt(Math.random()*100)
    
    const data = {
        title: titleValue,
        body: bodyValue,
        reactions: 7,
        tags: tags,
        reactions: {likes:reactions}
    }

    if(data.title == '' || data.body==''){
      return;
    }

    addPost(data)

    inputTitle.current.value = '';
    inputBody.current.value = '';
    inputTags.current.value = '';
  }



  return (
    <>
      <form className="Form" onSubmit={()=>{submitHandler(event)}}>
        <div className="mb-3">
          <label htmlFor="exampleInputTitle" className="form-label">
            Title
          </label>
          <input
            ref={inputTitle}
            type="text"
            className="form-control"
            id="exampleInputTitle"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Body
          </label>
          <input
            ref={inputBody}
            type="text"
            className="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Tags
          </label>
          <input
            ref={inputTags}
            type="text"
            className="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </>
  );
};

export default CreatePost;
