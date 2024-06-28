import React, { useState } from 'react';

const AddTodo = ({ handleAddTodo }) => {
  const [todoText, setTodoText] = useState('');
  const [todoDescription, setTodoDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (todoText.trim() && todoDescription.trim()) {
      handleAddTodo(todoText, todoDescription);
      setTodoText('');
      setTodoDescription('');
    }
    else {
        alert('Fill all the fields.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center mt-4">
      <input
        type="text"
        value={todoText}
        onChange={(e) => setTodoText(e.target.value)}
        placeholder="Add a new todo..."
        className="border border-gray-300 py-2 px-4 rounded-l flex-1 focus:outline-none focus:ring focus:border-blue-300"
      />
      <textarea
        value={todoDescription}
        onChange={(e) => setTodoDescription(e.target.value)}
        placeholder="Add a description..."
        className="border border-gray-300 py-2 px-4 rounded focus:outline-none focus:ring focus:border-blue-300"
        style={{ height: 'calc(2.5rem + 2px)' }}
      />
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-r focus:outline-none"
      >
        Add Todo
      </button>
    </form>
  );
};

export default AddTodo;
