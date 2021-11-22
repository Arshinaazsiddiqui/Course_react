import React from "react";
import { Link } from "react-router-dom";

const Menus=()=>{
    return (
      <div className="list-group">
         
  <Link to="/" className="list-group-item list-group-item-secondary">Home</Link>
  <Link to ="/add-course" className="list-group-item list-group-item-success">Add Course</Link>
  <Link to="/view-courses" className="list-group-item list-group-item-danger">View Course</Link>
  <Link to="#" className="list-group-item list-group-item-warning">About</Link>
  <Link to="#" className="list-group-item list-group-item-primary">Contact</Link>


          </div>
    );
}
export default Menus;