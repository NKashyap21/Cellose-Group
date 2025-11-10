import React from 'react'
import Navbar from './Navbar';
import Section from '@/components/ui/section';

const phd = [
  {
    name: "Sukesh Kumar",
    image: "/images/sukesh_kumar.png",
    title: "Multi-physics Analysis of PEDOT:PSS-Bacterial Cellulose Bilayer Actuator",
    description: "Sukesh Kumar is driven by a deep interest in how semiconducting polymers and electrochemistry can be harnessed to create life-like motion in soft systems. As a joint doctoral scholar with IIT Hyderabad and Swinburne University of Technology (Australia), his research focuses on PEDOT:PSS-bacterial cellulose bilayer actuators. By combining biocompatible natural polymers with electronic functionality, he explores how soft actuators can transition from laboratory curiosities to practical components of smart, responsive devices. His work reflects a broader passion for materials that bridge biology and electronics, with the potential to redefine the future of soft robotics and bio-integrated technologies.",
  },
  {
    name: "Peddapappanagari Kalyani",
    image: "/images/p_kalayani.png",
    title: "Bacterial Cellulose-Based Drug Delivery Systems for Differently Soluble Drugs: Applications in Implants and Transdermal Therapy",
    description: " PPG Kalyani is a biomaterials researcher passionate about developing innovative drug delivery platforms. Her current work centers on bacterial cellulose-based implants and transdermal controlled drug delivery systems designed for both water-soluble and water-insoluble drugs. She envisions biomaterials as active enablers of patient-centric and sustainable healthcare solutions, extending her interests to implant systems, polymer matrices, pharmacokinetics, degradation studies, and even eco-friendly food packaging",
  },
  {
    name: "Aszad Alam",
    image: "/images/aszad_aslam.png",
    title: "Bacterial Cellulose-Based Magnetic Drug Delivery Systems for Cancer Treatment",
    description: "Aszad is a joint doctoral scholar with IIT Hyderabad and Swinburne University of Technology (Australia), focusing on nanomaterials for advanced biomedical applications. He enjoys working on “interactions at the nanoscale” as a pathway to design efficient and responsive drug delivery systems. His research focuses on the attachment, assembly, and distribution of inorganic and organic nanoparticles on nanofibrous bacterial cellulose to create magnetic platforms for targeted cancer therapy. By combining the versatility of bacterial cellulose with the precision of nanoscale engineering, he envisions drug delivery systems that are not only effective but also tailored to improve patient outcomes in cancer treatment. ",
  },
  {
    name: "Aditya Syamala",
    image: "/images/aditya_syamala.png",
    title:"Bacterial Cellulose-Based Magnetic Drug Delivery Systems for Cancer Treatment",
    description:"Aditya Syamala is a doctoral researcher  intrigued by how surfaces can be engineered to control the behavior of water. He enjoys working at the interface of materials science and sustainability, developing functional surfaces with tunable wettability for applications in atmospheric water harvesting, anti-biofouling, and self-cleaning technologies. His work focuses on designing and engineering hydrophobic, hydrophilic, and slippery liquid-infused porous surfaces to precisely control liquid interactions. Through this approach, he aims to develop sustainable solutions for efficient water collection and surface protection, advancing materials that address both environmental and industrial challenges."
  },
  {
    name: "Anurag Kumar",
    image: "/images/anurag_kumar.png",
    title:"High-Performance Functional Fibers From Bacterial Cellulose",
    description: "Anurag is a joint doctoral scholar with IIT Hyderabad and Deakin University (Australia). He explores the art and science of transforming bacterial cellulose, a remarkable biopolymer, into high-performance, functional fibers. His work focuses on creating fibers that are not only strong and tough but can also be tailored for applications ranging from surgical sutures to soft robotics. He fine-tunes bacterial cultures to produce spinnable hydrogels and experiments across the spectrum, from gels to liquid crystalline suspensions, to develop fibers that translate nanoscale mechanics to the macroscale. Inspired by nature’s master weavers, such as spiders, he optimizes the spinning process to craft fibers that combine strength, flexibility, and functionality. Ultimately, his research aims to harness biology to create materials that perform, adapt, and inspire innovation. Recently, he has been attempting to “communicate” with the bacteria to better understand how they construct such remarkable fibers.",
  },
  {
    name: "Parnika P",
    image: "/images/parnika_p.png",
    title: "Unlocking the Potential of Bacterial Nanocellulose as Cathode Host for Metal Sulfur Batteries.",
    description: "Parnika is a researcher working at the intersection of electrochemistry and energy storage systems. Her work focuses on utilizing bacterial nanocellulose as a sustainable cathode host for metal sulfur batteries, an alternative to conventional lithium-ion batteries. By engineering carbon nanofiber-based structures derived from bacterial cellulose, she aims to overcome challenges such as low conductivity and polysulfide shuttling, ultimately contributing to high-performance, cost-effective, and eco-friendly energy storage solutions.",
  },
  {
    name: "Spandana",
    image: "/images/spandana.png",
    title: "Design and Fabrication of High Entropy Shape Memory Alloys",
    description:"Spandana is a researcher exploring high entropy shape memory alloys, a new class of smart materials that combine exceptional structural and functional properties. She is particularly interested in designing these alloys for high-temperature applications and advanced functional uses, where both phase transformation behavior and mechanical performance play a vital role. Beyond their structural promise, she also collaborates with the bacterial cellulose group to investigate how these alloys interact with microorganisms, carrying out antifouling studies that open pathways for biomedical and marine applications. Her work is supported by the DRDO Young Scientists Laboratory for Smart Materials, reflecting her broader commitment to developing materials that are versatile, adaptive, and impactful across multiple domains.", 
  },
  {
    name: "Sukriti Gangwar",
    image: "/images/sukruti_gangwar.png",
    title: "Tailoring Porosity and Surface Wettability in Bacterial Cellulose Hydrogel",
    description: "Sukriti is intrigued by the fundamental role of porosity and surface wettability in bacterial cellulose hydrogels. Her research focuses on establishing reliable methods to measure pore size, shape, and distribution, and on devising ways to tune these properties for application-specific performance. She is also developing poroelastic models that couple mechanical testing with fluid flow dynamics, aiming to create standardized and reproducible frameworks for evaluating bacterial cellulose.",
  },
  {
    name:"Sarita C",
    title:"Development of a Bacterial Cellulose-based Microfluidic Device for Antibiotic Susceptibility Testing",
    image:"/images/sarita_c.png",
    description:"Sarita C is a doctoral scholar working on bacterial cellulose–based microfluidic devices for antibiotic susceptibility testing. Her research focuses on transforming freeze-dried bacterial cellulose into patterned, biodegradable platforms that can confine fluids and enhance the interaction between antibiotics and bacterial cells. With an emphasis on simplicity, reliability, and sustainability, her work aims to create accessible point-of-care diagnostic tools to address the growing challenge of antimicrobial resistance. Her project is supported by the Science and Engineering Research Board (SERB-CRG).",
  }
];

