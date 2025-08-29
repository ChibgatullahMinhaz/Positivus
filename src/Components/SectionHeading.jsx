import React from "react";

const SectionHeading = ({title, des}) => {
  return (
    <div className="flex flex-col md:flex-row  space-x-7 items-center my-4">
      <h1 className="bg-yellow-200 rounded-lg text-black font-bold p-2">
        {title}
      </h1>
      <p className="max-w-md my-4 sm:my-0">
        {des}
      </p>
    </div>
  );
};

export default SectionHeading;
