import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import api from "../axios/api";
import { Button } from "../styled-components/Button/Button_Style";
import TopBar from "../components/TopBar/TopBar";
import { updateMetadata } from "firebase/storage";
import { useCookies } from "react-cookie";
import UpdatePost from "../components/UpdatePost/UpdatePost";
import { useNavigate } from "react-router-dom";
import uuid from "react-uuid";
import {
  DetailContainer,
  DetailCard,
  SpeciesWrapper,
  Title,
  VideoWrapper,
  Video,
  ImageWrapper,
  Image,
  BodyWrapper,
  Body,
  CautionWrapper,
  CommentContainer,
  CommentInput,
} from "./DetailPage-styled/Detail-style";

function DetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState([]);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");
  const [editingCommentId, setEditingCommentId] = useState(null);
  const [editingComment, setEditingComment] = useState("");
  const [cookies] = useCookies(["Id"]);

  const userId = cookies.Id;

  const fetchPost = async () => {
    const { data } = await api.get(`/Post/${id}`);
    console.log(data);

    setPost(data);
  };

  const fetchComments = async () => {
    console.log("코멘트 불러올때 id의 값", id);
    const response = await api.get(`/Comments`);
    const commentData = response.data;
    console.log(commentData);
    setComments(commentData);
  };

  //삭제 함수
  const onDeleteButtonClickHandler = async (id) => {
    if (userId && userId === post.userId) {
      await api.delete(`/Post/${id}`);
      setPost((prevPost) => prevPost.filter((item) => item.id !== id));
      alert("삭제가 완료되었습니다!");
      navigate(`/`);
    } else {
      alert("해당 글을 삭제할 수 있는 권한이 없습니다!");
    }
  };

  useEffect(() => {
    fetchPost();
    fetchComments();
  }, []);

  //코멘트 저장 함수
  const onSaveComment = async () => {
    try {
      if (newComment.trim() === "") {
        return;
      }
      const response = await api.post(`/Comments`, {
        id: uuid(),
        postId: id,
        comment: newComment,
      });
      fetchComments();
      setNewComment("");
    } catch (error) {
      console.log("댓글 저장 중 오류가 발생했습니다!", error);
    }
  };

  const CommentDeleteBtn = async (id) => {
    await api.delete(`/Comments/${id}`);
    setComments((prevComment) => prevComment.filter((item) => item.id !== id));
    alert("삭제가 완료되었습니다!");
  };

  const CommentUpdateBtn = (id) => {
    const comment = comments.find((comment) => comment.id === id);
    setEditingCommentId(id);
    setEditingComment(comment.comment);
  };

  const onSaveEditingComment = async (id) => {
    try {
      const response = await api.patch(`/Comments/${id}`, {
        comment: editingComment,
      });
      const updatedComment = response.data;
      setComments((prevComments) =>
        prevComments.map((comment) =>
          comment.id === updatedComment.id ? updatedComment : comment
        )
      );
      setEditingCommentId(null);
      setEditingComment("");
    } catch (error) {
      console.log("댓글 수정 중 오류가 발생했습니다!", error);
    }
  };

  const filterdComment = comments.filter((item) => item.postId === id);

  return (
    <>
      <TopBar />
      <Button onClick={() => onDeleteButtonClickHandler(post.id)}>
        삭제하기
      </Button>
      <UpdatePost post={post} onUpdateButtonClickHandler={fetchPost} />
      <DetailContainer>
        <DetailCard>
          <SpeciesWrapper>
            <Title>{post.species}</Title>
          </SpeciesWrapper>
          {post.videoUrl && (
            <VideoWrapper>
              <Video src={post.videoUrl} controls />
            </VideoWrapper>
          )}

          {post.imageUrl && (
            <ImageWrapper>
              <Image src={post.imageUrl} alt="Post Image" />
            </ImageWrapper>
          )}
          <BodyWrapper>
            <Title>우리 {post.name}는요!</Title>
            <br />
            <Body>{post.body}</Body>
            <br />
          </BodyWrapper>
          <CautionWrapper>
            <Title>신경써주세요!</Title>
            <Body>{post.caution}</Body>
          </CautionWrapper>
          <CommentContainer>
            {filterdComment.map((comment) => (
              <div key={comment.id}>
                {editingCommentId === comment.id ? (
                  <>
                    <input
                      type="text"
                      value={editingComment}
                      onChange={(e) => setEditingComment(e.target.value)}
                    />
                    <Button onClick={() => onSaveEditingComment(comment.id)}>
                      저장
                    </Button>
                  </>
                ) : (
                  <>
                    {comment.comment}
                    <Button onClick={() => CommentDeleteBtn(comment.id)}>
                      삭제
                    </Button>
                    <Button onClick={() => CommentUpdateBtn(comment.id)}>
                      수정
                    </Button>
                  </>
                )}
              </div>
            ))}
            <CommentInput
              type="text"
              placeholder="댓글을 입력하세요"
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
            />
            <Button onClick={onSaveComment}>댓글 추가</Button>
          </CommentContainer>
        </DetailCard>
      </DetailContainer>
    </>
  );
}

export default DetailPage;