const pdf = [
  {
    name:"Dr. Jiji Swaminathan",
    title:"Biodegradable Self-Sanitizing Bacterial Nanocellulose Fabrics for Air and Water Filtration and Exploring BC Microbeads for Micronutrient Delivery in Sustainable Agriculture",
    image:"/images/jiji.png",
    description:"Dr. Jiji Swaminathan works on developing bacterial cellulose-based eco-friendly materials for healthcare, environmental, and agricultural applications. She completed her Ph.D. at DRDO-BU-CLS, Bharathiar University, Tamil Nadu, where she focused on bacterial cellulose for third-degree burn wound dressings. She later pursued a postdoctoral fellowship at the University of Louisville, USA, investigating recombinant protein therapies for ulcerative colitis. Her current research explores biodegradable self-sanitizing bacterial nanocellulose fabrics for air and water filtration, as well as bacterial cellulose microbeads for controlled micronutrient delivery in sustainable agriculture. Her project is supported by the National Technical Textiles Mission (NTTM)."
  },
  {
    name:"Dr. Konala Akhila",
    title:"Circular Agro-Tech for Nutritional Security: Agricultural Waste–Derived Materials for Active and Smart Fresh Food Packaging for Enhanced Shelf Life",
    image:"images/akhila.png",
    description:"Dr. Konala Akhila is a sustainability enthusiast, with expertise in packaging, biopolymers, and smart materials. She has pursued her Ph.D. from IIT Roorkee on smart and sustainable food packaging. She is currently working on large scale production of bacterial cellulose from agri waste to support circular agro-tech and employing the BC as a microplastic free and amphiphilic biodegradable packaging for smart food packaging.",
  }
]

