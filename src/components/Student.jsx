import PropTypes from 'prop-types';
import {Button, Card} from "react-bootstrap";
import {addToCart} from "../slices/cart";
import {useDispatch} from "react-redux";
import {useHistory} from "react-router-dom";


function Student({id, name, group}) {

    const dispatch = useDispatch();

    return (
        <Card className={'shadow-sm'}>
            <Card.Title> {name} </Card.Title>
            <Card.Body
            md={5}
            >
                <Card.Text>
                    {group}
                </Card.Text>

            </Card.Body>
        </Card>
    )
}

Student.propTypes = {
    id: PropTypes.number,
    name: PropTypes.string,
    group: PropTypes.string,
};

Student.defaultProps = {
    name: 'Иванов Иван Иванович',
    group: "ИКБО-13-19",
};

export default Student