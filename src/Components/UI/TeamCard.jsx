import React from "react";
import { Linkedin } from "lucide-react";

const TeamCard = ({ image, name, role, linkedIn, description }) => {
  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-2xl shadow-md overflow-hidden">
      {/* Top Part */}
      <div className="flex justify-between items-start p-4">
        {/* Left: Image */}
        <img
          src={image}
          alt={name}
          className="w-20 h-20 rounded-full object-cover"
        />

        {/* Right: Name, Role, LinkedIn */}
        <div className="flex flex-col items-end">
          <a
            href={linkedIn}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-blue-600 font-semibold hover:underline mb-1"
          >
            <Linkedin className="w-5 h-5 mr-2" /> {name}
          </a>
          <span className="text-gray-500 text-sm">{role}</span>
        </div>
      </div>

      {/* Divider */}
      <hr className="border-gray-300" />

      {/* Bottom Part: Description */}
      <div className="p-4">
        <p className="text-gray-700 text-sm">{description}</p>
      </div>
    </div>
  );
};

export default TeamCard;
