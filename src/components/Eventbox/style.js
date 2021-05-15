import styled from "styled-components";

// Redudant style use from ../Form/style.js since
// there are minor changes

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
  border: 2px solid #b5b5b5;
  max-width: 42rem;
  width: 100%;
  padding: 0.2rem;
  margin-top: 1rem;
  border-radius: 6px;
  background-color: #b2c2a3;
  font-size: 1.4rem;
`;

export const InputField = styled.input`
  border: 1px solid #b5b5b5;

  padding: 0.1rem 0.2rem;
  margin-bottom: 1rem;
  border-radius: 6px;
  background-color: #dfe3db;
  font-size: 1.2rem;
  outline: none;
`;

export const FormStyle = styled.form`
  display: block;
  position: relative;
  max-width: 420px;
  width: 100%;
`;

export const FormInner = styled.div`
  position: relative;
  display: block;
  background-color: #fff;
  padding: 30px 22px;
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: .1vh;
`;

export const FormGroupLabel = styled.label`
  color: black;
  font-size: 1.4rem;
  display: flex;
  & div {
    margin-left: auto;
  }
`;

export const ErrorMessage = styled.div`
  color: red;
  font-weight: bold;
`;
