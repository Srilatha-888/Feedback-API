import React, { useRef } from "react";

const UncontrolledForm = ({ addFeedback }) => {
  const nameRef = useRef();
  const messageRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = nameRef.current.value;
    const message = messageRef.current.value;
    if (name && message) {
      addFeedback({ name, message, type: "Uncontrolled" });
      nameRef.current.value = "";
      messageRef.current.value = "";
    }
  };

  return (
    <div>
      <h2>Uncontrolled Form</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Name" ref={nameRef} />
        <textarea placeholder="Message" ref={messageRef} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default UncontrolledForm;
