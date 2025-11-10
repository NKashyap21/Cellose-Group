const PersonCard = ({ person }) => {
  return (
    <div className="bg-white rounded-2xl shadow hover:shadow-lg transition duration-300 flex flex-col overflow-hidden border border-gray-100">
      {/* Image or placeholder */}
      {person.image ? (
        <img
          src={person.image}
          alt={person.name}
          className="w-full h-56 object-cover"
        />
      ) : (
        <div className="w-full h-56 flex items-center justify-center bg-gray-100">
          <h2 className="text-2xl font-bold text-gray-700">{person.name}</h2>
        </div>
      )}

      {/* Info section */}
      <div className="p-5 flex flex-col flex-grow">
        {/* Name */}
        {person.image && (
          <h2 className="text-xl font-bold text-gray-900 mb-1">
            {person.name}
          </h2>
        )}

        {/* Title */}
        {person.title && (
          <p className="text-sm text-teal-700 font-medium mb-3 leading-snug">
            {person.title}
          </p>
        )}

        {/* About section */}
        {person.description && (
          <div className="text-sm text-gray-700 leading-relaxed">
            <span className="block font-semibold text-black mb-1">About:</span>
            <p className="text-gray-600">{person.description}</p>
          </div>
        )}

        {/* Optional fields */}
        {person.contribution && (
          <p className="text-sm text-gray-700 mt-3">
            <span className="font-semibold">Contribution to group: </span>
            {person.contribution}
          </p>
        )}

        {person.coSupervisor && (
          <p className="text-sm text-gray-700 mt-3">
            <span className="font-semibold">Co-supervisor: </span>
            {person.coSupervisor}
          </p>
        )}

        {person.current && (
          <p className="text-sm text-gray-700 mt-3">
            <span className="font-semibold">Currently at: </span>
            {person.current}
          </p>
        )}

        {person.currentAffiliation && (
          <p className="text-sm text-gray-700 mt-3">
            <span className="font-semibold">Current Affiliation: </span>
            {person.currentAffiliation}
          </p>
        )}

        {person.sponsor && (
          <p className="text-sm text-gray-700 mt-3">
            <span className="font-semibold">Sponsored by: </span>
            {person.sponsor}
          </p>
        )}
      </div>
    </div>
  );
};

export default PersonCard;
