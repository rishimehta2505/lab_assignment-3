import React, { useState } from "react";

function Addstudent({ students, setStudents }) {
  const [newStudentName, setNewStudentName] = useState({
    id: "",
    name: "",
    score: ""
  });

  const handleNamechange = (value) => {
    setNewStudentName(s => ({
      ...s,
      id: students.length + 1,
      name: value
    }));
  };

  const handleScoreChange = (value) => {
    setNewStudentName(s => ({
      ...s,
      score: value
    }));
  };

  const submitStudent = () => {
    if (!newStudentName.name || !newStudentName.score) return;
    setStudents([...students, newStudentName]);
    setNewStudentName({ id: "", name: "", score: "" });
  };

  return (
    <div className="max-w-5xl mx-auto mt-8">
      <div className="flex justify-between items-center px-6 py-4 bg-white/5 border border-white/10 rounded-t-2xl backdrop-blur-md">
        <span className="text-slate-400 text-xs font-bold tracking-widest uppercase">Student Records</span>
        <span className="bg-purple-500/20 text-purple-400 px-3 py-1 rounded-full text-xs font-bold">
          {students.length} Entries
        </span>
      </div>

      <div className="flex gap-2 p-4 bg-slate-900/50 border-x border-b border-white/10 rounded-b-2xl shadow-2xl">
        <input
          type="text"
          placeholder="ENTER STUDENT NAME"
          className="flex-[2] bg-white/5 border border-white/10 p-4 rounded-xl text-white outline-none focus:border-purple-500/50 transition-all placeholder:text-slate-600 uppercase text-sm tracking-wider"
          value={newStudentName.name}
          onChange={(e) => handleNamechange(e.target.value)}
        />
        
        <input
          type="number"
          placeholder="SCORE"
          className="flex-1 bg-white/5 border border-white/10 p-4 rounded-xl text-white outline-none focus:border-purple-500/50 transition-all placeholder:text-slate-600 uppercase text-sm tracking-wider"
          value={newStudentName.score}
          onChange={(e) => handleScoreChange(e.target.value)}
        />

        <button
          className="px-8 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold rounded-xl hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer shadow-lg shadow-purple-500/20"
          onClick={submitStudent}
        >
          + ADD
        </button>
      </div>
    </div>
  );
}

export default Addstudent;