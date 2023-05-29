import React, { useState, useEffect } from 'react';
import { Table, Dropdown, DropdownButton } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const GroupTable = () => {
  const [groups, setGroups] = useState([]);
  const [selectedGroup, setSelectedGroup] = useState(null);
  const [students, setStudents] = useState([]);

  useEffect(() => {
    // Здесь можно получить список групп из бекенда
    const groups = [
      { id: 1, name: 'ИКБО-01-19' },
      { id: 2, name: 'ИКБО-13-19' },
      { id: 3, name: 'ИКБО-20-19' },
    ];
    setSelectedGroup(groups[0])
    setGroups(groups);
  }, []);

  useEffect(() => {
    if (selectedGroup) {
      const students = [
        { id: 1, name: 'Иван Иванов Иванович', group: selectedGroup.name, hasSubmittedWork: true, workId: 1 },
        { id: 2, name: 'Петр Петров Петрович', group: selectedGroup.name, hasSubmittedWork: false, workId: 3 },
        { id: 3, name: 'Сидор Сидоров Сидорович', group: selectedGroup.name, hasSubmittedWork: true, workId: 6 },
      ];
      setStudents(students);
    }
  }, [selectedGroup]);

  const handleGroupSelect = (group) => {
    setSelectedGroup(group);
  };

  return (
    <div>
        <DropdownButton title={selectedGroup ? selectedGroup.name : "Выберите группу"}>
        {groups.map((group) => (
            <Dropdown.Item key={group.id} onClick={() => handleGroupSelect(group)}>
            {group.name}
            </Dropdown.Item>
        ))}
        </DropdownButton>
      {selectedGroup && (
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>ФИО</th>
              <th>Группа</th>
              <th>Сдана ли работа</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student) => (
              <tr key={student.id} className={student.hasSubmittedWork ? 'table-success' : 'table-danger'}>
                <td>{student.name}</td>
                <td>{student.group}</td>
                <td>{student.hasSubmittedWork ? 'Да' : 'Нет'}</td>
                <td>
              <Link to={`/student/${student.id}/work/${student.workId}`}>
                Посмотреть работу
              </Link>
            </td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </div>
  );
};

export default GroupTable;