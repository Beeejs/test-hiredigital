import { list, PutBlobResult, copy, ListBlobResultBlob } from '@vercel/blob';
import {  blobApiFile } from '../api';

/* Interfaces */
import { IFile } from '../interfaces/files/IFile';

/* Validations */
import { uploadFileValidation } from '../validations/file/fileValidations';
import { ZodError } from 'zod';

// Try Catch
export const uploadFile = async(file: IFile) =>
{
  try
  {
    await uploadFileValidation.parseAsync({ file });

    const response = await blobApiFile.post(`?filename=${file.name}`, file);

    console.log(response)

    return {
      data: response.data as PutBlobResult,
      status : response.status
    };
  }
  catch (error)
  {
    return {
      error: error as ZodError,
      status : 400
    };
  }
};

export const getFiles = async() =>
{
  try
  {
    return await list();
  }
  catch (error)
  {
    console.log(error);
  }
};

// In the documentation there is no method to edit, so this was a solution
export const updateFile = async(url: string, newPathname: string) =>
{
  try
  {
    // Validacion
    const response = await blobApiFile.put(`?fromUrl=${url}&toPathname=${newPathname}`);

    if (response.status === 200) await deleteFile(url);

    return {
      data: response.data as ListBlobResultBlob,
      status : response.status
    };
  }
  catch (error)
  {
    return {
      error,
      status : 400
    };
  }
};

export const deleteFile = async(url: string) =>
{
  try
  {
    const response = await blobApiFile.delete(`?url=${url}`);

    return {
      data: response.data as ListBlobResultBlob,
      status : response.status
    };
  }
  catch (error)
  {
    return {
      error,
      status: 400
    };
  }
};
