import { GOOGLE_EMAIL } from '$env/static/private';
import transporter from '$lib/emailSetupserver';
import type { Actions } from '@sveltejs/kit';
import type { MailOptions } from 'nodemailer/lib/sendmail-transport';

type SendEmailType = {
	username: string;
	email: string;
	message: string;
};
export const actions = {
	default: async ({ request }) => {
		const jsonData = await request.json();
		const data: SendEmailType = JSON.parse(jsonData);
		const html = `
        <!DOCTYPE html>
        <html>
        <head>
            <style>
                body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
                .container { max-width: 600px; margin: 0 auto; padding: 20px; }
                .header { background-color: #f8f9fa; padding: 20px; margin-bottom: 20px; }
                .message { background-color: #fff; padding: 20px; border-left: 4px solid #007bff; }
                .footer { margin-top: 20px; font-size: 12px; color: #6c757d; }
            </style>
        </head>
        <body>
            <div class="container">
                <div class="header">
                    <h2>New Contact Form Submission</h2>
                    <p>From: ${data.username} (${data.email})</p>
                </div>
                
                <div class="message">
                    <h3>Message:</h3>
                    <p>${data.message}</p>
                </div>
        
                <div class="footer">
                    <p>This email was sent from your contact form at YourWebsite.com</p>
                </div>
            </div>
        </body>
        </html>
        `;
		const message: MailOptions = {
			from: GOOGLE_EMAIL,
			to: GOOGLE_EMAIL,
			replyTo: data.email,
			subject: `New Contact Form Submission from ${data.username}`,
			text: `
        From: ${data.username} (${data.email})
        
        Message:
        ${data.message}
            `,
			html: html
		};
		try {
			await transporter.sendMail(message);
		} catch (error) {
			console.error(error);
		}
	}
} satisfies Actions;
