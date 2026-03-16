import express from 'express';
import nodemailer from 'nodemailer';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Set up Nodemailer transporter
const transporter = nodemailer.createTransport({
  service: 'gmail', // You can use other services like 'yahoo', 'hotmail', etc.
  auth: {
    user: process.env.EMAIL_USER, // Your email
    pass: process.env.EMAIL_PASS, // Your app password (not your normal password)
  },
});

app.post('/api/contact', async (req, res) => {
  const { firstName, lastName, email, phone, message } = req.body;

  try {
    const mailOptions = {
      from: email, // sender address (the person filling the form)
      replyTo: email, // This makes it so hitting "Reply" goes to the person who filled the form
      to: 'vatsalprajapati804@gmail.com', // list of receivers
      cc: 'shahheetdilipkumar@gmail.com', // cc address
      subject: `New Contact Form Submission from ${firstName} ${lastName}`, // Subject line
      text: `
        You have a new contact form submission:
        
        Name: ${firstName} ${lastName}
        Email: ${email}
        Phone: ${phone || 'Not provided'}
        Message: ${message}
      `, // plain text body
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>New Contact Form Submission</title>
          <style>
            @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
            
            body {
              font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
              line-height: 1.6;
              color: #334155;
              background-color: #f8fafc;
              margin: 0;
              padding: 0;
            }
            
            .container {
              max-width: 600px;
              margin: 40px auto;
              background-color: #ffffff;
              border-radius: 12px;
              overflow: hidden;
              box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
            }
            
            .header {
              background: linear-gradient(135deg, #7f1d1d 0%, #991b1b 100%);
              padding: 32px 40px;
              text-align: center;
              border-bottom: 4px solid #f87171;
            }
            
            .header h1 {
              color: #ffffff;
              margin: 0;
              font-size: 24px;
              font-weight: 700;
              letter-spacing: 2px;
              text-transform: uppercase;
            }
            
            .header p {
              color: #fecaca;
              margin: 8px 0 0 0;
              font-size: 14px;
              font-weight: 500;
              text-transform: uppercase;
              letter-spacing: 1px;
            }
            
            .content {
              padding: 40px;
            }
            
            .info-card {
              background-color: #f8fafc;
              border: 1px solid #e2e8f0;
              border-radius: 8px;
              padding: 24px;
              margin-bottom: 32px;
            }
            
            .info-row {
              display: flex;
              margin-bottom: 16px;
              padding-bottom: 16px;
              border-bottom: 1px solid #e2e8f0;
            }
            
            .info-row:last-child {
              margin-bottom: 0;
              padding-bottom: 0;
              border-bottom: none;
            }
            
            .label {
              flex: 0 0 100px;
              font-size: 12px;
              font-weight: 600;
              color: #64748b;
              text-transform: uppercase;
              letter-spacing: 0.5px;
            }
            
            .value {
              flex: 1;
              color: #0f172a;
              font-weight: 500;
              font-size: 15px;
            }
            
            .value a {
              color: #7f1d1d;
              text-decoration: none;
              font-weight: 600;
            }
            
            .message-section {
              background-color: #ffffff;
            }
            
            .message-header {
              font-size: 14px;
              font-weight: 600;
              color: #64748b;
              text-transform: uppercase;
              letter-spacing: 0.5px;
              margin-bottom: 12px;
              display: flex;
              align-items: center;
            }
            
            .message-header::before {
              content: '';
              display: inline-block;
              width: 8px;
              height: 8px;
              background-color: #7f1d1d;
              border-radius: 50%;
              margin-right: 8px;
            }
            
            .message-body {
              background-color: #fef2f2;
              border-left: 4px solid #7f1d1d;
              padding: 24px;
              border-radius: 0 8px 8px 0;
              color: #334155;
              font-size: 15px;
              line-height: 1.8;
              white-space: pre-wrap;
              word-wrap: break-word;
            }
            
            .footer {
              padding: 32px 40px;
              background-color: #f8fafc;
              border-top: 1px solid #e2e8f0;
              text-align: center;
            }
            
            .footer p {
              margin: 0 0 8px 0;
              color: #64748b;
              font-size: 13px;
            }
            
            .footer p:last-child {
              margin-bottom: 0;
              color: #94a3b8;
              font-size: 12px;
            }
            
            @media only screen and (max-width: 600px) {
              .container {
                margin: 0;
                border-radius: 0;
              }
              .content, .header, .footer {
                padding: 24px;
              }
              .info-row {
                flex-direction: column;
              }
              .label {
                margin-bottom: 4px;
              }
            }
          </style>
        </head>
        <body>
          <table width="100%" border="0" cellspacing="0" cellpadding="0" style="background-color: #f8fafc;">
            <tr>
              <td align="center" style="padding: 40px 10px;">
                <div class="container">
                  <div class="header">
                    <h1>Pragna Industries</h1>
                    <p>New Contact Inquiry</p>
                  </div>
                  
                  <div class="content">
                    <div class="info-card">
                      <div class="info-row">
                        <div class="label">Name</div>
                        <div class="value">${firstName} ${lastName}</div>
                      </div>
                      <div class="info-row">
                        <div class="label">Email</div>
                        <div class="value"><a href="mailto:${email}">${email}</a></div>
                      </div>
                      <div class="info-row">
                        <div class="label">Phone</div>
                        <div class="value">${phone || '<span style="color: #94a3b8; font-style: italic;">Not provided</span>'}</div>
                      </div>
                    </div>
                    
                    <div class="message-section">
                      <div class="message-header">Message Details</div>
                      <div class="message-body">${message.replace(/\n/g, '<br>')}</div>
                    </div>
                  </div>
                  
                  <div class="footer">
                    <p>This email was securely generated from your website's contact form.</p>
                    <p>Reply directly to this email to respond to ${firstName}.</p>
                  </div>
                </div>
              </td>
            </tr>
          </table>
        </body>
        </html>
      `, // html body
    };

    const info = await transporter.sendMail(mailOptions);
    console.log('Message sent: %s', info.messageId);
    
    res.status(200).json({ success: true, message: 'Email sent successfully!' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ error: 'Failed to send email. Please try again later.' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
