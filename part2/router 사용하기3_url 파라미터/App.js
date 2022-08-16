import {Container, Nav, Navbar} from 'react-bootstrap';
import './App.css';
import bg from './img/shoe.png';
import { useState } from 'react';
import data from './data.js';
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom'
import Detail from './pages/Detail.js'


function App() {

  let [shoes] = useState(data);
  let navigate = useNavigate();

  return(
    <div className="APP">
       <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">ShoeShop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={()=>{navigate('/')}}>Home</Nav.Link>
            <Nav.Link onClick={()=>{navigate('/detail')}}>Detail</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      

      <Routes>
        <Route path="/"element={<Home shoes={shoes}></Home>}/>
        
        <Route path="/detail/:id" element={<Detail shoes={shoes}/>}/>  

        
        <Route path="*" element={<p>잘못된 페이지입니다.</p>}/>
        <Route path="/about" element={<About/>}>
          <Route path="member" element={<div>멤버임</div>}/>
          <Route path="location" element={<About/>}/>
        </Route>
        <Route path="/event" element={<EventPage/>}>
          <Route path="one" element={<p>첫 주문시 양배추즙 서비스</p>}/>
          <Route path="two" element={<p>생일기념 쿠폰받기</p>}/>
        </Route>
      </Routes>
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

function Home(props){
  return(
    <>
    <div className="main-bg" style={{backgroundImage : 'url('+ bg +')'}}></div>

    <div class="container">
      <div class="row">
        {
          props.shoes.map((a,i)=>{
            return (
              <Card shoes={props.shoes} i={i}></Card>
            )
          })
        }
      </div>
    </div>
  </>
  )
}

function About(props){
  return(
    <>
      <p>어바웃 페이지입니다.</p>
      <Outlet></Outlet>
    </>
  )
}

function EventPage(){
  return(
    <div>
      <h4>오늘의 이벤트</h4>
      <Outlet></Outlet>
    </div>
  )
}
