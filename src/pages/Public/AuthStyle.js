import styled from "styled-components";

export const Home = styled.div`
  margin: 2px;
  padding: 0;
  box-sizing: border-box;
  font-size: 24px;
  color: black;
  text-align: center;
  display: flex;
  flex-direction: column;
  flex: 1 1 100%;
`;

export const FlexHeader = styled.header`
  background-color: white;
`;

export const LogoNav = styled.img`
  display: flex;
  float: left;
  padding-top: 2rem;
  padding-left: 2rem;
  cursor: pointer;
  width: 8vw;
  height: auto;
`;

export const FlexMain = styled.main`
  margin: 0;
  display: flex;
  padding-top: 3%;
  padding-bottom: 3%;
`;

export const FlexArticle = styled.article`
  background-color: white;
  flex: 1 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const FlexFooter = styled.footer`
  background-color: white;
  text-align: center;

  padding: 1rem 2rem;
  font-size: 1.4rem;
  max-width: 620px;
  margin: auto;
  margin-top: auto;
  margin-bottom: 0;
`;

export const ButtonStyle = styled.input`
  width: 300px;
  height: 30px;
  border: none;
  border-radius: 17px;
  color: blue;
  background-color: black;
`;
