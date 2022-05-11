import {Container, Row, Col, Button} from "react-bootstrap";

const fontStyle = {
    'verticalAlign': 'inherit;'
}


function Home () {
    return (
            <Container text-center="true">
                <Row className="py-lg-5">
                    <Col lg={6} md={8} className="mx-auto">
                        <h1 className="fw-light"><font style={ fontStyle }><font
                            style={ fontStyle }>Hey!</font></font></h1>
                        <p className="lead text-muted"><font style={ fontStyle }><font
                            style={ fontStyle }>Our pet shop "KOTIK" cooperates with the shelter "RAY". If you
                            have long wanted to have your best furry friend next to you, below you can see some of the
                            profiles of animals that are looking for a home. Also we would be very grateful for your
                            help.</font></font></p>
                        <p>
                            <Button
                                variant="primary"
                                href="https://rayfund.ru/animals/"
                                className="my-3"
                            >
                                Looking for a home
                            </Button>
                            <Button
                                variant="success"
                                href="https://rayfund.ru/get_involved/"
                                className="my-3"
                            >
                                Help
                            </Button>
                        </p>
                    </Col>
                </Row>
            </Container>

    )
}

export default Home;