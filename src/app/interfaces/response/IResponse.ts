import { PutBlobResult } from '@vercel/blob';
import { ZodError } from 'zod';

export interface ResponseData
{
  data?: PutBlobResult;
  status: number;
  error?: ZodError;
}
