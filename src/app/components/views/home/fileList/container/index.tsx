'use client';

import { useEffect, useState } from 'react';

/* Components */
import SkeletonFiles from '@/app/components/skeleton/files';
import ItemFile from '../item';

/* Interface */
import { ListBlobResult } from '@vercel/blob';

const FileListContainer: React.FC<{ files: ListBlobResult | undefined }> = ({ files }) =>
{
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() =>
  {
    const fetchFiles = async() =>
    {
      setLoading(true);
      setTimeout(() =>
      {
        setLoading(false);
      }, 2000); // Simula una carga de 2 segundos
    };

    fetchFiles();
  }, []);

  return (
    <div className={`flex flex-col ${files?.blobs.length === 0 ? 'justify-center items-center' : 'justify-start items-start'} px-12 py-4 w-full gap-6 rounded-lg h-[400px] overflow-y-scroll bg-codeWhite/70`}>
    {
      files && !loading
      ?
        files?.blobs.length > 0
        ?
          files?.blobs.map((file, index) =>
          {
            return (
              <ItemFile key={index} file={file} />
            );
          })
        :
        <p className='font-Poppins text-base text-secondary font-normal'>No files found</p>
      :
        <SkeletonFiles />
    }
    </div>
  );
};

export default FileListContainer;
