'use client';

import { useContext } from 'react';

/* Components */
import ConfirmUpload from '../buttons/files';

/* Redux Icon */
import { UploadIcon } from '@radix-ui/react-icons';

/* Context */
import { FileDataContext } from '@/app/context/fileContext';


const UploadComponent = () =>
{
  const { file, handleDrop, handleDragOver, handleFileSelect } = useContext(FileDataContext);

  // Simulate an Input click
  const handleClick = () =>
  {
    document.getElementById('fileUpload')?.click();
  };

  return (
    <>
      <div
        className='relative flex justify-center items-center flex-col rounded-lg w-full shadow-lg bg-codeWhite h-[250px] cursor-pointer text-center mx-auto mb-8 hover:bg-secondary transition-colors ease duration-300'
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onClick={handleClick}
      >
        <input
          type="file"
          id="fileUpload"
          onChange={handleFileSelect}
          multiple
          className='hidden'
        />
        <div className='flex justify-center items-center flex-col gap-4'>
          <UploadIcon className='w-6 h-6 text-codeBlue'/>
          <p className='text-primary/70 font-Poppins text-base font-medium'>
            Drag and drop files here or click to select files
          </p>
          <span className='text-primary/70 font-Poppins text-base font-normal'>Max file size: <strong className='text-codeBlue'>5MB</strong></span>
        </div>
        {
          file.preview && (
            <div className='absolute top-0 left-0 w-full h-full rounded-lg'>
              <img
                src={file.preview}
                alt={`preview-${file.name}`}
                className='w-full h-full object-cover rounded-t-lg contrast-50'
              />
              <p className='text-left bg-codeWhite text-codeBlue font-Poppins text-base font-normal rounded-b-lg px-2 py-1'>{file.name}</p>
            </div>
          )
        }
      </div>
      <ConfirmUpload file={file} />
    </>
  );
};

export default UploadComponent;
