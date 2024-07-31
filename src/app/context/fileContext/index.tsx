import { createContext, useEffect, useState } from 'react';

/* Interfaces */
import { IFile } from '@/app/interfaces/files/IFile';

/* Uuid */
import { v4 as uuidv4 } from 'uuid';

interface ContextProps {
  file: IFile;
  setFile: React.Dispatch<React.SetStateAction<IFile>>;
  handleDrop: (event: React.DragEvent<HTMLDivElement>) => void;
  handleDragOver: (event: React.DragEvent<HTMLDivElement>) => void;
  handleFileSelect: (event: React.ChangeEvent<HTMLInputElement>) => void;
  /* refreshFiles: boolean; */
}


export const FileDataContext = createContext<ContextProps>({} as ContextProps);

const FileContext = ({ children }: { children: React.ReactNode }) =>
{
  const [file, setFile] = useState<IFile>(localStorage.getItem('file') ? JSON.parse(localStorage.getItem('file') as string) : {
    id: '',
    preview: '',
    name: '',
    size: 0,
    type: ''
  });

  useEffect(() =>
  {
    localStorage.setItem('file', JSON.stringify(file));
  }, [file]);

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


  return (
    <FileDataContext.Provider value={{ file, setFile, handleDrop, handleDragOver, handleFileSelect }}>
      {children}
    </FileDataContext.Provider>
  );
};

export default FileContext;
