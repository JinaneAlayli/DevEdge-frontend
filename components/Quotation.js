import React from 'react';

const Quotation = ({ iconUrl, quote, author }) => {
  return (
    <div className="bg-[#27273D] p-6 mt-20 text-white  text-center">
      <img src={iconUrl} alt="Quote Icon" className="mx-auto mb-4 w-10 h-10" />
      <p className="text-3xl italic">“{quote}”</p>
      <h4 className="mt-4 font-bold">— {author}</h4>
    </div>
  );
};

export default Quotation;