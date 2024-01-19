import React from "react";
import TodoItem from "../todoItem";
import { RxCrossCircled } from "react-icons/rx";

const TodoList = ({ list, onDelete, onUpdate, onToggle, onUpdateConfrim }) => {
  if (list.length === 0)
    return (
      <div className="mt-4 min-h-[300px] flex flex-col items-center justify-center gap-6">
        <RxCrossCircled size={'80px'} color="#CBCACF" />
        No List
      </div>
    );

  return (
    <div className="mt-4 min-h-[300px] max-h-[400px] overflow-auto">
      {list.map((item) => (
        <TodoItem
          key={item.id}
          item={item}
          onDelete={onDelete}
          onUpdate={onUpdate}
          onUpdateConfrim={onUpdateConfrim}
          onToggle={onToggle}
        />
      ))}
    </div>
  );
};

export default TodoList;
