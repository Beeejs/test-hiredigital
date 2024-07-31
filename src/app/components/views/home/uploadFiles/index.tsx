/* Components */
import UploadComponent from '@/app/components/upload';
import UploadDescription from './description';

const UploadFiles = () =>
{
  return (
    <aside className='flex flex-col justify-center items-center w-1/2 gap-4'>
      <UploadDescription />
      <UploadComponent />
    </aside>
  );
};

export default UploadFiles;
