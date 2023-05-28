import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import GroupTable from "../components/GroupTable";

function Discipline() {
  const { id } = useParams();
  const [discipline, setDiscipline] = useState(null);

  useEffect(() => {
    // Здесь можно выполнить запрос к бекенду для получения информации о дисциплине
    // с идентификатором `id` и сохранить ее в состоянии `discipline`
    setDiscipline({ id: 1, name: "Математика", description: "Описание дисциплины Математика" });
  }, [id]);

  if (!discipline) {
    return <div>Loading...</div>;
  }

  return (
    <div>
        <h1>{id}</h1>
      <h1>{discipline.name}</h1>
      <p>{discipline.description}</p>
      <GroupTable />
    </div>
  );
}

export default Discipline;