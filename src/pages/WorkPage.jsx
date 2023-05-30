import React, { useState, useEffect } from 'react';
import { Table } from 'react-bootstrap';

import { Viewer, Worker } from '@react-pdf-viewer/core';
import { toolbarPlugin } from '@react-pdf-viewer/toolbar';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';

import { pdfjs } from 'react-pdf';
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/legacy/build/pdf.worker.min.js`;

const WorkPage = () => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [studentWork1, setStudentWork1] = useState(null)
  const defaultLayoutPluginInstance = defaultLayoutPlugin();

    const studentWork = {
        id: 1,
        studentName: 'Иванов Иван Иванович',
        discipline: 'Математический анализ',
        task: 'Название работы',
        fileUrl: '/files/student-work.pdf',
        grade: 4,
        comments: 'Решение выполнено верно, но есть некоторые неточности в вычислениях',
        dueDate: '2023-05-28 20:20',
        updatedAt: '2023-05-28 12:45'
      }

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <div>
      <h1>Просмотр работы студента</h1>
      <Table striped bordered hover>
        <tbody>
          <tr>
            <td>Название работы</td>
            <td>{studentWork.task}</td>
          </tr>
          <tr>
            <td>Срок сдачи</td>
            <td>{studentWork.dueDate}</td>
          </tr>
          <tr>
            <td>Дата сдачи работы</td>
            <td>{studentWork.updatedAt}</td>
          </tr>

          <tr>
            <td>Процент оригинальности </td>
            <td>77%</td>
          </tr>
          <tr>
            <td>Загруженный файл</td>
            <td>
              <a href={studentWork.fileUrl} target="_blank" rel="noopener noreferrer">
                Скачать файл
              </a>
            </td>
          </tr>
          <tr>
            <td>Шаблон формы выставление оценки</td>
            <td>
              <a href={studentWork.fileUrl} target="_blank" rel="noopener noreferrer">
                Скачать файл
              </a>
            </td>
          </tr>
          <tr>
            <td>Оценка</td>
            <td>{studentWork.grade}</td>
          </tr>
        </tbody>
      </Table>
        <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.7.107/build/pdf.worker.min.js">
        <div
        style={{
            height: '2000px',
            width: '1500px',
            marginLeft: 'auto',
            marginRight: 'auto'
        }}
    >
        <Viewer  fileUrl={studentWork.fileUrl}  plugins={[defaultLayoutPluginInstance]} />
    </div>
        </Worker>
       </div>

  );
}

export default WorkPage;