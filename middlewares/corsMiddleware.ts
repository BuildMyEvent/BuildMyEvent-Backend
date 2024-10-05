import cors from 'cors';

const ACCEPTED_ORIGINS: string[] = [
  'http://localhost:8080',
  'http://localhost:1234',
  'https://movies.com',
  'https://midu.dev',
];

interface CorsMiddlewareOptions {
  acceptedOrigins?: string[];
}

export const corsMiddleware = ({ acceptedOrigins = ACCEPTED_ORIGINS }: CorsMiddlewareOptions = {}) => cors({
  origin: (origin: string | undefined, callback: (err: Error | null, allow?: boolean) => void) => {
    if (acceptedOrigins.includes(origin || '')) {
      return callback(null, true);
    }

    if (!origin) {
      return callback(null, true); // Allow requests with no origin (e.g., from curl or Postman)
    }

    return callback(new Error('Not allowed by CORS'));
  },
});
