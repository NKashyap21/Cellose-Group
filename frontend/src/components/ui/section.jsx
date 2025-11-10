import PersonCard from "./card";

const Section = ({ title, people }) => {
  return (
    <div className="my-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-2">{title}</h1>
      <div className="w-24 h-1 bg-teal-600 mb-8 rounded"></div>
      <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {people.map((person, index) => (
          <PersonCard key={index} person={person} />
        ))}
      </div>
    </div>
  );
};

export default Section;
