import React from "react";
import { Link } from "react-router-dom";
import { TopBarWrapper, Title, ButtonWrapper } from "./TopBar_Style";
import SignUp from "../SignUp/SignUp";
import SignIn from "../SignIn/SignIn";

function TopBar({ mypage }) {
  return (
    <>
      <TopBarWrapper page={mypage ? mypage : ""}>
        <Title>
          <Link
            to="/"
            style={{
              textDecoration: "none",
              color: "inherit",
              fontFamily: "OKDDUNG, sans-serif",
              fontSize: "50px",
            }}
          >
            도와줄개
          </Link>
        </Title>
        <ButtonWrapper>
          <SignIn />
          <SignUp />
        </ButtonWrapper>
      </TopBarWrapper>
    </>
  );
}

export default TopBar;
