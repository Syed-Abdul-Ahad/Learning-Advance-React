import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "bootstrap/dist/css/bootstrap.min.css"
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import CreatePost, { createPostAction } from './Components/CreatePost.jsx'
import PostList from './Components/PostList.jsx'

const router = createBrowserRouter([           // list of paths
  {
	path: "/", 
  element: <App/>,
	children:[
		{path: "/post-list", element: <PostList/>},
		{path:"/create-post", element: <CreatePost/>, action:createPostAction},
	],
},
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
