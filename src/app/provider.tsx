'use client';

/* Providers */
import FileContext from './context/fileContext';

const Providers: React.FC<{ children: React.ReactNode }> = ({ children }) =>
{
  return (
    <FileContext>
      {children}
    </FileContext>
  );
};

export default Providers;

