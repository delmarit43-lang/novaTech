import { transporter } from '../config/nodemailer.js';
import { config } from '../config/env.js';

export const sendPasswordResetEmail = async (email, token) => {
  const resetUrl = `${config.frontendUrl}/reset-password?token=${token}`;
  
  const mailOptions = {
    from: config.smtp.from,
    to: email,
    subject: 'Nova Tech - Password Reset Request',
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 8px;">
        <h2 style="color: #6366f1; text-align: center;">Nova Tech Admin</h2>
        <p>You requested a password reset for your Nova Tech Admin Account.</p>
        <p>Please click the button below to reset your password. This link is valid for 1 hour.</p>
        <div style="text-align: center; margin: 30px 0;">
          <a href="${resetUrl}" style="background-color: #6366f1; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; font-weight: bold; display: inline-block;">Reset Password</a>
        </div>
        <p>If you did not request this, please ignore this email or contact security.</p>
        <p style="color: #888; font-size: 12px; border-top: 1px solid #eee; padding-top: 10px; margin-top: 20px;">
          Nova Tech Enterprise Platform &copy; ${new Date().getFullYear()}
        </p>
      </div>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
  } catch (error) {
    console.error('[EmailService] Failed to send password reset email:', error.message);
  }
};

export const sendContactConfirmationEmail = async (email, name) => {
  const mailOptions = {
    from: config.smtp.from,
    to: email,
    subject: 'Thank you for contacting Nova Tech',
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
        <h2 style="color: #4f46e5;">Thank You, ${name}!</h2>
        <p>We have received your message. A Nova Tech specialist will get back to you within 24 business hours.</p>
        <p>Best regards,<br><strong>Nova Tech Team</strong></p>
      </div>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
  } catch (error) {
    console.error('[EmailService] Failed to send contact confirmation email:', error.message);
  }
};
