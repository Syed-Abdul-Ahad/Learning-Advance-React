import "./App.css";
import Header from "./Components/header";
import Footer from "./Components/footer";
import Sidebar from "./Components/Sidebar";
// import CreatePost from "./Components/CreatePost";
// import PostList from "./Components/PostList";
import PostListProvider from "./Context/PostContext";
import { useState } from "react";
import { Outlet } from "react-router-dom";

function App() {
  const [selectedTab, setSelectedTab] = useState("ViewPost");

  return (
    <>
      <PostListProvider>
        <Header></Header>
        <div className="Container">
          <Sidebar selectedTab={selectedTab} setSelectedTab={setSelectedTab}></Sidebar>
          {/* {selectedTab === "ViewPost" ? (
            <PostList></PostList>
          ) : (
            <CreatePost></CreatePost>
          )} */}
          <Outlet></Outlet>
        </div>
        <Footer></Footer>
      </PostListProvider>
    </>
  );
}

export default App;
