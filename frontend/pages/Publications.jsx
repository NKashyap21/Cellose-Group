import React from "react";
import Navbar from "./Navbar";

const Publications = () => {
  // Patents
  const patents = [
    {
      info: `Provisional patent filed: "BACTERIAL CELLULOSE BASED MICROFLUIDIC POC DEVICE FOR AST".`,
      details: `Application Ref Number: 202241030646, Filing Date: 27/05/2022 – Indian Patent Office.`,
    },
    {
      info: `Pharmaceutical Compositions and Delivery Systems for Prevention and Treatment of Candidiasis, Mudrika Khandelwal, Shivakalyani Adepu.`,
      details: `Indian Patent 201841034939, Date of filing: Sept 17, 2018; PCT application: PCT/IB2019/057802.`,
    },
    {
      info: `Provisional patent filed: "Carbon fiber based ethylene adsorber for food packaging application".`,
      details: `Application Ref Number: 202241063104, Filing Date: 04/11/2022 – Indian Patent Office.`,
    },
  ];

  // Publications
  const publications = [
    {
      info: "Vikram Kishore Bharti, Anil Daliprasad Pathak, Chandra Shekhar Sharma, Mudrika Khandelwal. Ultra-high-rate lithium-sulfur batteries with high sulfur loading enabled by Mn2O3-carbonized bacterial cellulose composite as a cathode host.",
      details: "Electrochimica Acta. Volume 422, 2022: 140531.",
    },
    {
      info: "Bhagavathi Chalil Najathulla, Atul Suresh Deshpande, Mudrika Khandelwal. PEDOT:PSS/Bacterial Cellulose-based soft actuator under triangle and square wave: Deflection, response and fidelity.",
      details: "Synthetic Metals. Volume 286, 2022: 117053.",
    },
    {
      info: "Bhagavathi Chalil Najathulla, Atul Suresh Deshpande & Mudrika Khandelwal. Smartphone camera-based micron-scale displacement measurement: development and application in soft actuators.",
      details: "Instrumentation Science & Technology. 2022: 1-10.",
    },
    {
      info: "S. J. Eichhorn, A. Etale, J. Wang, L. A. Berglund, Y. Li, Y. Cai, C. Chen, E. D. Cranston, M. A. Johns, Z. Fang, G. Li, L. Hu, M. Khandelwal, K.-Y. Lee, K. Oksman, S. Pinitsoontorn, F. Quero, A. Sebastian, M. M. Titirici, Z. Xu, S. Vignolini & B. Frka-Petesic. Current international research into cellulose as a functional nanomaterial for advanced applications.",
      details: "Journal of Materials Science. 2022; 57, 5697-5767.",
    },
    {
      info: "Urbashi Mahanta, Mudrika Khandelwal, Atul Suresh Deshpande. TiO2@SiO2 nanoparticles for methylene blue removal and photocatalytic degradation under natural sunlight and low-power UV light.",
      details: "Applied Surface Science. Volume 576, Part A, 2022: 151745.",
    },
    {
      info: "Mani Pujitha Illa, Shivakalyani Adepu, Mudrika Khandelwal. Industrial-scale fabrication and functionalization of nanocellulose.",
      details:
        "Micro and Nano Technologies. Nanocellulose Materials. 2022: 21-42.",
    },
    {
      info: "Mani Pujitha Illa, Kalyani Peddapapannagari, Siju Cherikkattil Raghavan, Mudrika Khandelwal & Chandra S. Sharma. In situ tunability of bacteria derived hierarchical nanocellulose: current status and opportunities.",
      details: "Cellulose. 2021: 28, 10077-10097.",
    },
    {
      info: "Vikram Kishore Bharti, Anil Daliprasad Pathak, Mudrika Khandelwal, Chandra Shekhar Sharma. Mn2O3 Incorporated Carbonized Bacterial Cellulose As Sulfur Host for Lithium-Sulfur Batteries.",
      details: "The Electrochemical Society Meeting Abstracts. MA 2021-02 34.",
    },
    {
      info: "Chandra S Sharma, Mudrika Khandelwal. Polystyrene Recycling to Print Transfer.",
      details: "Resonance. 2021/9: 1305.",
    },
    {
      info: "Chandra S Sharma, Mudrika Khandelwal. Nature Inspires.",
      details: "Resonance. 2021/9: 1279-1285.",
    },
    {
      info: "Mahanta U, Khandelwal M, Deshpande AS. Antimicrobial surfaces: a review of synthetic approaches, applicability and outlook.",
      details: "Journal of Materials Science. 2021.",
    },
    {
      info: "S Adepu, M Khandelwal. Drug release behaviour and mechanism from unmodified and in situ modified bacterial cellulose.",
      details: "Proceedings of the Indian National Science Academy. 2021.",
    },
    {
      info: "MP Illa, CS Sharma, M Khandelwal*. Catalytic graphitization of bacterial cellulose-derived carbon nanofibers for stable and enhanced anodic performance of lithium-ion batteries.",
      details: "Materials Today Chemistry. 2021; 20: 100439.",
    },
    {
      info: "S Adepu, P Kalyani, M Khandelwal*. Bacterial Cellulose-Based Drug Delivery System for Dual Mode Drug Release.",
      details:
        "Transactions of the Indian National Academy of Engineering. 2021: 1-7.",
    },
    {
      info: "Raghavan, SC, PV, A, Khandelwal, M*. Hierarchical amphiphilic high‐efficiency oil-water separation membranes from fermentation derived cellulose and recycled polystyrene.",
      details: "Journal of Applied Polymer Science. 2021; 138: e50123.",
    },
    {
      info: "Adepu S, Khandelwal M*. Ex-situ modification of bacterial cellulose for immediate and sustained drug release with insights into release mechanism.",
      details: "Carbohydrate Polymers. 2020: 116816.",
    },
    {
      info: "Mani Pujitha Illa, Anil D Pathak, Chandra S. Sharma, and Mudrika Khandelwal. Bacterial Cellulose-Polyaniline Composite Derived Hierarchical Nitrogen-Doped Porous Carbon Nanofibers as Anode for High-Rate Lithium-Ion Batteries.",
      details: "ACS Applied Energy Materials. 2020; 3 (9): 8676-8687.",
    },
    {
      info: "Anju P, Khandelwal M*, Subahan MP, Kalle AM, Mathaparthi S. In situ synthesized hydro-lipophilic nano and micro fibrous bacterial cellulose: polystyrene composites for tissue scaffolds.",
      details: "Journal of Materials Science. 2020: 1-10.",
    },
    {
      info: "Adepu S, Khandelwal M*. Bacterial cellulose with microencapsulated antifungal essential oils: a novel double barrier release system.",
      details: "Materialia. 2020: 100585.",
    },
    {
      info: "Yadav S, Mattaparthi S, Sreenivasulu K, Khandelwal M, Majumdar S, Sharma CS. Recycling of thermoplastic polystyrene waste using citrus peel extract for oil spill remediation.",
      details: "Journal of Applied Polymer Science. 2019; 136(33): 47886.",
    },
    {
      info: "Mahanta U, Khandelwal M, Deshpande AS. Wetting Transition from Lotus Leaf to Rose Petal using Modified Fly Ash.",
      details: "ChemistrySelect. 2019; 4(27): 7936-42.",
    },
    {
      info: "Illa MP, Khandelwal M, Sharma CS. Tuning the physiochemical properties of bacterial cellulose: effect of drying conditions.",
      details: "Journal of Materials Science. 2019; 54(18): 12024-35.",
    },
    {
      info: "Illa MP, Khandelwal M, Sharma CS. Modulated Dehydration for Enhanced Anodic Performance of Bacterial Cellulose derived Carbon Nanofibers.",
      details: "ChemistrySelect. 2019; 4(21): 6642-50.",
    },
    {
      info: "Illa MP, Khandelwal M, Sharma CS. Bacterial cellulose-derived carbon nanofibers as anode for lithium-ion batteries.",
      details: "Emergent Materials. 2018; 1(3-4): 105-20.",
    },
    {
      info: "Gaydhane MK, Mahanta U, Sharma CS, Khandelwal M, Ramakrishna S. Cultured meat: state of the art and future.",
      details: "Biomanufacturing Reviews. 2018; 3(1): 1.",
    },
    {
      info: "Adepu S, Khandelwal M*. Broad-spectrum antimicrobial activity of bacterial cellulose silver nanocomposites with sustained release.",
      details: "Journal of Materials Science. 2018; 53(3): 1596-609.",
    },
    {
      info: "Kakunuri M, Wanasekara ND, Sharma CS, Khandelwal M, Eichhorn SJ. Three‐dimensional electrospun micropatterned cellulose acetate nanofiber surfaces with tunable wettability.",
      details: "Journal of Applied Polymer Science. 2017; 134(15).",
    },
    {
      info: "Kakunuri M, Khandelwal M, Sharma CS, Eichhorn SJ. Fabrication of bio-inspired hydrophobic self-assembled electrospun nanofiber based hierarchical structures.",
      details: "Materials Letters. 2017; 196: 339-42.",
    },
    {
      info: "Kakunuri M, Araga R, Khandelwal M, Sharma CS. Cellulose Acetate Derived Free-Standing Electrospun Carbon Nanofibrous Mat as Anode Material for Rechargeable Lithium-Ion Battery.",
      details: "ECS Transactions. 2017; 80(10): 419.",
    },
    {
      info: "Adepu S, Gaydhane MK, Kakunuri M, Sharma CS, Khandelwal M*, Eichhorn SJ. Effect of micropatterning induced surface hydrophobicity on drug release from electrospun cellulose acetate nanofibers.",
      details: "Applied Surface Science. 2017; 426: 755-62.",
    },
    {
      info: "Adepu S, Dhiman N, Laha A, Sharma CS, Ramakrishna S, Khandelwal M*. Three-dimensional bioprinting for bone tissue regeneration.",
      details: "Current Opinion in Biomedical Engineering. 2017; 2: 22-8.",
    },
    {
      info: "Maity PC, Khandelwal M*. Synthesis time and temperature effect on polyaniline morphology and conductivity.",
      details:
        "American Journal of Materials Synthesis and Processing. 2016; 1(4): 37.",
    },
    {
      info: "Khandelwal M*, Windle AH, Hessler N. In situ tunability of bacteria produced cellulose by additives in the culture media.",
      details: "Journal of Materials Science. 2016; 51(10): 4839-44.",
    },
    {
      info: "Khandelwal M*, Windle AH. Small angle X-ray study of cellulose macromolecules produced by tunicates and bacteria.",
      details:
        "International Journal of Biological Macromolecules. 2014; 68: 215-7.",
    },
    {
      info: "Khandelwal M*, Windle A. Origin of chiral interactions in cellulose supra-molecular microfibrils.",
      details: "Carbohydrate Polymers. 2014; 106: 128-31.",
    },
    {
      info: "Khandelwal, M. and K. Aggarwal. Contextualising engineering education to 21st century-MBA style education for engineering.",
      details: "Journal of Engineering Education Transformations. 2016.",
    },
    {
      info: "Ramakrishna, P.S. and M. Khandelwal. Attributes of engineers and engineering education for the 21st century world.",
      details:
        "Journal of Engineering Education Transformations. 2014. 27(4): 17-28.",
    },
  ];

  // Other Papers
  const otherPapers = [
    {
      info: `Khandelwal M, Windle AH. Hierarchical Organisation in the Most Abundant Biopolymer-Cellulose.`,
      details: `MRS Online Proceedings Library Archive. 2013;1504.`,
    },
    {
      info: `Khandelwal M, Windle AH. Self-assembly of bacterial and tunicate cellulose nanowhiskers.`,
      details: `Polymer. 2013;54(19):5199-206.`,
    },
    {
      info: `Khandelwal M, Hessler N, Windle AH. Effect of modification in cellulose microstructure on liquid crystallinity.`,
      details: `MRS Online Proceedings Library Archive. 2013; 1498:221-6.`,
    },
    {
      info: `Khandelwal M, Windle AH. Structure and Low Concentration Self Assembly of Food Grade Bacterial Cellulose Nano-Whiskers.`,
      details: `MRS Online Proceedings Library Archive. 2012;1420.`,
    },
    {
      info: `Khandelwal M, Venkatasubramanian A, Prasanna T, Gopalan P. Correlation between microstructure and electrical conductivity in composite electrolytes containing Gd-doped ceria and Gd-doped barium cerate.`,
      details: `Journal of the European Ceramic Society. 2011;31(4):559-68.`,
    },
  ];

  return (
    <div>
      <Navbar />

      <div className="w-[85%] max-w-7xl m-auto mt-12 space-y-12">
        {/* Page Title */}
        <h1 className="text-3xl font-bold text-center text-[#b33c00] mb-10">
          Patents & Publications
        </h1>

        {/* Patents Section */}
        <section>
          <h2 className="text-2xl font-semibold text-[#2bbbad] mb-4">
            Patents
          </h2>
          <ol className="list-decimal pl-6 space-y-6 text-gray-800 text-base leading-relaxed">
            {patents.map((patent, index) => (
              <li key={index} className="pl-2">
                <div>{patent.info}</div>
                <div className="ml-4 text-gray-600 italic">
                  {patent.details}
                </div>
              </li>
            ))}
          </ol>
        </section>

        {/* Publications Section */}
        <section>
          <h2 className="text-2xl font-semibold text-[#2bbbad] mb-4">
            Publications
          </h2>
          <ol className="list-decimal pl-6 space-y-6 text-gray-800 text-base leading-relaxed">
            {publications.map((pub, index) => (
              <li key={index} className="pl-2">
                <div>{pub.info}</div>
                <div className="ml-4 text-gray-600 italic">{pub.details}</div>
              </li>
            ))}
          </ol>
        </section>

        {/* Other Papers Section */}
        <section>
          <h2 className="text-2xl font-semibold text-[#2bbbad] mb-4">
            Other Papers
          </h2>
          <ol className="list-decimal pl-6 space-y-6 text-gray-800 text-base leading-relaxed">
            {otherPapers.map((paper, index) => (
              <li key={index} className="pl-2">
                <div>{paper.info}</div>
                <div className="ml-4 text-gray-600 italic">{paper.details}</div>
              </li>
            ))}
          </ol>
        </section>
      </div>
    </div>
  );
};

export default Publications;
