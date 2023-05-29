import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import GroupTable from "../components/GroupTable";

function Discipline() {
  const { id } = useParams();
  const [discipline, setDiscipline] = useState(null);
  const disciplines =  [
    {
      "id": 1,
      "name": "Проектирование веб-приложений",
    },
    {
      "id": 2,
      "name": "Базы данных ",
    },
    {
      "id": 3,
      "name": "Технологии и инструментарий анализа больших данных",
    }
  ]
  useEffect(() => {
    // Здесь можно выполнить запрос к бекенду для получения информации о дисциплине
    // с идентификатором `id` и сохранить ее в состоянии `discipline`
    console.log(disciplines)
    console.log(id)
    setDiscipline(disciplines.find(dis => dis.id == id));
    console.log(discipline)
  }, [id]);

  if (!discipline) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{discipline.name}</h1>
      <p>{discipline.description}</p>
      <GroupTable />
    </div>
  );
}

export default Discipline;