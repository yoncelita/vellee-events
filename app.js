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


app.get('/thank-you', (req, res) => {
  res.render('layout', {
    title: 'Благодарим Ви',
    content: 'thank-you'
  });
});



// // Contact page
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
      to: ['vellee.events@gmail.com'], // Replace with your recipient email
      replyTo: email,
      subject: `Запитване във Vellee Events от ${name}`,
      text: `
      Имате ново съобщение от сайта

      Име: ${name}
      Email: ${email}

      Съобщение:
      ${message}
    `,
    };

    console.log(mailOptions.to);

    // Send email
    await transporter.sendMail(mailOptions);

    // Redirect to Thank You page
    // res.redirect('/contact?success=1');
    res.redirect('/thank-you');

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
