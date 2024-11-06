import React from 'react';
import './App.css'; // Importing global styles

const GadgetForm = ({ newGadget, setNewGadget, addGadget }) => {
  return (
    <div className="gadget-form-container">
      <h2 className="form-title">Add New Phone</h2>
      <div className="form-inputs">
        {/* Fix: Add input fields for Name, Category, and Image URL with corresponding state handling */}
      </div>
      {/* Fix: Add a button that triggers the `addGadget` function */}
    </div>
  );
};

export default GadgetForm;
