import React from "react";

function StudentsSummary({ students }) {
  
  const getTotalStudents = () => {
    return students.length;
  };

  const getPassedStudents = () => {
    return students.filter(student => student.score >= 50).length;
  };

  const getAverageScore = () => {
    if (students.length === 0) return 0;
    const total = students.reduce((sum, student) => sum + parseInt(student.score || 0), 0);
    return Math.round(total / students.length);
  };

  return (
    <div className="max-w-5xl mx-auto flex items-center justify-between gap-4 py-6">
      
      <div className="flex-1 bg-white/5 border border-white/10 p-6 rounded-2xl relative group cursor-pointer transition-all duration-300 hover:bg-white/10 backdrop-blur-sm overflow-hidden">
        <div className="flex flex-col">
          <span className="text-slate-400 text-xs uppercase tracking-widest font-semibold mb-1">Total Students</span>
          <span className="text-white text-5xl font-black">{getTotalStudents()}</span>
        </div>
        <span className="absolute left-0 bottom-0 h-[3px] w-0 bg-white transition-all duration-500 group-hover:w-full"></span>
      </div>

      <div className="flex-1 bg-white/5 border border-white/10 p-6 rounded-2xl relative group cursor-pointer transition-all duration-300 hover:bg-white/10 backdrop-blur-sm overflow-hidden">
        <div className="flex flex-col">
          <span className="text-slate-400 text-xs uppercase tracking-widest font-semibold mb-1">Passed</span>
          <span className="text-emerald-400 text-5xl font-black">{getPassedStudents()}</span>
        </div>
        <span className="absolute left-0 bottom-0 h-[3px] w-0 bg-emerald-500 transition-all duration-500 group-hover:w-full"></span>
      </div>

      <div className="flex-1 bg-white/5 border border-white/10 p-6 rounded-2xl relative group cursor-pointer transition-all duration-300 hover:bg-white/10 backdrop-blur-sm overflow-hidden">
        <div className="flex flex-col">
          <span className="text-slate-400 text-xs uppercase tracking-widest font-semibold mb-1">AVG Score</span>
          <span className="text-purple-400 text-5xl font-black">{getAverageScore()}</span>
        </div>
        <span className="absolute left-0 bottom-0 h-[3px] w-0 bg-purple-500 transition-all duration-500 group-hover:w-full"></span>
      </div>

    </div>
  );
}

export default StudentsSummary;