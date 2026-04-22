import React, { useEffect, useState } from "react";

function AllDetails({ students ,updatescore}) {
  const [inputs,setInputs]= useState(students.map(s=>s.score))
  const handleChange=(index,value)=>{
    const newInputs=[...inputs]
    newInputs[index]=value
    setInputs(newInputs)
  }
  useEffect(()=>{
    setInputs(students.map(s=>s.score))
  },[students])
  return (
    <>
    <div className="w-200 ">
      
     
      

      
      <table className="w-full border border-0 border-collapse bg-gradient-to-b from-[#] to-[#000000]">
        <thead>
          <tr className="text-[#ffffff] ">
            <th className="text-left p-3 border-b border-[#ffffff]">Name</th>
            <th className="text-left p-3 border-b border-[#ffffff]">Score</th>
            <th className="text-left p-3 border-b border-[#ffffff]">Status</th>
            <th className="text-left p-3 border-b border-[#ffffff]">Update</th>
          </tr>
        </thead>

        <tbody>
          {students.map((item,index)=>{
            return(
              <tr className="text-[#ffffff]" key={index}>
                <td className="p-3 border-b">{item.name}</td>
                <td className="p-3 border-b">{item.score}</td>
              <td className="p-3">
                {item.score >= 40 ? (
                  <div className="flex item-center gap-1 w-20 p-1 px-2 text-sm text-green-600 border border-green-500">
                    <span className="w-2 h-2 rounded-full bg-green-600 inline-block"></span>
                    <span>Pass</span>
                  </div>
                ) : (
                  <div className="flex item-center gap-1 w-20 p-1 px-2 text-sm text-red-600 border border-red-500">
                    <span className="w-2 h-2 rounded-full bg-red-600 inline-block"></span>
                    <span>Fail</span>
                  </div>
                )}
              </td>
              <td className="p-3 flex gap-3 items-center">
                <input
                  type="text"
                  value={inputs[index]} 
                  onChange={(e)=>handleChange(index,e.target.value)}
                  className="w-12 p-1 px-2 outline-none border border-[#ffffff] text-black-200"
                />
                <button className="border border-[#ffffff] px-3 py-1 cursor-pointer hover:bg-[#000000] hover:text-[#ffffff]" onClick={(e)=>updatescore(index,inputs[index])}>
                  Save
                </button>
              
              </td>
            </tr>)
          })}
        </tbody>
      </table>
    </div>
    </>
  );
}

export default AllDetails;
   