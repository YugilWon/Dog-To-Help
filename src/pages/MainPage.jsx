import React from "react";
import TopBar from "../components/TopBar/TopBar";
import PostCards from "../components/Card/PostCards";
import ShowCard from "../components/Card/ShowCard";
import SideBar from "../components/SideBar/SideBar";

function MainPage() {
  return (
    <>
      <TopBar />
      <PostCards />
      <ShowCard />
      <SideBar />
    </>
  );
}

export default MainPage;
