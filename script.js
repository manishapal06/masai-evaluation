let students=[
  { name: "Emily", average: 91.67 },
  { name: "Daniel", average: 72.67 },
  { name: "Sarah", average: 58.00 },
  { name: "Alex", average: 85.00 }
];
let topStudents=[];
for(let i=0;i<students.length;i++){
  if(students[i].average>80){
    topStudents.push(students[i].name)
  }
}
console.log(topStudents)
