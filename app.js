require('dotenv').config();
const express = require('express');
const nodemailer = require('nodemailer');
const path = require('path');

const app = express();

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public'))); // Serve static files (like CSS, JS)

// Set up the view engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Routes

// Home page
app.get('/', (req, res) => {
  res.render('layout', { title: 'Home', content: 'home' });
});

// Facilities & Services page
app.get('/facilities', (req, res) => {
  res.render('layout', { title: 'Facilities', content: 'facilities' });
});

// Gallery page
app.get('/gallery', (req, res) => {
  res.render('layout', { title: 'Gallery', content: 'gallery' });
});

// Courchevel page
app.get('/courchevel', (req, res) => {
  res.render('layout', { title: 'Courchevel', content: 'courchevel' });
});

// Availability page
app.get('/availability', (req, res) => {
  res.render('layout', { title: 'Availability', content: 'availability' });
});

// Contact page
app.get('/contact', (req, res) => {
    const success = req.query.success;
    const error = req.query.error;
    res.render('layout', {
      title: 'Contact',
      content: 'contact',
      success,
      error,
    });
  });
  

// Thank You page
app.get('/thank-you', (req, res) => {
  res.render('layout', { title: 'Thank You', content: 'thank-you' });
});


// Contact form submission
app.post('/contact', async (req, res) => {
  const { name, email, message } = req.body;

  try {
    // Nodemailer transport setup
    const transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS, 
      },
      tls: {
        rejectUnauthorized: false,
      },
    });

    // Email options
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: ['yoana.art@gmail.com', 'ignatov.ti@gmail.com'], // Replace with your recipient email
      replyTo: email,
      subject: `LE SASHA Contact Form from ${name}`,
      text: `
      You have a new contact form submission.

      Name: ${name}
      Email: ${email}

      Message:
      ${message}
    `,
    };

    console.log(mailOptions.to);

    // Send email
    await transporter.sendMail(mailOptions);

    // Redirect to Thank You page
    res.redirect('/contact?success=1');
  } catch (error) {
    console.error('Error sending email:', error);
    // Redirect back to Contact page with an error query parameter
    res.redirect('/contact?error=1');
  }
});

// 404 Error handling
app.use((req, res) => {
  res.status(404).render('layout', { title: '404 Not Found', content: '404' });
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
