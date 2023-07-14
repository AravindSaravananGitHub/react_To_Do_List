import React from "react";
import { FaPlus } from "react-icons/fa";
import { useRef } from "react";

const AddItems = ({ newItem, setNewItem, handleSubmit }) => {
  let inputRef = useRef("");

  return (
    <form autoComplete="off" className="addForm" onSubmit={handleSubmit}>
      <label htmlFor="addItem">Add Items</label>
      <input
        ref={inputRef}
        type="text"
        id="addItem"
        // required
        placeholder="Add Items"
        autoFocus
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
      />
      <button
        type="submit"
        aria-label="Add Items"
        className="btnSubmit"
        onClick={() => inputRef.current.focus()}
      >
        <FaPlus />
      </button>
    </form>
  );
};

export default AddItems;
