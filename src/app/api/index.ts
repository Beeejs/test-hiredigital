import axios from 'axios';

export const blobApiFile = axios.create(
  {
    baseURL: '/api/file'
  }
);

