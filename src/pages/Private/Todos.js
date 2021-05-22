import React, { useEffect, useState } from "react";
import PrivateLayout from "../../Layout/Private";
import { TodoWrapper, TodoItem, AddTodo } from "../../components/Todos";
import { nanoid } from "nanoid";
import { Collapse } from "reactstrap";
import { ReactComponent as DownIcon } from "../../images/chevron-down.svg";
import { ReactComponent as UpIcon } from "../../images/chevron-up.svg";

const Todos = () => {
  const [todo, setTodo] = useState({
    todoText: "",
    loading: false,
  });
  const [todoList, setTodoList] = useState([]);
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
          Tasks
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
