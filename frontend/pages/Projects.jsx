import React from "react";
import Navbar from "./Navbar";

const Projects = () => {
  const images = [
    "https://people.iith.ac.in/mudrika/img/Picture2.png",
    "https://people.iith.ac.in/mudrika/img/Picture3.png",
    "https://people.iith.ac.in/mudrika/img/Picture4.png",
    "https://people.iith.ac.in/mudrika/img/Picture5.png",
    "https://people.iith.ac.in/mudrika/img/Picture6.png",
    "https://people.iith.ac.in/mudrika/img/Picture7.png",
  ];

  return (
    <div>
      <Navbar />

      <div className="w-[85%] max-w-7xl m-auto mt-12 space-y-16">
        {/* 1. Recent Projects */}
        <section>
          <h2 className="text-3xl font-bold text-center text-[#b33c00] mb-8">
            Glimpse of Recent Projects
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {images.map((img, idx) => (
              <div
                key={idx}
                className="rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
              >
                <img
                  src={img}
                  alt={`Recent Project ${idx + 1}`}
                  className="w-full h-auto object-contain hover:scale-105 transition-transform duration-300 bg-white p-2"
                />
              </div>
            ))}
          </div>
        </section>

        {/* 2. Funded Projects */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-gray-800">
            Funded Projects
          </h2>

          {/* Ongoing */}
          <div>
            <h3 className="text-lg font-medium text-[#2bbbad] mb-2">Ongoing</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2 text-sm">
              <li>
                SERB women excellence award for{" "}
                <span className="italic">
                  "Modulated dual drug release from nanocellulose for medicated
                  dressing"
                </span>
                . 2022–2025.
              </li>
              <li>
                Government of India’s National Technical Textiles Mission of the
                Ministry of Textiles project on{" "}
                <span className="italic">
                  "Biodegradable self-sanitizing bacterial nanocellulose fabric
                  for air and water filtration"
                </span>
                . 2022–2025.
              </li>
              <li>
                SERB Core research grant on{" "}
                <span className="italic">
                  "Bacterial cellulose derived nanostructured carbon materials
                  with tunable porosity as high performance anode for lithium
                  ion battery"
                </span>{" "}
                2019–2022.
                <br />
                <span className="text-gray-600 text-xs italic">
                  Collaborator: Dr. Chandra Shekhar Sharma (Chemical
                  Engineering, IITH)
                </span>
              </li>
            </ul>
          </div>

          {/* Completed */}
          <div>
            <h3 className="text-lg font-medium text-[#2bbbad] mb-2">
              Completed
            </h3>
            <ul className="list-decimal list-inside text-gray-700 space-y-4 text-sm">
              <li>
                DST-UKIERI Project on{" "}
                <span className="italic">
                  "Polymer and Carbon based Three Dimensional Micropatterned
                  Nanofabric with Enhanced Wettability Contrast"
                </span>{" "}
                2015–2017.
                <br />
                <span className="text-gray-600 text-xs italic">
                  Collaborators: Dr. Chandra Shekhar Sharma (Chemical
                  Engineering, IITH), Prof. Stephen Eichhorn (Chair in Materials
                  Science, University of Exeter)
                </span>
              </li>
              <li>
                SERB Fast Track for Young Scientists/Start-Up Research Grant
                (Young Scientists) titled{" "}
                <span className="italic">
                  "Novel low cost antifouling materials for healthcare and food
                  packaging industry"
                </span>{" "}
                2015–2018.
              </li>
            </ul>
          </div>

          {/* Sponsored and Consultancy */}
          <div>
            <h3 className="text-lg font-medium text-[#2bbbad] mb-2">
              Sponsored and Consultancy Projects
            </h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2 text-sm">
              <li>E-SPIN NANOTECH Pvt. Ltd. – air and water filtration.</li>
              <li>LDS Pvt. Ltd. – antimicrobial food packaging.</li>
              <li>Malai Biomaterials Pvt. Ltd. – artificial leather.</li>
              <li>Eaton Pvt. Ltd. – depth filters.</li>
              <li>
                CSR grant by AT&T incorporation for{" "}
                <span className="italic">
                  "Herbal antimicrobial pantyliners for mitigation of vaginal
                  candidiasis"
                </span>
                .
              </li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Projects;
