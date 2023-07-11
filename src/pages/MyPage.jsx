import React from "react";
import { CardContainer, Card, Title } from "../components/Card/Card_Style";
import { Link } from "react-router-dom";
import { useQuery } from "react-query";
import { getPosts } from "../api/posts";
import { useCookies } from "react-cookie";
import TopBar from "../components/TopBar/TopBar";

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
      <TopBar />
      <br />
      <CardContainer>
        {userPosts.map((post) => (
          <Link
            to={`/detail/${post.id}`}
            key={post.id}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <Card>
              <div>
                <Title>{post.name}</Title>
              </div>
            </Card>
          </Link>
        ))}
      </CardContainer>
    </>
  );
}

export default MyPage;
