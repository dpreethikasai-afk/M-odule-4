import { useState } from "react";

function Student() {
  const [marks, setMarks] = useState(50);

  return (
    <div>
      <h2>Student Marks</h2>

      <p>Name: Rahul</p>
      <p>Subject: Java</p>
      <p>Marks: {marks}</p>

      <button onClick={() => setMarks(marks + 1)}>
        Increase
      </button>

      <button onClick={() => setMarks(marks - 1)}>
        Decrease
      </button>
    </div>
  );
}

export default Student;