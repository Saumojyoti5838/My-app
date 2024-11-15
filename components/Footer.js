import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './footer.css';
const Footer = () => {
  return (
    <footer>
         <div className='k'>
            <h1>Riju</h1>
        </div>
      <Container>
        <Row>
          <Col className="text-center py-3">&copy; MyShop 2024</Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
