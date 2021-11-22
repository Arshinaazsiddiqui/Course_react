import React, { useState } from 'react';
import Course from './Course';

//import { Link } from 'react-router-dom';

const AllCourses=()=>{

// useEffect
 
    const[courses, setCourses]= useState([
        {title:"Java Course", description:"i am description of java"},
        {title:"JavaScript Course", description:"i am description of JavaScript"},
        {title:"Python Course", description:"i am description of python"}
    ]);

    return(
        <div>
         
          <h1 className="text-center">All Course</h1>
        

        {courses.length > 0 
         ? courses.map((item) => <Course course={item}/>)
          :"No course" }
         
        </div>

    );
};
export default AllCourses;