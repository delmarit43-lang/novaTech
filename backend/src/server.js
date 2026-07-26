import app from './app.js';
import { config } from './config/env.js';
import { prisma } from './database/prisma.js';
import { verifyTransporter } from './config/nodemailer.js';

const startServer = async () => {
  try {
    // Verify Database connection
    await prisma.$connect();
    console.log('✅ PostgreSQL Database connected via Prisma Client.');

    // Verify SMTP connection
    await verifyTransporter();

    const server = app.listen(config.port, () => {
      console.log(`🚀 Nova Tech Backend Server running on http://localhost:${config.port}`);
      console.log(`📡 API Version Route: http://localhost:${config.port}/api/${config.apiVersion}`);
    });

    // Graceful Shutdown Handlers
    const handleShutdown = async (signal) => {
      console.log(`\n⚠️ ${signal} received. Initiating graceful shutdown...`);
      server.close(async () => {
        console.log('🔒 HTTP Server closed.');
        await prisma.$disconnect();
        console.log('🔒 Prisma Database connection disconnected.');
        process.exit(0);
      });
    };

    process.on('SIGINT', () => handleShutdown('SIGINT'));
    process.on('SIGTERM', () => handleShutdown('SIGTERM'));

  } catch (error) {
    console.error('❌ Failed to start Nova Tech Backend Server:', error.message);
    process.exit(1);
  }
};

startServer();
