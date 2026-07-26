import nodemailer from 'nodemailer';
import { config } from './env.js';

export const transporter = nodemailer.createTransport({
  host: config.smtp.host,
  port: config.smtp.port,
  secure: config.smtp.port === 465,
  auth: {
    user: config.smtp.user,
    pass: config.smtp.pass,
  },
});

export const verifyTransporter = async () => {
  if (!config.smtp.user || !config.smtp.pass) {
    console.log('[Nodemailer] SMTP credentials missing. Email sending will run in mock mode.');
    return false;
  }
  try {
    await transporter.verify();
    console.log('[Nodemailer] Transporter is ready to send emails.');
    return true;
  } catch (error) {
    console.warn('[Nodemailer] Warning - SMTP Connection failed:', error.message);
    return false;
  }
};
