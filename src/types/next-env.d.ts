import { UserModel } from '@/models/user.model'; // Adjust the import path as needed

declare module 'next' {
  interface NextApiRequest {
    user?: typeof UserModel;
  }
}
