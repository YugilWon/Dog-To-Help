import React from "react";
import { Link } from "react-router-dom";
import { TopBarWrapper, Title, SubTitle } from "./TopBar_Style";
import SignUp from "../SignUp/SignUp";
import SignIn from "../SignIn/SignIn";

function TopBar() {
  return (
    <>
      <TopBarWrapper>
        <SubTitle>경기도 포천시 군내면 유교로 136번길 17</SubTitle>
        <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
          <Title>도와줄개</Title>
        </Link>
        <div>
          <SignIn />
          <SignUp />
        </div>
      </TopBarWrapper>
    </>
  );
}

export default TopBar;
