import { z } from 'zod';
import { MAX_FILE_SIZE } from '@/app/constants/constants';

const uploadFileValidation = z.object(
  {
    file: z.object({
      id: z.string(),
      size: z.number().refine((size) => size <= MAX_FILE_SIZE, 'Max file size is 5MB.'),
      type: z.string()/* .refine((type) => ACCEPTED_IMAGE_TYPES.includes(type), '.jpg, .jpeg, .png and .webp files are accepted.'), */,
      name: z.string(),
      preview: z.string()
    })
  }
);

export { uploadFileValidation };
