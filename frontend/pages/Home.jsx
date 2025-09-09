import React from "react";
import Navbar from "./Navbar";

const Home = () => {
  return (
    <div>
      <Navbar />

      {/* Main Content */}
      <div className="w-[85%] max-w-7xl m-auto mt-12 grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Left Column - Profile */}
        <div className="md:col-span-1 space-y-6">
          <img
            src="https://people.iith.ac.in/mudrika/img/mudrika_profile.jpg"
            alt="Dr. Mudrika Khandelwal"
            className="rounded-xl shadow-lg border border-gray-200"
          />

          <div className="space-y-3 text-gray-800">
            <p className="text-sm font-medium text-gray-600 uppercase tracking-wide">
              Group Lead
            </p>
            <h2 className="text-2xl font-bold text-[#b33c00] leading-snug">
              Dr. Mudrika Khandelwal
            </h2>
            <p className="text-gray-700 text-base font-medium">
              Associate Professor
            </p>
            <p className="text-sm leading-relaxed">
              Department of Materials Science and Metallurgical Engineering,
              <br /> Indian Institute of Technology Hyderabad
            </p>

            <a
              href="mailto:mudrika@msme.iith.ac.in"
              className="text-blue-700 hover:underline block text-sm"
            >
              mudrika@msme.iith.ac.in
            </a>

            <div className="pt-2 text-sm text-gray-700 leading-relaxed">
              <p>
                <span className="font-semibold">Ph.D.</span>, University of
                Cambridge, UK (2013)
              </p>
              <p>
                <span className="font-semibold">M.Tech, B.Tech</span>, IIT
                Bombay (2009)
              </p>
            </div>
          </div>
        </div>

        {/* Right Column - Content */}
        <div className="md:col-span-2 space-y-8">
          {/* Group Photo */}
          <img
            src="https://people.iith.ac.in/mudrika/img/group_1.jpg"
            alt="Research Group"
            className="rounded-xl shadow-lg border border-gray-200"
          />

          {/* Research Focus */}
          <div>
            <h2 className="font-bold text-xl text-[#40756f] border-b-2 border-[#2bbbad] inline-block pb-1">
              Research Focus
            </h2>
            <p className="text-base text-gray-700 mt-4 leading-relaxed">
              Established in 2013, our group has aimed at finding solutions to
              technologically and scientifically challenging societal concerns
              through materials intervention, with a special emphasis on
              sustainability. <br />
              <br />
              The interdisciplinary work carried out by our group is enabled by
              knowledge of multiple disciplines, materials at different length
              scales (nano, micro), and inspirations from nature. The primary
              focus areas (but not limited to) are highlighted below.
            </p>
          </div>

          {/* Infographic */}
          <img
            src="https://people.iith.ac.in/mudrika/img/Picture.png"
            alt="Research Focus Areas"
            className="rounded-xl border shadow-lg p-3 bg-white"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
