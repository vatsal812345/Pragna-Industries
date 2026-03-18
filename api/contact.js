import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { firstName, lastName, companyName, email, phone, message } = req.body;

  try {
    // Set up Nodemailer transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: email,
      replyTo: email,
      to: 'pragnaind@yahoo.in',
      cc: 'vatsalprajapati804@gmail.com',
      subject: `New Contact Form Submission from ${firstName} ${lastName}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>New Contact Inquiry - Pragna Industries</title>
          <style>
            @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700&display=swap');
            
            body, table, td, p, a, h1, h2, h3, h4, h5, h6 {
              font-family: 'Outfit', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
            }
            
            body {
              margin: 0;
              padding: 0;
              width: 100% !important;
              -webkit-text-size-adjust: 100%;
              -ms-text-size-adjust: 100%;
              background-color: #f3f4f6;
              color: #1f2937;
            }
            
            .wrapper {
              width: 100%;
              table-layout: fixed;
              background-color: #f3f4f6;
              padding-bottom: 60px;
            }
            
            .main-container {
              background-color: #ffffff;
              max-width: 600px;
              margin: 40px auto;
              border-radius: 20px;
              overflow: hidden;
              box-shadow: 0 10px 25px rgba(0, 0, 0, 0.05);
            }
            
            .header-banner {
              background: linear-gradient(145deg, #111827 0%, #1f2937 100%);
              color: #ffffff;
              padding: 50px 40px;
              text-align: center;
              position: relative;
            }
            
            .header-banner::after {
              content: '';
              position: absolute;
              bottom: 0;
              left: 0;
              width: 100%;
              height: 4px;
              background: linear-gradient(90deg, #dc2626 0%, #ef4444 50%, #fca5a5 100%);
            }
            
            .logo-text {
              font-size: 28px;
              font-weight: 700;
              letter-spacing: 3px;
              text-transform: uppercase;
              margin: 0 0 10px 0;
              background: linear-gradient(90deg, #ffffff, #fca5a5);
              -webkit-background-clip: text;
              -webkit-text-fill-color: transparent;
            }
            
            .subtitle {
              color: #9ca3af;
              font-size: 14px;
              font-weight: 500;
              letter-spacing: 1.5px;
              text-transform: uppercase;
              margin: 0;
            }
            
            .content-wrapper {
              padding: 50px 40px;
            }
            
            .greeting {
              font-size: 20px;
              font-weight: 600;
              color: #111827;
              margin-top: 0;
              margin-bottom: 25px;
            }
            
            .info-grid {
              display: grid;
              grid-template-columns: repeat(2, 1fr);
              gap: 20px;
              margin-bottom: 35px;
            }
            
            .info-box {
              background-color: #f8fafc;
              border: 1px solid #f1f5f9;
              border-radius: 12px;
              padding: 20px;
              transition: transform 0.2s ease;
            }
            
            .info-box:hover {
              transform: translateY(-2px);
              box-shadow: 0 4px 12px rgba(0,0,0,0.02);
            }
            
            .box-icon {
              font-size: 20px;
              margin-bottom: 10px;
              color: #dc2626;
            }
            
            .info-label {
              font-size: 11px;
              font-weight: 700;
              color: #64748b;
              text-transform: uppercase;
              letter-spacing: 1px;
              margin-bottom: 5px;
            }
            
            .info-value {
              font-size: 15px;
              font-weight: 600;
              color: #0f172a;
              margin: 0;
              word-break: break-word;
            }
            
            .info-value a {
              color: #dc2626;
              text-decoration: none;
              transition: color 0.2s;
            }
            
            .info-value a:hover {
              color: #991b1b;
              text-decoration: underline;
            }
            
            .message-container {
              background-color: #ffffff;
              border: 1px solid #e2e8f0;
              border-radius: 16px;
              overflow: hidden;
              margin-top: 20px;
            }
            
            .message-header {
              background-color: #f8fafc;
              padding: 16px 24px;
              border-bottom: 1px solid #e2e8f0;
              display: flex;
              align-items: center;
              font-size: 13px;
              font-weight: 700;
              color: #475569;
              text-transform: uppercase;
              letter-spacing: 1px;
            }
            
            .message-header::before {
              content: '\\2709';
              font-size: 18px;
              margin-right: 10px;
              color: #94a3b8;
            }
            
            .message-body {
              padding: 30px;
              color: #334155;
              font-size: 16px;
              line-height: 1.8;
              font-weight: 400;
              white-space: pre-wrap;
            }
            
            .footer {
              text-align: center;
              padding: 40px 20px;
              color: #64748b;
              font-size: 13px;
              background-color: #f8fafc;
              border-top: 1px solid #f1f5f9;
            }
            
            .footer-logo {
              font-size: 18px;
              font-weight: 700;
              color: #cbd5e1;
              letter-spacing: 2px;
              margin-bottom: 15px;
              text-transform: uppercase;
            }
            
            .action-btn {
              display: inline-block;
              background-color: #111827;
              color: #ffffff !important;
              text-decoration: none;
              padding: 12px 28px;
              border-radius: 8px;
              font-weight: 600;
              font-size: 14px;
              margin-top: 25px;
              transition: background-color 0.2s;
            }
            
            .action-btn:hover {
              background-color: #374151;
            }
            
            @media screen and (max-width: 600px) {
              .main-container {
                margin: 20px 10px !important;
                border-radius: 12px;
                width: auto !important;
              }
              .header-banner {
                padding: 40px 20px !important;
              }
              .content-wrapper {
                padding: 30px 20px !important;
              }
              .info-grid {
                grid-template-columns: 1fr !important;
              }
            }
          </style>
        </head>
        <body>
          <div class="wrapper">
            <table width="100%" border="0" cellspacing="0" cellpadding="0">
              <tr>
                <td align="center">
                  <div class="main-container">
                    
                    <!-- Header -->
                    <div class="header-banner">
                      <h1 class="logo-text">Pragna</h1>
                      <p class="subtitle">New Project Inquiry</p>
                    </div>
                    
                    <!-- Content -->
                    <div class="content-wrapper">
                      <!-- Greeting -->
                      <h2 class="greeting">Hello Team,</h2>
                      <p style="color: #64748b; font-size: 15px; margin-bottom: 30px; line-height: 1.6;">
                        You have received a new contact submission from your website. Here are the details:
                      </p>
                      
                      <!-- Details Grid -->
                      <div class="info-grid">
                        
                        <!-- Client Name -->
                        <div class="info-box">
                          <div class="box-icon">👤</div>
                          <div class="info-label">Client Name</div>
                          <p class="info-value">${firstName} ${lastName}</p>
                        </div>
                        
                        <!-- Company -->
                        <div class="info-box">
                          <div class="box-icon">🏢</div>
                          <div class="info-label">Company</div>
                          <p class="info-value">${companyName || '<span style="color: #94a3b8; font-style: italic; font-weight: 400;">Not specified</span>'}</p>
                        </div>
                        
                        <!-- Email Address -->
                        <div class="info-box" style="grid-column: 1 / -1;">
                          <div class="box-icon">✉️</div>
                          <div class="info-label">Email Address</div>
                          <p class="info-value"><a href="mailto:${email}">${email}</a></p>
                        </div>
                        
                        <!-- Phone Number -->
                        <div class="info-box" style="grid-column: 1 / -1;">
                          <div class="box-icon">📞</div>
                          <div class="info-label">Phone Number</div>
                          <p class="info-value">
                            ${phone ? `<a href="tel:${phone.replace(/\D/g, '')}" style="color: #0f172a; text-decoration: none;">${phone}</a>` : '<span style="color: #94a3b8; font-style: italic; font-weight: 400;">Not provided</span>'}
                          </p>
                        </div>
                        
                      </div>
                      
                      <!-- Message Area -->
                      <div class="message-container">
                        <div class="message-header">Client Message</div>
                        <div class="message-body">${message?.replace(/\n/g, '<br>')}</div>
                      </div>
                      
                      <div style="text-align: center;">
                        <a href="mailto:${email}" class="action-btn">Reply to ${firstName}</a>
                      </div>
                      
                    </div>
                    
                    <!-- Footer -->
                    <div class="footer">
                      <div class="footer-logo">Pragna Industries</div>
                      <p style="margin: 0; margin-bottom: 5px;">This email was automatically generated from your website contact form.</p>
                      <p style="margin: 0; color: #94a3b8;">Please do not mark as spam.</p>
                    </div>
                    
                  </div>
                </td>
              </tr>
            </table>
          </div>
        </body>
        </html>
      `,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log('Message sent: %s', info.messageId);
    
    return res.status(200).json({ success: true, message: 'Email sent successfully!' });
  } catch (error) {
    console.error('Error sending email:', error);
    return res.status(500).json({ error: 'Failed to send email. Please try again later.' });
  }
}
