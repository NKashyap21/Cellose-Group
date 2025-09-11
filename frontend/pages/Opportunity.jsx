import React from "react";
import Navbar from "./Navbar";

const Opportunity = () => {
    const opportunityList = [
      "Internships",
      "e-Internships (especially during this pandemic)",
      "External bachelor and master projects",
      "PhD",
      "Post-Doctoral Fellow",
      "Project Staff",
    ];
  return (
    <div>
      <Navbar />
      <div className="w-[85%] max-w-6xl m-auto mt-12">
        <h1 className="text-3xl font-bold text-center text-[#b33c00] mb-10">
          Opportunities
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left: Image */}
          <div className="flex justify-center">
            <img
              src="https://people.iith.ac.in/mudrika/img/Opportunities.png" // 👈 replace with actual image path
              alt="Opportunities at Cellulose Group"
              className="rounded-2xl shadow-md max-h-[400px] object-cover"
            />
          </div>

          {/* Right: Content */}
          <div className="space-y-6">
            <p className="text-lg text-gray-800 text-center md:text-left">
              If you believe{" "}
              <span className="italic">‘materials enable better life’</span>
              <br />
              We invite you to apply with us @ <b>Cellulose Group</b>
            </p>

            <div>
              <h2 className="font-semibold text-gray-800 mb-2">
                We can work together through:
              </h2>
              <ol className="list-decimal pl-6 space-y-2 text-gray-700 text-base leading-relaxed">
                {opportunityList.map((opt, idx) => (
                  <li key={idx}>{opt}</li>
                ))}
              </ol>
            </div>

            <p className="text-lg text-gray-800 text-center md:text-left">
              You may reach us at{" "}
              <a
                href="mailto:cellulosegroup@iith.ac.in"
                className="text-[#2bbbad] underline"
              >
                cellulosegroup@iith.ac.in
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Opportunity;
