import React, { useEffect, useState } from "react";
import PrivateLayout from "../../Layout/Private";
import { TodoWrapper, TodoItem, AddTodo } from "../../components/Todos";
import { nanoid } from "nanoid";
import { Collapse } from "reactstrap";
import { ReactComponent as DownIcon } from "../../images/chevron-down.svg";
import { ReactComponent as UpIcon } from "../../images/chevron-up.svg";
import axios from "axios";
import { useAuthCtx } from "../../Hooks/useAuthContext";
//The private directory has all private pages (including this file) that are accessible only to the authenticated users. All pages are wrapped inside the private layout.
// Todo page has the list of user's todos
// AddTodo is the StyledComponent that contains the input field and button for saving the todo.
// TodoItem is a component that shows the todo title and show is todo completed or not.
// Collapse is a "Reactstrap" UI library component to just show or hide the list.
// TodoWrapper is also a simple div with stylecomponent for styling.

// const URL = "http://127.0.0.1:8000/todos"
const URL = "/todos";

const Todos = () => {
  const { user } = useAuthCtx();
  const [error, setError] = useState(null);
  const [todo, setTodo] = useState({
    todoText: "",
    loading: false,
  });
  const [todoList, setTodoList] = useState([]);

  useEffect(() => {
    getTodos();
  }, []);

  const getTodos = async () => {
    const response = await axios
      .get(URL, {
        headers: {
          Authorization: `Token ${user.token}`,
        },
      })
      .then(function (response) {
        // handle success
        console.log(response);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });
  };

  const postTodos = async (data) => {
    try {
      console.log("todo data", data);
      const response = await axios
        .post(URL, data, {
          headers: {
            Authorization: `Token ${user.token}`,
          },
        })
        .then(function (response) {
          // handle success
          console.log(response);
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        })
        .then(function () {
          // always executed
        });
    } catch (err) {
      console.log(`err`);
      setError(`${err.message}`);
    }
  };

  const setTodoDetail = (obj) => setTodo((o) => ({ ...o, ...obj }));
  const [open, setOpen] = useState({
    isCheckedListOpen: true,
    isUncheckedListOpen: true,
  });

  const textChangeHandler = (e) => {
    setTodoDetail({ todoText: e.target.value });
  };
  const onAddTodo = () => {
    try {
      setTodoDetail({ loading: true });

      setTimeout(() => {
        const shallowList = [
          {
            id: nanoid(),
            todoText: todo.todoText,
            isCompleted: false,
          },
          ...todoList,
        ];
        setTodoList(shallowList);

        setTodoDetail({ loading: false, todoText: "" });

        const todoData = {
          text: todo.todoText,
          completed: false,
        };
        postTodos(todoData);
      }, 200);
    } catch (err) {
      console.log(`err`, err);
      setTodoDetail({ loading: false });
    }
  };

  const onCompletionChange = (id, checked) => {
    setTodoList((list) => {
      return list.map((todo) => {
        if (todo.id === id) {
          return { ...todo, isCompleted: checked };
        } else {
          return todo;
        }
      });
    });
  };
  const onDelete = (id) => {
    setTodoList((list) => {
      return list.filter((todo) => todo.id !== id);
    });
  };

  const { isCheckedListOpen, isUncheckedListOpen } = open;
  const toggleCheckedCollapse = () =>
    setOpen((o) => ({ ...o, isCheckedListOpen: !o.isCheckedListOpen }));
  const toggleUnCheckedCollapse = () =>
    setOpen((o) => ({ ...o, isUncheckedListOpen: !o.isUncheckedListOpen }));
  return (
    <PrivateLayout>
      <TodoWrapper>
        <h2>
          <span>TODOS</span>
        </h2>
        <AddTodo
          {...todo}
          textChangeHandler={textChangeHandler}
          addHandler={onAddTodo}
        />

        {/* Task TODOS */}
        <h3 onClick={toggleUnCheckedCollapse}>
          {isUncheckedListOpen ? (
            <DownIcon width="18" />
          ) : (
            <UpIcon width="18" />
          )}{" "}
          Todo
        </h3>
        <Collapse isOpen={isUncheckedListOpen}>
          {todoList
            .filter((o) => !o.isCompleted)
            .map((o) => (
              <TodoItem
                key={o.id}
                {...o}
                onChange={onCompletionChange}
                onDelete={onDelete}
              />
            ))}
        </Collapse>
        <br />
        {/* COMPLETED TODOS */}
        <h3 onClick={toggleCheckedCollapse}>
          {isCheckedListOpen ? <DownIcon width="18" /> : <UpIcon width="18" />}{" "}
          Completed
        </h3>
        <Collapse isOpen={isCheckedListOpen}>
          {todoList
            .filter((o) => o.isCompleted)
            .map((o) => (
              <TodoItem
                key={o.id}
                {...o}
                onChange={onCompletionChange}
                onDelete={onDelete}
              />
            ))}
        </Collapse>
      </TodoWrapper>
    </PrivateLayout>
  );
};

export default Todos;