const research_associate = [
  {
    name:"Mohammed Arif Khan",
    title:"Modulated Dual Drug Release from Nanocellulose for Medicated Dressing",
    image:"/images/arif_khan.png",
    description:"Arif’s research explores bacterial cellulose–based scaffolds as programmable platforms for wound care. By engineering nanocellulose to enable dual drug release, he aims to design medicated dressings that guide tissue regeneration and promote scar-free healing. His work, supported by the SERB Women’s Excellence Awards (India), contributes to advancing bioactive materials for drug delivery and regenerative medicine."
  }
]

const technical_staff = [
{
    name:"Saimatha Gannabathula",
    image:"images/samitha.png",
    description:"With 14 years of research and teaching experience, Sai Matha serves as the technical backbone of the group. Her expertise spans molecular biology, protein biochemistry, cell culture, microbiology, and analytical techniques, enabling a wide spectrum of experimental work to progress seamlessly. Beyond technical execution, she plays a pivotal role in training students, maintaining laboratory standards, and ensuring continuity across diverse research projects. As the pillar of support for the Cellulose and Composites Group, her contributions underpin the success of ongoing projects in biofabrication, drug delivery, and advanced materials research."
}
]

const mtech = [
  {
    name: "Partha Pratim Das",
    image: "/images/partha.jpg",
    title: "Biodegradable food packaging for fresh produce: Shelf life extension",
  },
  {
    name: "Ashish Priyam Goswami",
    image: "/images/ashish.jpg",
    title:
      "Bacterial cellulose based functionalized carbon nano fibres as electrode for metal sulphur batteries",
    coSupervisor: "Dr. Chandra S. Sharma",
  },
  {
    name: "Saritha",
    image: "/images/saritha.jpg",
    title:
      "Microfluidics aided patterned nanofibrous materials based on bacterial cellulose",
    coSupervisor: "Dr. Suhanya Duraiswamy",
  },
  {
    name: "Aditya Burla",
    image: "/images/aditya.jpg",
    title: "Antifouling materials based on high entropy alloys",
    coSupervisor: "Dr. Mayur Vaidya",
  },
  {
    name: "Apurva Anjan",
    image: "/images/apurva.jpg",
    title: "Bacterial cellulose-based batteries",
    coSupervisor: "Dr. Chandra S. Sharma",
  },
];

const alumni = [
  {
    name: "Dr. Siju C. R.",
    contribution: "Post Doctoral",
  },
  {
    name: "Dr. Shivakalyani Adepu",
    contribution: "Post Doctoral (Drug delivery, antimicrobial materials)",
    current:
      "Project Investigator, BIRAC Biotechnological Ignition Grant Incubated i-TIC, IIT Hyderabad",
  },
  {
    name: "Dr. Urbashi Mahanta",
    contribution:
      "Ph.D (Wettability tuning, Hydrophobic coatings, antimicrobial surfaces)",
  },
  {
    name: "Dr. Illa Mani Pujitha",
    contribution: "Ph.D (Bacterial cellulose based carbon anode for lithium ion batteries)",
    current: "Institute Post-doctoral Fellow, IIT Bombay",
  },
  {
    name: "Pintu Maity",
    contribution: "M.Tech (conducting polymer based monolithic actuators)",
    current: "Doctoral candidate, IIT Kharagpur",
  },
  {
    name: "Dr. Divya Anand",
    contribution: "M.Tech (conducting composites)",
    current:
      "Technological Environment Maintenance Specialist, Nippon Paint Holdings Co Ltd, Japan",
  },
  {
    name: "Dr. Manohar Kakunuri",
    contribution: "Post-Doc Fellow (electrospun materials for energy, health & environment)",
    current:
      "Assistant Professor, Dept of Chemical Engineering, National Institute of Technology, Warangal",
  },
  {
    name: "Mr. Palash Chandra Maity",
    contribution: "M.Tech (conducting composites)",
    current: "Pursuing PhD at IIT Roorkee",
  },
  {
    name: "Mr. Debabrata Palai",
    contribution: "M.Tech (depth filters)",
    current: "Pursuing PhD at Tokyo Institute of Technology",
  },
  {
    name: "Ms. Anju P. V.",
    contribution: "M.Tech (In situ composites for scaffolds, packaging, filtration)",
    current: "Offered PhD at Hokkaido University",
  },
  {
    name: "Mukul Choudhary",
    contribution: "M.Tech (Microfluidic devices based on bacterial cellulose)",
  },
  {
    name: "Aditya Burla",
    contribution: "M.Tech (Antifouling materials based on high entropy alloys)",
  },
  {
    name: "Apurva Anjan",
    contribution: "M.Tech (Bacterial cellulose-based batteries)",
  },
];

