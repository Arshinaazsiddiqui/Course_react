import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import '../node_modules/react-toastify';
import {  ToastContainer, toast } from "react-toastify";
import Home from './components/Home';
import AllCourses from './components/AllCourses';
import AddCourse from './components/AddCourse';
import Header from './components/Header';
import { Container,Row, Col } from 'reactstrap';
import Menus from './components/Menus';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';

function App()  {
  function btn(){
    toast.error("done", {
      position: "top-center",
    });
  }
  return (
       <Router>
         
    <div>
      <div>
       <br/>
        <ToastContainer/>
        <Container>
       <Header/>
       <br/>
        
          <Row> 
            <Col md={4}>
         
           <Menus/>
            </Col> 
          
           
            <Col md={8}>
            <AddCourse/>
            <Routes>
         
               <Route exact path="/" components={Home} />
              <Route exact path ="/add-course" components={AddCourse} />
              <Route exact path="/view-courses" components={AllCourses} /> 
           
              </Routes>
            
           </Col>
            </Row>
          
          </Container>
        
          
    </div>
    
    </div>
   </Router>
    
  );
}

export default App;
