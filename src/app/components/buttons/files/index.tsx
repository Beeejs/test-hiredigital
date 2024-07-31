'use client';

import { useRouter } from 'next/navigation';
import { useContext, useState } from 'react';

/* Components */
import * as Toast from '@radix-ui/react-toast';

/* Interfaces */
import { IFile } from '@/app/interfaces/files/IFile';
import { ResponseData } from '@/app/interfaces/response/IResponse';

/* Actions */
import { uploadFile } from '@/app/actions/file';

/* Context */
import { FileDataContext } from '@/app/context/fileContext';

type Props = {
  file: IFile
}

const ConfirmUpload: React.FC<Props> = ({ file }) =>
{
  const [response, setResponse] = useState<ResponseData>();
  const [open, setOpen] = useState<boolean>(false);

  const { setFile } = useContext(FileDataContext);

  const router = useRouter();

  const handleClick = async() =>
  {
    // Upload File
    const response = await uploadFile(file);
    setResponse(response);

    if (response.status === 200 || response.status === 400) setOpen(!open);

    if (response.status === 200)
    {
      setFile({
        id: '',
        preview: '',
        name: '',
        size: 0,
        type: ''
      });
      router.refresh(); // Refresh List
    }
  };

  return (
    <Toast.Provider>
      <button
        className="flex justify-center items-center gap-2 bg-codeWhite py-2 px-4 rounded hover:bg-secondary hover:-translate-y-2 transition-all ease duration-300"
        onClick={handleClick}
      >
        <span className="font-Poppins text-sm text-codeBlue font-bold">Confirm Upload</span>
      </button>

      <Toast.Root
        className="bg-white
        rounded-md
        shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px]
        p-[15px]
        grid
        [grid-template-areas:_'title'_'description']
        grid-template-rows: auto auto
        gap-x-[15px]
        items-center
        data-[state=open]:animate-slideIn
        data-[state=closed]:animate-hide
        data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)]
        data-[swipe=cancel]:translate-x-0
        data-[swipe=cancel]:transition-[transform_200ms_ease-out]
        data-[swipe=end]:animate-swipeOut"
        open={open}
        onOpenChange={setOpen}
      >
        <Toast.Title className={
          `${response?.status === 200 ? 'text-green-500' : 'text-red-500'} [grid-area:_title] font-medium text-[15px] font-Poppins`
        }>
          {response?.status === 200 ? 'Success' : 'Error'}
        </Toast.Title>
        <Toast.Description asChild>
          <p>
            {
              response?.error
              ?
                response?.error?.issues
                ? response?.error?.issues[0].message
                : response?.error.message === 'Request failed with status code 400'
                  ? 'There are no files yet'
                  : response?.error.message
              : 'File uploaded successfully'
            }
          </p>
        </Toast.Description>
      </Toast.Root>
      <Toast.Viewport className="[--viewport-padding:_25px] fixed bottom-0 right-0 flex flex-col p-[var(--viewport-padding)] gap-[10px] w-[390px] max-w-[100vw] m-0 list-none z-[2147483647] outline-none"  />
    </Toast.Provider>
  );
};

export default ConfirmUpload;
