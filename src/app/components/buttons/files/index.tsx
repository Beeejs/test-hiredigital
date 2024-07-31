/* Files */
import { IFile } from '@/app/interfaces/files/IFile';

type Props = {
  file: IFile
}

const ConfirmUpload: React.FC<Props> = ({ file }) =>
{
  return (
    <button
      className="flex justify-center items-center gap-2 bg-codeWhite py-2 px-4 rounded hover:bg-secondary hover:-translate-y-2 transition-all ease duration-300"

    >
      <span className="font-Poppins text-sm text-codeBlue font-bold">Confirm Upload</span>
    </button>
  );
};

export default ConfirmUpload;
