export { default } from 'next-auth/middleware';

export const config = {
    matcher: ['/restaurant', '/reservation', '/profile', '/admin'],
};
