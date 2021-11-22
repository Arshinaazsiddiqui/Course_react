import React, {useEffect} from "react";

//import {Jumbotron} from "reactstrap";


const Home =()=>{

  useEffect(() => {
    document.title ="HOME PAGE"
  },[]);
    return (
        <div >
        <h1 class="display-4 my-2">Hello,Friends</h1>
        <p class="lead">
            My first full stack project
        </p>
        <p class="lead">
          <a class="btn btn-primary btn-lg" href="#" role="button">Learn Courses</a>
        </p>
      </div>
    );
}
export default Home;