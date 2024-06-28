import React, { useState } from 'react';
import Modal from './Modal';

const TodoItem = ({ todo, handleComplete, handleDelete, handleEdit }) => {
    const { id, text, description, completed } = todo;
    const [isEditing, setIsEditing] = useState(false);
    const [editText, setEditText] = useState(text);
    const [editDescription, setEditDescription] = useState(description);
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [showDescriptionModal, setShowDescriptionModal] = useState(false);
  
    const handleCheckboxChange = () => {
      handleComplete(id);
    };
  
    const handleDeleteClick = () => {
      setShowDeleteModal(true);
    };
  
    const handleConfirmDelete = () => {
      handleDelete(id);
      setShowDeleteModal(false);
    };
  
    const handleEditClick = () => {
      setIsEditing(true);
    };
  
    const handleEditChange = (e) => {
      const { name, value } = e.target;
      if (name === 'text') {
        setEditText(value);
      } else if (name === 'description') {
        setEditDescription(value);
      }
    };
  
    const handleEditSave = () => {
      if (editText.trim() && editDescription.trim()) {
        handleEdit(id, editText, editDescription);
        setIsEditing(false);
      }
      else {
        alert('Fill the fields');
      }
    };
  
    const handleCancelEdit = () => {
      setIsEditing(false);
      setEditText(text);
      setEditDescription(description);
    };

    const handleViewClick = () => {
      setShowDescriptionModal(true);
    };
  
    return (
      <div className={`flex items-center px-2 py-2 border-b border-gray-200 ${completed ? 'bg-gray-200' : ''}`}>
        {!isEditing ? (
          <>
            <input
              type="checkbox"
              checked={completed}
              onChange={handleCheckboxChange}
              className="mr-2"
            />
            <p className={`flex-1 ${completed ? 'line-through text-gray-500' : 'text-gray-700'}`}>{text}</p>
            <button
              onClick={handleViewClick}
              className="text-green-500 hover:text-green-700 mr-2"
            >
              View
            </button>
            <button
              onClick={handleEditClick}
              className="text-blue-500 hover:text-blue-700 mr-2"
            >
              Edit
            </button>
            <button
              onClick={handleDeleteClick}
              className="text-red-500 hover:text-red-700"
            >
              Delete
            </button>
          </>
        ) : (
          <>
            <input
              type="text"
              name="text"
              value={editText}
              onChange={handleEditChange}
              autoFocus
              className="border border-gray-300 p-1 mr-2 flex-1"
            />
            <textarea
              name="description"
              value={editDescription}
              onChange={handleEditChange}
              className="border border-gray-300 p-1 mr-2 flex-1"
              style={{ height: 'calc(2rem + 2px)' }}
            />
            <button
              onClick={handleEditSave}
              className="bg-blue-500 text-white px-2 py-1 rounded mr-2 hover:bg-blue-600"
            >
              Save
            </button>
            <button
              onClick={handleCancelEdit}
              className="bg-gray-300 text-gray-700 px-2 py-1 rounded hover:bg-gray-400"
            >
              Cancel
            </button>
          </>
        )}

        <Modal
          isOpen={showDeleteModal}
          onClose={() => setShowDeleteModal(false)}
          onConfirm={handleConfirmDelete}
          message="Are you sure you want to delete this item?"
          showButtons={true}
        />
        <Modal
          isOpen={showDescriptionModal}
          onClose={() => setShowDescriptionModal(false)}
          message={description}
          showButtons={false}
        >
        </Modal>
      </div>
    );
  };
  
  export default TodoItem;
