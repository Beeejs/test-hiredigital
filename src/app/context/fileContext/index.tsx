import { createContext, useState } from 'react';

/* Interfaces */
import { PutBlobResult } from '@vercel/blob';

interface ContextProps {

}


export const FileDataContext = createContext<ContextProps>({} as ContextProps);

const FileContext = ({ children }: { children: React.ReactNode }) =>
{
  const [blobs, setBlobs] = useState<PutBlobResult[]>([]);

  return (
    <FileDataContext.Provider value={{ }}>
      {children}
    </FileDataContext.Provider>
  );
};

export default FileContext;