const collaborators = [
  {
    name: "Dr. Atul S. Deshpande",
    image: "/images/atul.jpg",
    title:
      "Associate Professor, Dept. of Materials Science and Metallurgical Engineering, IIT Hyderabad",
  },
  {
    name: "Dr. Chandra Shekhar Sharma",
    image: "/images/chandrashekhar.jpg",
    title: "Associate Professor, Dept. of Chemical Engineering, IIT Hyderabad",
  },
  {
    name: "Dr. Arunasree M. Kalle",
    image: "/images/unkown.jpg",
    title: "Associate Professor, School of Life Sciences, University of Hyderabad",
  },
  {
    name: "Dr. Mayur Vaidya",
    image: "/images/mayur.jpg",
    title:
      "Assistant Professor, Dept. of Materials Science and Metallurgical Engineering, IIT Hyderabad",
  },
  {
    name: "Dr. Aimin Yu",
    image: "/images/unkown.jpg",
    title:
      "Associate Professor, Dept. of Chemistry and Biotechnology, Swinburne University of Technology, Australia",
  },
  {
    name: "Dr. Veda Krishnan",
    image: "/images/unkown.jpg",
    title:
      "Scientist, Biochemistry Department, Indian Agricultural Research Institute, New Delhi",
  },
  {
    name: "Prof. Stephen Eichhorn",
    image: "/images/stephen.jpg",
    title: "Bristol, Composites Institute, University of Bristol, UK",
  },
  {
    name: "Dr. Bharat B. Panigrahi",
    image: "/images/unkown.jpg",
    title:
      "Associate Professor, Dept. of Materials Science And Metallurgical Engineering, IIT Hyderabad",
  },
  {
    name: "Prof. Seeram Ramakrishna",
    image: "/images/unkown.jpg",
    title: "Dept. of Mechanical Engineering, National University of Singapore",
  },
  {
    name: "Prof. Peter Kingshott",
    image: "/images/unkown.jpg",
    title: "Professor of Surface Engineering, Swinburne University, Australia",
  },
  {
    name: "Prof. Stevan Langford",
    image: "/images/unkown.jpg",
    title:
      "Professor of Chemistry, Associate Dean Research, School of Science, Computing and Engineering Technologies, Swinburne University of Technology",
  },
  {
    name: "Dr. Seetha N",
    image: "/images/unkown.jpg",
    title: "Associate Professor, Department of Civil Engineering, IIT Hyderabad",
  },
  {
    name: "Dr. Suhanya Duraiswamy",
    image: "/images/unkown.jpg",
    title:
      "Assistant Professor, Department of Chemical Engineering, IIT Hyderabad",
  },
];


const People = () => {
  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <Section title="PhD" people={phd} />
        <Section title="PDFs" people={pdf}/>
        <Section title="Research Associate" people={research_associate}/>
        <Section title="M.Tech" people={mtech} />
        <Section title="Alumni" people={alumni} />
        <Section title="Collaborators" people={collaborators} />
      </div>
    </>
  );
};

export default People;