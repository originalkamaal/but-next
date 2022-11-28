import React from 'react';

const SectionTitle = ({ title, link, linkTitle }) => {
  return (
    <>
      <div className="font-extrabold w-full flex justify-center py-3 lg:py-8 lg:text-4xl text-xl">
        {title}
      </div>
      {link && (
        <div className="text-[${color}] text-sm flex justify-end whitespace-nowrap px-8 lg:px-10">
          <a href={link}>{linkTitle}</a>
        </div>
      )}
    </>
  );
};

export default SectionTitle;
