import React from 'react';

const Quotation = ({ iconUrl, quote, author }) => {
  return (
    <div className="bg-gray-200 p-6 mt-10 rounded-lg text-center">
      <img src={iconUrl} alt="Quote Icon" className="mx-auto mb-4 w-12 h-12" />
      <p className="text-xl italic">“{quote}”</p>
      <h4 className="mt-2 font-bold">— {author}</h4>
    </div>
  );
};

export default Quotation;