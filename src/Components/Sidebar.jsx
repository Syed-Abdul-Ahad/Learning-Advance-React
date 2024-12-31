import { Link } from "react-router-dom";

const Sidebar = ({ selectedTab , setSelectedTab}) => {


    const handleOnClick = (tabName) =>{
        setSelectedTab(tabName)
    }

  return (
    <div className="d-flex flex-column p-3 m-3 bg-body-tertiary Sidebar" style={{width:"150px"}}>
    <ul className="nav nav-pills d-flex flex-column mb-auto">
      <li className="nav-item" onClick={()=>{handleOnClick("CreatePost")}}>
        <Link to="/create-post" className={`nav-link ${selectedTab === "CreatePost" && 'active'}`} aria-current="page">
          Create Post
        </Link>
      </li>
      <li onClick={()=>{handleOnClick("ViewPost")}}>
        <Link to="/post-list" className={`nav-link ${selectedTab === "ViewPost" && 'active'}`} >
          View Posts
        </Link>
      </li>
    </ul>
    </div>
  );
};

export default Sidebar;
