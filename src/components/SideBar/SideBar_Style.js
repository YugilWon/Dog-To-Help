import styled from "styled-components";

export const SidebarWrapper = styled.div`
  position: fixed;
  top: 50%;
  right: 0;
  height: 80px;
  width: 25px;
  background-color: green;
  padding: 20px;
  z-index: 2;
`;

export const IconLink = styled.a`
  display: block;
  margin-bottom: 10px;
`;

export const IconImage = styled.img`
  width: 30px;
  height: 30px;
  margin-right: 10px;
`;
