import React, { useState, useEffect } from 'react';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';
import { v4 as uuidv4 } from 'uuid';

const App = () => {
  const initialTodos = JSON.parse(localStorage.getItem('todos')) || [];
  const [todos, setTodos] = useState(initialTodos);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const handleAddTodo = (text, description) => {
    if (text.trim() && description.trim()) {
      const newTodo = {
        id: uuidv4(),
        text: text.trim(),
        description: description.trim(),
        completed: false,
      };
      setTodos([...todos, newTodo]);
    }
  };

  const handleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const handleDelete = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleEdit = (id, newText, newDesc) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, text: newText, description: newDesc } : todo
    );
    setTodos(updatedTodos);
  };

  return (
    <div className="min-h-screen bg-gray-100 py-6 px-4 sm:px-6 lg:px-8">
      <div className="max-w-xl mx-auto">
        <h1 className="flex mt-6 text-3xl font-bold text-gray-800 mb-8 justify-center">Todo List</h1>
        <AddTodo handleAddTodo={handleAddTodo} />
        <TodoList
          todos={todos}
          handleComplete={handleComplete}
          handleDelete={handleDelete}
          handleEdit={handleEdit}
        />
      </div>
    </div>
  );
};

export default App;
