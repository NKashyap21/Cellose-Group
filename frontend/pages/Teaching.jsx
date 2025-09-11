import React from "react";
import Navbar from "./Navbar";

const Teaching = () => {
  const courses = [
    {
      name: "Science and Engineering of Materials",
      credits: "1 credit",
      suitableFor: "UG",
    },
    {
      name: "Polymers",
      credits: "1 credit, 3 credit",
      suitableFor: "UG",
    },
    {
      name: "Structural and Functional Polymers",
      credits: "1 credit, 3 credit",
      suitableFor: "UG, PG",
    },
    {
      name: "Soft Matter Science",
      credits: "1 credit, 3 credit",
      suitableFor: "UG, PG",
    },
    {
      name: "Nature Inspired Materials Engineering",
      credits: "1 credit, 2 credit",
      suitableFor: "UG, PG",
    },
    {
      name: "Hierarchical & Supramolecular Materials",
      credits: "1 credit",
      suitableFor: "UG, PG",
    },
    {
      name: "Antifouling and Antimicrobial Materials (TBI)",
      credits: "1 credit",
      suitableFor: "UG, PG",
    },
    {
      name: "Life Cycle Assessment (TBI)",
      credits: "1 credit",
      suitableFor: "UG, PG",
    },
  ];

  return (
    <div>
      <Navbar />
      <div className="w-[85%] max-w-7xl m-auto mt-12">
        <h1 className="text-3xl font-bold text-center text-[#b33c00] mb-8">
          Teaching
        </h1>

        <div className="overflow-x-auto">
          <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
            <thead className="bg-[#2bbbad] text-white">
              <tr>
                <th className="px-6 py-3 text-left">Course</th>
                <th className="px-6 py-3 text-center">Credits</th>
                <th className="px-6 py-3 text-center">Suitable for</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              {courses.map((course, idx) => (
                <tr key={idx} className="hover:bg-gray-100">
                  <td className="px-6 py-4">{course.name}</td>
                  <td className="px-6 py-4 text-center">{course.credits}</td>
                  <td className="px-6 py-4 text-center">
                    {course.suitableFor}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Teaching;
