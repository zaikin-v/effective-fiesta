import {Col, Container, Row, Table} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import {useCallback, useEffect} from "react";
import {useLocation} from "react-router-dom";
import {retrieveTutorials} from "../slices/products";
import { Link } from 'react-router-dom';

const Disciplines = (props) => {
    // const Disciplines = useSelector(state => state.students)

    const dispatch = useDispatch();
    const location = useLocation();
    const initFetch = useCallback((type) => {
        dispatch(retrieveTutorials({ type: type }));
    }, [dispatch])

    useEffect(() => {
        initFetch(location.pathname.replace("/", ""))
    }, [initFetch, location])
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

    return (
    <div>
        <h1>Мои дисциплины</h1>
        <Table bordered hover size="sm">
            <thead>
                <tr>
                    <th>Наименование</th>
                </tr>
            </thead>
            <tbody>
                {disciplines.map( item => (
                    <tr key={item.id}>
                        <td>
                            <Link to={`/disciplines/${item.id}`}>{item.name}</Link>
                        </td>
                    </tr>
                )
                )}
            </tbody>
        </Table>
    </div>

    );
}

export default Disciplines;