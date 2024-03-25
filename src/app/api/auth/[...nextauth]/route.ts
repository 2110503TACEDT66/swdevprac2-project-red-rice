import NextAuth from 'next-auth';
import { authOptions } from '@/utils/authOption';

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST, handler as PUT, handler as DELETE };
