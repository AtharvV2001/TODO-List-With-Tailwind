import React, { useState } from "react";
import DateComponent from "../date";
import TodoList from "../todoList";

const MainCard = () => {
  const [todoList, setTodoList] = useState([
    {
      id: "1",
      text: "Buy Computer Mouse",
      isComplete: true,
      isEditable: false,
    },
    {
      id: "2",
      text: "Watch 'Money Heist'",
      isComplete: false,
      isEditable: false,
    },
  ]);

  const handleAdd = () => {
    const newTodoItem = {
      id: Date.now(),
      text: "",
      isComplete: false,
      isEditable: true,
    };
    const updatedTodoList = [...todoList, newTodoItem];
    setTodoList(updatedTodoList);
  };

  const handleDelete = (id) => {
    const updatedTodoList = todoList.filter((todo) => todo.id !== id);

    setTodoList(updatedTodoList);
  };

  const handleToggle = (id) => {
    const updatedTodoList = todoList.map((todo) => {
      if (todo.id === id)
        return {
          ...todo,
          isComplete: !todo.isComplete,
        };
      else return todo;
    });

    setTodoList(updatedTodoList);
  };

  const handleUpdate = (id) => {
    const updatedTodoList = todoList.map((todo) => {
      if (todo.id === id)
        return {
          ...todo,
          isEditable: true,
        };
      else return todo;
    });

    setTodoList(updatedTodoList);
  };

  const handleUpdateConfirm = (id, updatedText) => {
    const updatedTodoList = todoList.map((todo) => {
      if (todo.id === id)
        return {
          ...todo,
          text: updatedText,
          isEditable: false,
        };
      else return todo;
    });

    setTodoList(updatedTodoList);
  };

  return (
    <div className="bg-white shadow-md px-5 pt-7 min-w-[500px] rounded-lg">
      <DateComponent />
      <TodoList
        list={todoList}
        onDelete={handleDelete}
        onUpdate={handleUpdate}
        onUpdateConfrim={handleUpdateConfirm}
        onToggle={handleToggle}
      />
      <div className="relative mt-14">
        <button
          onClick={handleAdd}
          className="bg-[#07CE6A] px-9 py-2 rounded-full text-white font-extrabold absolute left-1/2 -translate-y-1/2 -translate-x-1/2"
        >
          ADD
        </button>
      </div>
    </div>
  );
};

export default MainCard;
