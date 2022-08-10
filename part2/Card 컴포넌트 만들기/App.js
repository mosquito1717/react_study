import {Container, Nav, Navbar} from 'react-bootstrap';
import './App.css';
import bg from './img/shoe.png';
import { useState } from 'react';
import data from './data.js';


function App() {

  let [shoes] = useState(data);

  return(
    <div className="APP">
       <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">ShoeShop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Cart</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <div className="main-bg" style={{backgroundImage : 'url('+ bg +')'}}></div>

      <div class="container">
        <div class="row">
          {
            shoes.map((a,i)=>{
              return (
                <Card shoes={shoes} i={i}></Card>

              )
            })
          }
        </div>
      </div>

    </div>
  );
}

export default App;


function Card(props){
  return(  
  <div class="col">
    <img src={'https://codingapple1.github.io/shop/shoes'+(props.i+1)+'.jpg'} width="80%"/>
    <h4>{props.shoes[props.i].title}</h4>
    <p>{props.shoes[props.i].content}</p>
  </div>);
}
