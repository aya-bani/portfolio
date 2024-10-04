import React from 'react';

export const ImageContainer = ({ imgSrc }) => {
  return (
    <div className="relative w-[300px] h-[300px] flex items-center justify-center rounded-4xl">
      <img
        src={imgSrc}
        alt="Project Preview"
        className="relative z-[2] w-[300px] h-[300px] object-cover rounded-4xl"
      />
    </div>
  );
};
