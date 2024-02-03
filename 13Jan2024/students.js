// Create array of object : name, age and feedback 
// Get all studnets data
// Get data by student name
const express = require('express')
let app = express()   //all the express module are strored in variable app
students = [{
    name: "dinesh",
    age:25,
    feedback: "good"
  },

  {
    name: "suresh",
    age:22,
    feedback: "good"
  },

  {
    name: "ramesh",
    age:24,
    feedback: "bad"
  },
];
  
  module.exports = students;
  
  //creating API for fetching all the students
  app.get("/getAllStudents",function(req,res) {
    res.send(students);
  });
  
  app.get("/students/:name",function(req,res) {
    studentName = req.params.name
    findStudent = {}
  
    for (index=0; index<students.length;index++)
    {
      if (students[index].name==studentName){
        findStudent=students[index]
        break;
      }
    }
  
    if (findStudent){
    res.send(findStudent)
    }
    else{
      res.send("Student name not found")
    }
  
  });


  //post API to add student data
  app.post('/addStudent',function(req,res){
    const data = req.body;
    console.log('user data',data);
    res.send("Post request received")
  });


//starting the server is reqired 
app.listen(3000);