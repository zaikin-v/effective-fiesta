import PropTypes from 'prop-types';
import {Button, Card} from "react-bootstrap";


function Product({name, description, price, imageUrl}) {

    const onClickAddToBasket = () => {
        console.log(name)
    }
    return (
        <Card className={'shadow-sm'}>
            <Card.Img variant="top" src={imageUrl} />
            <Card.Body
            md={5}
            >
                <Card.Text
                >
                    {description}
                </Card.Text>
                <div className="d-flex justify-content-between align-items-center">
                    <Button
                        variant="submit"
                        onClick={() => onClickAddToBasket()}
                    >
                        Add
                    </Button>
                    <div className="text-price">
                        <font
                        >
                            {price}
                        </font>
                    </div>
                </div>
            </Card.Body>
        </Card>
    )
}

Product.propTypes = {
    name: PropTypes.string,
    description: PropTypes.string,
    imageUrl: PropTypes.string,
    price: PropTypes.number,
    count: PropTypes.number,
};

Product.defaultProps = {
    name: '---',
    description: "Some text",
    price: 0,
    imageUrl: 'https://4lapy.ru/resize/800x800/upload/iblock/a5d/a5d9f36c6c35c10744d39430d15f5e9d.jpg'
};

export default Product