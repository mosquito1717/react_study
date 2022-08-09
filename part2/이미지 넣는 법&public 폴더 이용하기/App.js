import {Container, Nav, Navbar, Col, Row} from 'react-bootstrap';
import './App.css';
import bg from './img/building1.png';

function App() {
  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Ann's building</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Preference</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <div className="main-bg" style={{backgroundImage : 'url('+bg+')'}}></div>

      <Container>
        <Row>
          <Col sm>
            <img src={process.env.PUBLIC_URL +'/logo192.png'} width="80%" />
            <h4>건물명</h4>
            <p>건물 설명</p>
          </Col>
          <Col sm>
            <img src="https://ratiodesign.com/wp-content/uploads/2021/01/View-Corridor-1500-x-2427-750x1213.jpg" width="80%" />
            <h4>건물명</h4>
            <p>건물 설명</p></Col>
          <Col sm>
            <img src="https://i.pinimg.com/originals/78/a0/8e/78a08e54bd4d326b6985488918edf8a8.jpg" width="80%" />
            <h4>건물명</h4>
            <p>건물 설명</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
