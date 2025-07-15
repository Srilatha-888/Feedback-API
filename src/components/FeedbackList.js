import React from "react";

const FeedbackList = ({ feedbacks }) => {
  return (
    <div>
      <h2>Feedbacks</h2>
      <ul>
        {feedbacks.map((fb, index) => (
          <li key={index}>
            <strong>{fb.name}</strong>: {fb.message} <em>({fb.type})</em>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FeedbackList;
