/* Components */
import FileList from './components/views/home/fileList';
import UploadFiles from './components/views/home/uploadFiles';

const Home = () =>
{
  return (
    <main className="flex flex-col justify-center items-center gap-32 h-full my-40 bg-codeBlue">
      <UploadFiles />
      <FileList />
    </main>
  );
};

export default Home;
