import {Col, Container, Row} from "react-bootstrap";
import {Product} from "../components";

function Products() {
    const products = [
            {
                id: 1,
                name: '---',
                description: "Some text",
                price: 0,
                imageUrl: 'https://4lapy.ru/resize/800x800/upload/iblock/a5d/a5d9f36c6c35c10744d39430d15f5e9d.jpg'
            },
            {
                id: 2,
                name: '---',
                description: "Some text",
                price: 0,
                imageUrl: 'https://4lapy.ru/resize/800x800/upload/iblock/a5d/a5d9f36c6c35c10744d39430d15f5e9d.jpg'
            }
        ]
    return (
        <div className="album py-5">
            <Container>
                <Row sm={2} md={3} className="g-3">

                        { products.map((obj) => (
                            <Col mt={5} style={{ maxWidth: "70%"}}>
                            <Product
                                key={obj.id}
                                name={obj.name}
                                description={obj.description}
                                price={obj.price}
                                imageUrl={obj.imageUrl}
                            />
                            </Col>

                        ))}
                </Row>
            </Container>
        </div>
    );
}

export default Products;