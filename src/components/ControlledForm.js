import React, { useState } from "react";

const ControlledForm = ({ addFeedback }) => {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && message) {
      addFeedback({ name, message, type: "Controlled" });
      setName("");
      setMessage("");
    }
  };

  return (
    <div>
      <h2>Controlled Form</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <textarea
          placeholder="Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ControlledForm;
