
const Sidebar = ({ selectedTab , setSelectedTab}) => {


    const handleOnClick = (tabName) =>{
        setSelectedTab(tabName)
    }

  return (
    <div className="d-flex flex-column p-3 m-3 bg-body-tertiary Sidebar" style={{width:"150px"}}>
    <ul className="nav nav-pills d-flex flex-column mb-auto">
      <li className="nav-item" onClick={()=>{handleOnClick("CreatePost")}}>
        <a href="#" className={`nav-link ${selectedTab === "CreatePost" && 'active'}`} aria-current="page">
          Create Post
        </a>
      </li>
      <li onClick={()=>{handleOnClick("ViewPost")}}>
        <a href="#" className={`nav-link ${selectedTab === "ViewPost" && 'active'}`} >
          View Posts
        </a>
      </li>
    </ul>
    </div>
  );
};

export default Sidebar;
