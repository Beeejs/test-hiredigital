'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

/* Components */
import * as Dialog from '@radix-ui/react-dialog';

/* Interfaces */
import { ListBlobResultBlob } from '@vercel/blob';

/* Icons */
import { Cross2Icon, Pencil1Icon, TrashIcon } from '@radix-ui/react-icons';
import { deleteFile, updateFile } from '@/app/actions/file';

const ItemFile: React.FC<{ file: ListBlobResultBlob }> = ({ file }) =>
{
  const { downloadUrl, pathname, size, uploadedAt, url } = file;

  const [value, setValue] = useState<string>('');
  const router = useRouter();

  const handleDeleteFile = async(url: string) =>
  {
    await deleteFile(url);
    router.refresh();
  };

  const handleUpdateFile = async(url: string, newPathname: string) =>
  {
    await updateFile(url, newPathname);
    router.refresh();
  };

  return (
    <article className='flex justify-center items-center bg-codeBlue/70 w-full rounded-lg'>
      <div className='flex flex-col justify-center items-start gap-2 w-full px-2 py-4'>
        <span className='font-Poppins text-base text-secondary font-bold'>{ pathname }</span>
        <span className='font-Poppins text-base text-secondary font-normal'>Size: { size }</span>
        <span className='font-Poppins text-base text-secondary font-normal'>Uploaded At: { uploadedAt.toISOString().split('T')[0] }</span>
        <a
          href={downloadUrl}
          target="_blank"
          rel="noopener noreferrer"
          className='font-Poppins text-base text-secondary font-normal'
        >
          {downloadUrl}
        </a>
      </div>
      <div className='flex justify-center items-center gap-4 bg-codeWhite h-full w-[100px] rounded-r-lg'>
      <Dialog.Root>
        <Dialog.Trigger asChild>
          <button /* onClick={() => handleUpdateFile(downloadUrl, pathname)} */>
            <Pencil1Icon className='w-5 h-5 text-primary'/>
          </button>
        </Dialog.Trigger>
        <Dialog.Portal>
          <Dialog.Overlay className="bg-blackA6 data-[state=open]:animate-overlayShow fixed inset-0" />
          <Dialog.Content className="data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] max-h-[85vh] w-[90vw] max-w-[450px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-white p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none">
            <Dialog.Title className="font-Poppins text-primary m-0 text-[17px] font-medium">
              Edit File
            </Dialog.Title>
            <Dialog.Description className="font-Poppins text-primary mt-[10px] mb-5 text-[15px] leading-normal">
              Changes the name of the file.
            </Dialog.Description>
            <fieldset className="mb-[15px] flex items-center gap-5">
              <input
                className="text-primary inline-flex h-[35px] w-full  items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none shadow-[0_0_0_1px] outline-none focus:shadow-[0_0_0_2px]"
                id="name"
                defaultValue={pathname}
                onChange={(e) => setValue(e.target.value)}
              />
            </fieldset>
            <div className="mt-[25px] flex justify-end">
              <Dialog.Close asChild>
                <button
                  className="text-sm bg-green-500 font-Poppins text-primary hover:bg-green-300 focus:shadow-green-900 inline-flex h-[35px] items-center justify-center rounded-[4px] px-[15px] font-medium leading-none focus:shadow-[0_0_0_2px] focus:outline-none transition-colors duration-200 ease"
                  onClick={() => handleUpdateFile(downloadUrl, value)}
                >
                  Save changes
                </button>
              </Dialog.Close>
            </div>
            <Dialog.Close asChild>
              <button
                className="text-violet11 hover:bg-violet4 focus:shadow-violet7 absolute top-[10px] right-[10px] inline-flex h-[25px] w-[25px] appearance-none items-center justify-center rounded-full focus:shadow-[0_0_0_2px] focus:outline-none"
                aria-label="Close"
              >
                <Cross2Icon />
              </button>
            </Dialog.Close>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
        <button onClick={() => handleDeleteFile(url)}>
          <TrashIcon className='w-5 h-5 text-primary'/>
        </button>
      </div>
    </article>
  );
};

export default ItemFile;
