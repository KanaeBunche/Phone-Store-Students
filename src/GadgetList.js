import React from 'react';
import './App.css'; // Importing global styles

const GadgetList = ({ gadgets }) => {
  return (
    <div className="gadget-list-container">
      <h2 className="list-title">Phone List</h2>
      <div className="gadget-list">
        {/* Fix: Map through the gadgets array and display each gadget's details */}
      </div>
    </div>
  );
};

export default GadgetList;
