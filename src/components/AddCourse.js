import React, { useState, useEffect } from "react";
import { Fragment } from "react";

import {Button, Form, FormGroup, Label, Input, } from "reactstrap";


const AddCourse = () =>{
  useEffect(() => {
    document.title = "Add Course"
  },[]);
  const [course, setCourses]= useState({});
//form handler function
const handleForm = (e) => {
    console.log(course);
    e.preventDefault();
};

    return <Fragment>
        <h1 className="text-center"  >Fill Course Details</h1>
         <Form className="text-center">
        <FormGroup>
          <Label for ="userId" >Course Id</Label>
          <Input type="text" placeholder="Enter here" name ="userId" id="userId"
          onChange={(e)=>{
            setCourses({...course,id: e.target.value})
          }}
          />
        </FormGroup>
        <FormGroup>
        <Label for ="title" >Course Title</Label>
          <Input type="text" placeholder="Enter here"  id="title" 
          onChange={(e)=>{
            setCourses({...course,title: e.target.value})
          }}
          />
        </FormGroup>
        <FormGroup>
          <Label for="description">Course Description</Label>
          <Input type="textarea" name="text" id="description" 
          onChange={(e)=>{
            setCourses({...course,description: e.target.value})
          }}
          />
        </FormGroup>
        <Button color="success">Submit</Button>
        <Button color="danger">Clear</Button>
      </Form>
     
       
        
   
    
        </Fragment>
}
export default AddCourse;