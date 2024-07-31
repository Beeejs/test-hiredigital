'use client';

import { useState } from 'react';

/* Uuid */
import { v4 as uuidv4 } from 'uuid';

/* Redux Icon */
import { UploadIcon } from '@radix-ui/react-icons';

/* Interfaces */
import { IFile } from '@/app/interfaces/files/IFile';
import ConfirmUpload from '../buttons/files';

const UploadComponent = () =>
{
  const [file, setFile] = useState<IFile>(
    {
      id: '',
      preview: '',
      name: '',
      size: 0,
      type: ''
    }
  );

  // Drop a file
  const handleDrop = (event: React.DragEvent<HTMLDivElement>) =>
  {
    event.preventDefault();
    const uploadFile = event.dataTransfer.files[0];
    setFile(
      {
        id: uuidv4(), // Create ID
        preview: URL.createObjectURL(new Blob([uploadFile])), // Preview
        name: uploadFile.name,
        size: uploadFile.size,
        type: uploadFile.type
      }
    );
  };

  // Drag over a file
  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) =>
  {
    event.preventDefault();
  };

  // Select a file
  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) =>
  {
    const files = event.target.files;
    if (files && files.length > 0)
    {
      const uploadFile = files[0];

      setFile(
        {
          id: uuidv4(), // Create ID
          preview: URL.createObjectURL(new Blob([uploadFile])), // Preview
          name: uploadFile.name,
          size: uploadFile.size,
          type: uploadFile.type
        }
      );
    }
  };

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
