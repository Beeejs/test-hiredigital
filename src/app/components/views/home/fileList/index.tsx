/* Actions */
import { getFiles } from '@/app/actions/file';

/* Components */
import ItemFile from './item';
import TitleList from './title';

const FileList = async() =>
{
  const files = await getFiles();

  return (
    <aside className='flex flex-col justify-center items-center w-3/4 gap-4'>
      <TitleList />
      <div className={`flex flex-col ${files?.blobs.length === 0 ? 'justify-center items-center' : 'justify-start items-start'} px-12 py-4 w-full gap-6 rounded-lg h-[400px] overflow-y-scroll bg-codeWhite/70`}>
        {
          files && files.blobs.length > 0
          ?
            files?.blobs.map((file, index) =>
            {
              return (
                <ItemFile key={index} file={file} />
              );
            })
          :
            <p className='font-Poppins text-base text-secondary font-normal'>No files found</p>
        }
      </div>
    </aside>
  );
};

export default FileList;
