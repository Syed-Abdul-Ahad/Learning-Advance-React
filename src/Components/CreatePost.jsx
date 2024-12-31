import { useContext, useEffect, useRef } from "react";
import { PostListContext } from "../Context/PostContext";
import { redirect, useNavigate ,Form} from "react-router-dom";

const CreatePost = () => {

  // const {addPost} = useContext(PostListContext)
  //const navigate = useNavigate();

  // const inputTitle = useRef()
  // const inputBody = useRef()
  // const inputTags = useRef()

  // const submitHandler = (event) =>{
  //   event.preventDefault()
  //   const titleValue  = inputTitle.current.value;
  //   const bodyValue = inputBody.current.value;
  //   const tags = inputTags.current.value.split(' ')
  //   const reactions = parseInt(Math.random()*100)
    

  //   if(titleValue == '' || bodyValue==''){
  //     return;
  //   }

  //   fetch("https://dummyjson.com/posts/add",{
  //     method: "POST",
  //     headers: {"content-Type":"application/json"},
  //     body: JSON.stringify({
  //       userId: '5',
  //       title: titleValue,
  //       body: bodyValue,
  //       tags: tags,
  //       reactions: {likes:reactions}
  //     })
  //   }).then(res=> res.json())
  //   .then((data)=> {
  //     console.log(data)
  //     addPost(data)
  //     navigate("/post-list")
  //   })

  //   inputTitle.current.value = '';
  //   inputBody.current.value = '';
  //   inputTags.current.value = '';
  // }



  return (
    <>
      <Form method="POST" className="Form" /*onSubmit={()=>{submitHandler(event)}}*/>
        <div className="mb-3">
          <label htmlFor="exampleInputTitle" className="form-label">
            Title
          </label>
          <input
            // ref={inputTitle}
            name="title"
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
            name="body"
            // ref={inputBody}
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
            name="tags"
            // ref={inputTags}
            type="text"
            className="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </Form>
    </>
  );
};



export async function createPostAction(data){

  const formData = await data.request.formData();
  const postData = Object.fromEntries(formData);
  postData.tags = postData.tags.split(' ');

  console.log(postData)

  fetch("https://dummyjson.com/posts/add",{
    method: "POST",
    headers: {"content-Type":"application/json"},
    body: JSON.stringify(postData)
  })
  .then(res=> res.json())
  .then((data)=> {
    console.log(data)
    // addPost(data)
  })

  return redirect("/post-list");
}


export default CreatePost;
