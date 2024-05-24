import { z } from 'zod';

const schema = z.object({
  title: z
    .string()
    .min(2, { message: 'Name should have at least 2 letters' }),
    description: z.string().min(2, { message: 'Description should have at least 2 letters'}),
  
});

export default schema;