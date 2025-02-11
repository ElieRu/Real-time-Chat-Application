// app/api/auth/[auth0]/route.js
import { handleAuth, authOptions } from '@auth0/nextjs-auth0';

export const GET = handleAuth();