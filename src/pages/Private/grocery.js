import React, { useEffect, useState } from "react";
import PrivateLayout from "../../Layout/Private";
import { TodoWrapper, TodoItem, AddTodo } from "../../components/Todos";
import { nanoid } from "nanoid";
import { Collapse } from "reactstrap";
import { ReactComponent as DownIcon } from "../../images/chevron-down.svg";
import { ReactComponent as UpIcon } from "../../images/chevron-up.svg";
import axios from "axios";
import { useAuthCtx } from "../../Hooks/useAuthContext";

// const URL = "http://127.0.0.1:8000/grocery"
const URL = "/grocery";

const Grocery = () => {
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
    <PrivateLayout title="Grocery List">
      <TodoWrapper>
        <AddTodo
          {...todo}
          textChangeHandler={textChangeHandler}
          addHandler={onAddTodo}
        />

        {/* Grocery List */}
        <h3 onClick={toggleUnCheckedCollapse}>
          {isUncheckedListOpen ? (
            <DownIcon width="18" />
          ) : (
            <UpIcon width="18" />
          )}{" "}
          Grocery List
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
        {/* COMPLETED Grocery List */}
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

export default Grocery;
