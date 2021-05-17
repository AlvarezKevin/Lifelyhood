import styled from "styled-components";
import { MdClose } from "react-icons/md";

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

export const ModalBackground = styled.div`
  width: 85%;
  height: 70%;
  background: rgba(0, 0, 0, 0.0);
  position: fixed;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
`;

export const ModalWrapper = styled.div`
  width: 330px;
  height: 542px;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background: #fff;
  display: grid;
  grid-template-columns: 1fr .2fr;
  position: relative;
  z-index: 10;
  border-radius: 10px;
`;

export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  line-height: 1.8;
`;

export const CloseModalButton = styled(MdClose)`
  cursor: pointer;
  position: absolute;
  top: 20px;
  right: 20px;
  width: 32px;
  height: 32px;
  padding: 0;
`;