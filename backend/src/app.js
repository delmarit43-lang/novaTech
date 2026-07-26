import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import compression from 'compression';
import cookieParser from 'cookie-parser';
import morgan from 'morgan';
import path from 'path';
import { fileURLToPath } from 'url';

import { config } from './config/env.js';
import { globalLimiter } from './middlewares/rateLimiter.middleware.js';
import { errorHandler } from './middlewares/error.middleware.js';
import apiRouter from './routes/index.js';
import { ApiError } from './utils/apiError.js';
import { sendResponse } from './utils/apiResponse.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// Security Middlewares
app.use(helmet({
  crossOriginResourcePolicy: { policy: 'cross-origin' },
}));

// CORS Configuration
app.use(cors({
  origin: (origin, callback) => {
    if (!origin) {
      callback(null, true);
      return;
    }
    if (config.nodeEnv === 'development' && /^http:\/\/(localhost|127\.0\.0\.1):\d+$/.test(origin)) {
      callback(null, true);
      return;
    }
    if (config.corsOrigin.includes(origin) || config.corsOrigin.includes('*')) {
      callback(null, true);
    } else {
      callback(new ApiError(403, 'Not allowed by CORS'));
    }
  },
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With'],
}));

// Compression & Body Parsers
app.use(compression());
app.use(express.json({ limit: '16mb' }));
app.use(express.urlencoded({ extended: true, limit: '16mb' }));
app.use(cookieParser());

// Request Logging
if (config.nodeEnv === 'development') {
  app.use(morgan('dev'));
} else {
  app.use(morgan('combined'));
}

// Global Rate Limiting
app.use('/api', globalLimiter);

// Serve Static Uploads
const uploadDir = path.resolve(__dirname, '../', config.uploadPath);
app.use('/uploads', express.static(uploadDir));

// System Health Check Endpoints
app.get('/', (req, res) => {
  return sendResponse(res, 200, 'Nova Tech Enterprise API Server Running', {
    version: config.apiVersion,
    status: 'online',
    timestamp: new Date().toISOString(),
  });
});

app.get('/api/v1/health', (req, res) => {
  return sendResponse(res, 200, 'System Health OK', {
    uptime: process.uptime(),
    timestamp: new Date().toISOString(),
  });
});

// Master API v1 Routing
app.use(`/api/${config.apiVersion}`, apiRouter);

// 404 Route Handler
app.use((req, res, next) => {
  next(new ApiError(404, `API Route '${req.originalUrl}' not found.`));
});

// Global Error Handler Middleware
app.use(errorHandler);

export default app;
