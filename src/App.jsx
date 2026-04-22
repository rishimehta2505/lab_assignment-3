import React from "react";
import Heading from "./Components/Heading";
import Addstudent from "./Components/Addstudent";
import StudentsSummary from "./Components/StudentsSummary";
import AllDetails from "./Components/AllDetails"
import { useState } from "react";
function App() {
  const initialStudents = [
    { id:1, name: "Krishna Singh", score: 59 },
    { id:2, name: "Ankit Kumar", score: 93 },
    { id:3, name: "Akash Singh", score: 87 },
    { id:4, name: "Rinku Sharma", score: 77 },
  ];
  const [students, setStudents] = useState(initialStudents);  
  const updatescore=(index,newscore )=>{
    const updated=students.map(s=>s.id === index+1 ?{ ...s,score:Number(newscore)}:s)
    setStudents(updated)
  }

  return (
    <div className="w-full flex flex-col items-center gap-10 p-20-h-screen bg-[#0f172a] ">
      <Heading />
      <Addstudent students={students} setStudents={setStudents} />
      <StudentsSummary students={students} />  
      <AllDetails students={students} updatescore={updatescore}/>
    </div>
  );
}

export default App;