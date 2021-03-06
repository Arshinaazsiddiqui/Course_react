import React from "react";
import{
    Card,
    CardBody,
    
    CardSubtitle,
    CardText,
    
    Button,
    Container,
} from "reactstrap";


const Course =({ course })=>{
    return(
        <Card className="text-center">
        <CardBody>
          <CardSubtitle className = "font-weight-bold" >{course.title}</CardSubtitle>
          <CardText>
           {course.description}
          </CardText>
          <Container className="text-center">
         
          <Button color="warning">Update</Button>
          <Button color="danger">Delete</Button>
        </Container>
        </CardBody>
      </Card>    
    );
};
export default Course;