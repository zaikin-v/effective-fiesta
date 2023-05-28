import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function WorkPage(props) {
    const { studentId, workId } = useParams();
    const [work, setWork] = useState(null);
  
    useEffect(() => {
      // Здесь вы можете получить данные о работе из вашего бекенда
      // используя studentId и workId, переданные в параметрах URL.
      // После получения данных, вы можете сохранить их в состоянии.
      const fetchWork = async () => {
        const response = await fetch(`/api/students/${studentId}/works/${workId}`);
        const data = await response.json();
        setWork(data);
      };
      fetchWork();
    }, [studentId, workId]);
  
    if (!work) {
      return <div>Loading...</div>;
    }
  
    return (
      <div>
        <h1>{work.title}</h1>
        <p>{work.description}</p>
        <p>Grade: {work.grade}</p>
      </div>
    );
  }

  export default WorkPage