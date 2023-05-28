import {Col, Container, Row, Table} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import {useCallback, useEffect} from "react";
import {useLocation} from "react-router-dom";
import {retrieveTutorials} from "../slices/products";

const Students = (props) => {
    // const students = useSelector(state => state.students)

    const dispatch = useDispatch();
    const location = useLocation();
    const initFetch = useCallback((type) => {
        dispatch(retrieveTutorials({ type: type }));
    }, [dispatch])

    useEffect(() => {
        initFetch(location.pathname.replace("/", ""))
    }, [initFetch, location])
    const students =  [
        {
          "id": 1,
          "name": "Иванов Иван Иванович",
          "group": "ИКБО-01-19"
        },
        {
          "id": 2,
          "name": "Петров Петр Петрович",
          "group": "ИКБО-13-19"
        },
        {
          "id": 3,
          "name": "Сидоров Сидор Сидорович",
          "group": "ИКБО-03-19"
        }
      ]

    return (
        <Table striped bordered hover size="sm">
            <thead>
                <tr>
                    <th>ФИО</th>
                    <th>Группа</th>
                </tr>
            </thead>
            <tbody>
                {students.map( item => (
                    <tr key={item.id}>
                        <td>{item.name}</td>
                        <td>{item.group}</td>
                    </tr>
                )
                )}
            </tbody>
            </Table>
    );
}

export default Students;