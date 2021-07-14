import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Search from './Search.js';


function App() {
  return (
    <>
      <Container>
        <Row>
          <Col md={{ span: 8, offset: 4 }}>
            <h1>Knowledge directory</h1>
          </Col>
        </Row>
        <Row>
          <Col md={{ span: 11, offset: 1 }}>
            <Search />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
