import React from 'react';

const SkeletonFiles = () =>
{
  return (
    Array.from({ length: 12 }).map((_, index) =>
      <div
        key={index}
        className="flex justify-center items-center bg-codeBlue/70 w-full rounded-lg"
      >
        <div
          className="flex flex-col justify-center items-start gap-2 w-full px-2 py-4 animate-pulse"
        >
          <div
            className="w-full h-4 bg-codeWhite/70 rounded-lg"
          />
          <div
            className="w-full h-4 bg-codeWhite/70 rounded-lg"
          />
          <div
            className="w-full h-4 bg-codeWhite/70 rounded-lg"
          />
        </div>
      </div>
    )
  );
};

export default SkeletonFiles;
