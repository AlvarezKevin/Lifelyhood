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

export const FlexArticle = styled.article` {
  background-color: white;
  flex: 1 1;
  display: flex;
  align-items: center;
  justify-content: center;
  `;

export const FlexFooter = styled.footer`
  background-color: white;
  text-align: center;
  position: absolute;
  bottom: 0;
  padding: 1rem 20rem;
  font-size: 1.2rem;
`;

export const ButtonStyle = styled.input`
  width: 300px;
  height: 30px;
  border: none;
  border-radius: 17px;
  padding-left: 7px;
  color: blue;
  background-color: black;
`;

export const InputButton = styled.input`
  border-style: solid;
  width: 26rem;
  padding: 0.2rem;
  margin-top: 1rem;
  border-radius: 15px;
  background-color: #b2c2a3;
  font-size: 2rem;
`;

export const InputField = styled.input`
  border-style: solid;
  width: 26rem;
  padding: 0.2rem;
  margin-bottom: 1rem;
  border-radius: 15px;
  background-color: #dfe3db;
  font-size: 2rem;
  outline: none;
`;

export const FormStyle = styled.form`
  display: block;
  position: relative;
`;

export const FormInner = styled.div`
  position: relative;
  display: block;
  background-color: #fff;
  padding: 30px;
`;

export const FormGroup = styled.div`
  width: 300px;
  margin-bottom: 1vh;
`;

export const FormGroupLabel = styled.label`
  color: black,
  font-size: 1.5rem;
  float: left
`;

export const ErrorMessage = styled.div`
  color: red;
  font-weight: bold;
`;
