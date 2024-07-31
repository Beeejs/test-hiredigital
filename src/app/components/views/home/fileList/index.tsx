/* Actions */
import { getFiles } from '@/app/actions/file';

/* Components */
import TitleList from './title';
import FileListContainer from './container';

const FileList = async() =>
{
  const files = await getFiles();

  return (
    <aside className='flex flex-col justify-center items-center w-3/4 gap-4'>
      <TitleList />
      <FileListContainer files={files} />
    </aside>
  );
};

export default FileList;
