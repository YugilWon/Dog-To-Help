import React from "react";
import { CardContainer, Card, Title } from "../components/Card/Card_Style";
import { Link } from "react-router-dom";
import { useQuery } from "react-query";
import { getPosts } from "../api/posts";
import { useCookies } from "react-cookie";
import TopBar from "../components/TopBar/TopBar";
import { Image, CircularCard } from "../components/Card/Card_Style";

function MyPage() {
  const { isLoading, isError, data } = useQuery("Post", getPosts);
  const [cookies] = useCookies(["Id"]);

  if (isLoading) {
    return <h1>로딩중입니다....</h1>;
  }

  if (isError) {
    return <h1>오류가 발생했습니다....</h1>;
  }

  const userPosts = data.filter((post) => post.userId === cookies.Id);

  return (
    <>
      <TopBar mypage="mypage" />
      <CardContainer>
        {userPosts.map((post) => (
          <Link
            to={`/detail/${post.id}`}
            key={post.id}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <CircularCard>
              <Image src={post.imageUrl} alt="Post Image" />
            </CircularCard>
            <Title style={{ marginTop: "25px" }}>{post.name}</Title>
          </Link>
        ))}
      </CardContainer>
    </>
  );
}

export default MyPage;
