import React from 'react';

const UploadDescription = () =>
{
  return (
    <div className='flex justify-center items-start flex-col gap-4 w-full'>
      <h3 className='font-Poppins text-xl text-secondary font-bold'>Upload a File</h3>
      <p className='font-Poppins text-base text-secondary font-normal'>Accepted formats: All formats</p>
    </div>
  );
};

export default UploadDescription;
