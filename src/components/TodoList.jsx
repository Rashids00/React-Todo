import React, { useState } from 'react';
import Select from 'react-select';
import TodoItem from './TodoItem';

const TodoList = ({ todos, handleComplete, handleDelete, handleEdit }) => {
  const [filter, setFilter] = useState('all');

  const options = [
    { value: 'all', label: 'All' },
    { value: 'active', label: 'Active' },
    { value: 'completed', label: 'Completed' },
  ];

  const handleChange = (selectedOption) => {
    setFilter(selectedOption.value);
  };

  const filteredTodos = todos.filter(todo => {
    if (filter === 'all') return true;
    if (filter === 'active') return !todo.completed;
    if (filter === 'completed') return todo.completed;
    return true;
  });

  return (
    <div>
      <div className="mt-2 mb-4">
        <Select
          options={options}
          value={options.find(option => option.value === filter)}
          onChange={handleChange}
          className="w-full max-w-32"
        />
      </div>
      <div className='bg-white shadow sm:rounded-lg'>
      {filteredTodos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          handleComplete={handleComplete}
          handleDelete={handleDelete}
          handleEdit={handleEdit}
        />
      ))}
      </div>
    </div>
  );
};

export default TodoList;
