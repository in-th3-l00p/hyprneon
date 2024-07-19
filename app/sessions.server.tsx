import {createThemeSessionResolver} from 'remix-themes';
import {createCookieSessionStorage} from '@shopify/remix-oxygen';

// You can default to 'development' if process.env.NODE_ENV is not set
const isProduction = process.env.NODE_ENV === 'production';

const sessionStorage = createCookieSessionStorage({
  cookie: {
    name: 'theme',
    path: '/',
    httpOnly: true,
    sameSite: 'lax',
    secrets: [process.env.SESSION_SECRET || 'nothing'], // todo fix env
    // Set domain and secure only if in production
    ...(isProduction ? {domain: 'hyprneon.com', secure: true} : {}),
  },
});

export const themeSessionResolver = createThemeSessionResolver(sessionStorage);
