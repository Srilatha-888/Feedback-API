import React, { useState, useEffect } from "react";
import ControlledForm from "./components/ControlledForm";
import UncontrolledForm from "./components/UncontrolledForm";
import FeedbackList from "./components/FeedbackList";

const App = () => {
  const [feedbacks, setFeedbacks] = useState([]);


  useEffect(() => {
    const savedFeedbacks = JSON.parse(localStorage.getItem("feedbacks")) || [];
    setFeedbacks(savedFeedbacks);
  }, []);

 
  useEffect(() => {
    localStorage.setItem("feedbacks", JSON.stringify(feedbacks));
  }, [feedbacks]);

  const addFeedback = (feedback) => {
    setFeedbacks((prev) => [...prev, feedback]);
  };

  return (
    <div className="container">
      <h1>User Feedback App</h1>
      <ControlledForm addFeedback={addFeedback} />
      <UncontrolledForm addFeedback={addFeedback} />
      <FeedbackList feedbacks={feedbacks} />
    </div>
  );
};

export default App;
