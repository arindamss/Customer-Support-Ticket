'use client';
import React from 'react';

const ActionButton = ({ onClick }) => {
  return (
    <button
      className="bg-blue-500 text-white px-2 py-1 rounded"
      onClick={onClick}
    >
      Update
    </button>
  );
};

export default ActionButton;
