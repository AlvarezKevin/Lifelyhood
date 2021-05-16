import styled from "styled-components";
import { ReactComponent as CloseIcon } from "../../images/close.svg";

export const TodoWrapper = styled.div`
  margin: 0px auto;
  max-width: 720px;
  width: 100%;
  padding: 0px 1rem;
  padding-left: 70px;
  h2 {
    padding: 0px 1rem;
    font-weight: bold;
    /* display: inline-flex; */
    text-align: center;
    span {
      box-shadow: inset 0px -12px rgba(178, 194, 163, 0.5);
    }
  }

  h3 {
    cursor: pointer;
  }
`;
export const Item = styled.div`
  padding: 6px 1rem;
  border-bottom: 2px solid #ddd;
  display: flex;
  justify-content: space-between;
  label {
    display: flex;
    align-items: center;
    p {
      font-size: 1.6rem;
      font-weight: 600;
      text-decoration: ${(props) =>
        props.isCompleted ? "line-through" : "unset"};
      color: ${(props) => (props.isCompleted ? "#9f9f9f" : "#000")};
      margin: 0px;
      &:hover {
        text-decoration: none;
        color: unset;
      }
    }
  }

  /* The container */
  .container {
    display: block;
    position: relative;
    padding-left: 35px;
    cursor: pointer;
    font-size: 22px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    margin: 0px;
  }

  /* Hide the browser's default checkbox */
  .container input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }

  /* Create a custom checkbox */
  .checkmark {
    position: absolute;
    top: 0;
    left: 0;
    height: 22px;
    width: 22px;
    background-color: #eee;
    border: 2px solid #323232;
    border-radius: 4px;
  }

  /* On mouse-over, add a grey background color */
  .container:hover input ~ .checkmark {
    background-color: #ccc;
  }

  /* When the checkbox is checked, add a blue background */
  .container input:checked ~ .checkmark {
    /* background-color: rgba(178, 194, 163, 1); */
    background-color: #fff;
  }

  /* Create the checkmark/indicator (hidden when not checked) */
  .checkmark:after {
    content: "";
    position: absolute;
    display: none;
  }

  /* Show the checkmark when checked */
  .container input:checked ~ .checkmark:after {
    display: block;
  }

  .checkmark::after {
    left: 6px;
    top: 2px;
    width: 6px;
    height: 12px;
    border: solid black;
    border-width: 0 3px 3px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
  }

  & > span {
    display: none;
    width: 28px;
    height: 22px;
    cursor: pointer;
    svg {
      width: 100%;
      height: 100%;
      fill: #323232;
    }
  }
  &:hover {
    & > span {
      display: unset;
    }
  }
`;

const AddTodoWrapper = styled.div`
  display: flex;
  padding: 1rem 0px;
  justify-content: center;
  font-size: 1.4rem;
  input {
    padding: 0.4rem;
  }
  button {
    padding: 0.4rem;
    background: rgba(178, 194, 163, 1);
    outline: none;
    margin-left: 8px;
  }
`;

export const AddTodo = ({
  loading,
  addHandler,
  textChangeHandler,
  todoText,
}) => {
  return (
    <AddTodoWrapper>
      <input
        type="text"
        placeholder="Write todo"
        disabled={loading}
        onChange={textChangeHandler}
        value={todoText}
      />
      {loading ? (
        <span>wait..</span>
      ) : (
        <button onClick={addHandler}>Add</button>
      )}
    </AddTodoWrapper>
  );
};

export const TodoItem = ({ isCompleted, todoText, onChange, onDelete, id }) => {
  return (
    <Item isCompleted={isCompleted}>
      <label className="container">
        <input
          name="isCompleted"
          type="checkbox"
          checked={isCompleted}
          onChange={({ target: { checked } }) => onChange(id, checked)}
        />
        <span className="checkmark"></span>
        <p>{todoText}</p>
      </label>
      <span onClick={() => onDelete(id)}>
        <CloseIcon />
      </span>
    </Item>
  );
};
