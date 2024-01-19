import React, { useState } from "react";
import toast from "react-hot-toast";
import { CiFaceMeh, CiFaceSmile } from "react-icons/ci";
import { FiEdit3 } from "react-icons/fi";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { TiTick } from "react-icons/ti";

const TodoItem = ({ item, onDelete, onUpdate, onToggle, onUpdateConfrim }) => {
  const { id, isComplete, text, isEditable } = item;
  const [updateText, setUpdateText] = useState(text);

  const handleUpdate = () => {
    if (updateText === "") {
      toast.error("Task Should not be Empty");
      return;
    }

    onUpdateConfrim(id, updateText);
    toast.success("Task Updated Successfully");
  };

  return (
    <div className="flex py-2 justify-between items-center">
      {isEditable ? (
        <div className="flex gap-3 items-center">
          <input
            type="text"
            placeholder={"Enter your task..."}
            value={updateText}
            onChange={(e) => setUpdateText(e.target.value)}
            className="border border-[#07CE6A] rounded-md px-4 py-1 bg-[#DAE3EE] focus-visible:border-[#07CE6A]"
          />
          <button onClick={handleUpdate}>
            <TiTick size={"25px"} color="#07CE6A" />
          </button>
        </div>
      ) : (
        <div className="flex gap-3 items-center">
          <button onClick={() => onToggle(id)}>
            {isComplete ? (
              <CiFaceSmile size={"25px"} color="#07CE6A" />
            ) : (
              <CiFaceMeh size={"25px"} />
            )}
          </button>
          <p
            className={`text-[#6D697A] font-normal text-base text-ellipsis overflow-hidden max-w-xs whitespace-nowrap ${
              isComplete && "text-[#CBCACF] line-through"
            }`}
          >
            {text}
          </p>
        </div>
      )}
      <div className="flex gap-3 items-center">
        {!(isComplete || isEditable) && (
          <button onClick={() => onUpdate(id)}>
            <FiEdit3 size={"20px"} color="#66D998" />
          </button>
        )}
        <button onClick={() => onDelete(id)}>
          <MdOutlineDeleteOutline size={"20px"} color="#ff3333" />
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
