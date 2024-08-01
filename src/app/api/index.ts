import axios from 'axios';

export const blobApiFile = axios.create(
  {
    baseURL: process.env.NEXT_PUBLIC_API_BASE_URL || '/api/file'
  }
);

