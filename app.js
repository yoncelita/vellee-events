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


// Pricing page
app.get('/pricing', (req, res) => {
  res.render('layout', { title: 'Pricing', content: 'pricing' });
});


// Product page - Color invitations
app.get('/product/color-invitations', (req, res) => {
  res.render('layout', { title: 'Color invitation', content: 'product/pp-color-invitations' });
});

// Product page - Table cards
app.get('/product/table-cards', (req, res) => {
  res.render('layout', { title: 'Table cards', content: 'product/pp-table-cards' });
});

// Product page - Color menu
app.get('/product/color-menu', (req, res) => {
  res.render('layout', { title: 'Color menu', content: 'product/pp-color-menu' });
});

// Product page - Minimal menu
app.get('/product/minimal-menu', (req, res) => {
  res.render('layout', { title: 'Minimal menu', content: 'product/pp-minimal-menu' });
});

// Product page - Guest menu
app.get('/product/guest-table', (req, res) => {
  res.render('layout', { title: 'Guest table', content: 'product/pp-guest-table' });
});

// Product page - Special envelope
app.get('/product/special-envelope', (req, res) => {
  res.render('layout', { title: 'Special envelope', content: 'product/pp-special-envelope' });
});

// Product page - Minimal invitations
app.get('/product/minimal-invitations', (req, res) => {
  res.render('layout', { title: 'Minimal invitations', content: 'product/pp-minimal-invitations' });
});

// Product page - Guest presents
app.get('/product/guest-presents', (req, res) => {
  res.render('layout', { title: 'Guest presents', content: 'product/pp-guest-presents' });
});

// Product page - Door signs
app.get('/product/door-signs', (req, res) => {
  res.render('layout', { title: 'Door signs', content: 'product/pp-door-signs' });
});

// Product page - Welcome box
app.get('/product/welcome-box', (req, res) => {
  res.render('layout', { title: 'Welcome box', content: 'product/pp-welcome-box' });
});

// Product page - Welcome table
app.get('/product/welcome-table', (req, res) => {
  res.render('layout', { title: 'Welcome table', content: 'product/pp-welcome-table' });
});


// Product main page (optional)
app.get('/product', (req, res) => {
  res.render('layout', { title: 'Welcome table', content: 'product/pp-welcome-table' });
});

// Any invalid or unknown /product/... URL → redirect to /shop
app.get('/product/*', (req, res) => {
  res.redirect('/shop');
});


// Shop page
app.get('/shop', (req, res) => {
  const products = [
    {
      title: 'Welcome КУТИЯ',
      description: 'Персонализирана Welcome кутия от пенокартон.',
      production: 'Срок на изработка 12 работни дни',
      price: '115 лв./58.80 €',
      image: 'images/shop/vellee-shop-1.png',
      link: '/product/welcome-box',
      button: 'Прочетете повече'
    },
    {
      title: 'Флорално Welcome табло',
      description: 'Персонализирано Welcome табло от пенокартон.',
      production: 'Срок на изработка 12 работни дни',
      price: '105 лв./53.69 €',
      image: 'images/shop/vellee-shop-2.png',
      link: '/product/welcome-table',
      button: 'Прочетете повече'
    },
    {
      title: 'Картички с имена за маса',
      description: 'Персонализирани картички с имена и сушен портокал за маса.',
      production: 'Срок на изработка 14 работни дни',
      price: '1,40 лв./ 0,72 € / бр.',
      image: 'images/shop/vellee-shop-3.png',
      link: '/product/table-cards',
      button: 'Прочетете повече'
    },
    {
      title: 'Цветно сватбено меню',
      description: 'Персонализирани цветни, едностранни менюта за сватба или събитие.',
      production: 'Срок на изработка 12 работни дни',
      price: '1,40 лв./ 0,72 € / бр.',
      image: 'images/shop/vellee-shop-4.png',
      link: '/product/color-menu',
      button: 'Прочетете повече'
    },
    {
      title: 'Сватбено меню "минимализъм"',
      description: 'Персонализирани черно-бели, едностранни менюта за сватба.',
      production: 'Срок на изработка 12 работни дни',
      price: '1,00 лв./ 0,51 € / бр.',
      image: 'images/shop/vellee-shop-5.png',
      link: '/product/minimal-menu',
      button: 'Прочетете повече'
    },
    {
      title: 'Разпределително табло',
      description: 'Персонализирано разпределително табло с местата на гостите.',
      production: 'Срок на изработка 12 работни дни',
      price: '55 лв./ 28.12 € / бр.',
      image: 'images/shop/vellee-shop-6.png',
      link: '/product/guest-table',
      button: 'Прочетете повече'
    },
    {
      title: 'Покана с нестандартен плик',
      description: 'Персонализирани цветни, двустранни покани за сватба с плик.',
      production: 'Срок на изработка 14 работни дни',
      price: '5,50 лв./ 2,81 € / бр.',
      image: 'images/shop/vellee-shop-7.png',
      link: '/product/special-envelope',
      button: 'Прочетете повече'
    },
    {
      title: 'Цветни покани',
      description: 'Персонализирани цветни, двустранни покани за сватба.',
      production: 'Срок на изработка 12 работни дни',
      price: '2,20 лв./ 1.12 € / бр.',
      image: 'images/shop/vellee-shop-8.png',
      link: '/product/color-invitations',
      button: 'Прочетете повече'
    },
    {
      title: 'Покана "минимализъм"',
      description: 'Персонализирани черно-бели, двустранни покани за сватба.',
      production: 'Срок на изработка 14 работни дни',
      price: '1,60 лв./0.82 €/ бр.',
      image: 'images/shop/vellee-shop-9.png',
      link: '/product/minimal-invitations',
      button: 'Прочетете повече'
    },
    {
      title: 'Подаръчета Семенца',
      description: 'Персонализирани опаковки и семена по избор.',
      production: 'Срок на изработка 14 работни дни',
      price: '2,20 лв./ 1.12 € / бр.',
      image: 'images/shop/vellee-shop-10.png',
      link: '/product/guest-presents',
      button: 'Прочетете повече'
    },
    {
      title: 'Табелки за врата',
      description: 'Персонализирани табелки за дома на булката и младоженеца.',
      production: 'Срок на изработка 5 работни дни',
      price: '15 лв./ 7.67 €/ бр.',
      image: 'images/shop/vellee-shop-11.png',
      link: '/product/door-signs',
      button: 'Прочетете повече'
    },
    {
      title: 'Сватбен вестник',
      description: 'Персонализиран вестник за вашето събитие.',
      production: 'Срок на изработка 12 работни дни',
      price: '2 лв./ 1.02 € / бр. + еднократно 30 лв./15.34 €/ за дизайн',
      image: 'images/shop/vellee-shop-12.png',
      link: 'javascript:void(0)',
      button: 'Изпратете запитване'
    },
    // {
    //   title: 'Изработка на сватбен сайт',
    //   description: 'Информация за събитието и детайли за гостите – достъпен чрез линк или QR код върху поканата.',
    //   production: 'Срок на изработка 10 работни дни',
    //   price: '200 лв./ бр.',
    //   image: 'images/shop/',
    //   link: '/product/wedding-website',
    //   button: 'Прочетете повече'
    // },
    // {
    //   title: 'Филм за младоженците',
    //   description: 'За споделяне с гостите на сватбата, на сватбения сайт или като QR код върху поканата.',
    //   production: 'Срок на изработка 10 работни дни',
    //   price: '80 лв./ бр.',
    //   image: 'images/shop/',
    //   link: '/product/wedding-film',
    //   button: 'Прочетете повече'
    // },
    // {
    //   title: 'Анимирана Видеопокана',
    //   description: 'Модерен и ефектен начин да поканите близките си – изпратена онлайн или чрез QR код, директно отварящ видеото.',
    //   production: 'Срок на изработка 5 работни дни',
    //   price: '50 лв./ бр.',
    //   image: 'images/shop/',
    //   link: '/product/video-invitation',
    //   button: 'Прочетете повече'
    // },
  ];

  res.render('layout', { title: 'Shop', content: 'shop', products });
});



app.get('/thank-you', (req, res) => {
  res.render('layout', {
    title: 'Благодарим Ви',
    content: 'thank-you'
  });
});


// Contact page
app.get('/contact', (req, res) => {
  const subject = req.query.subject || null;
  const success = req.query.success;
  const error = req.query.error;
  res.render('layout', { title: 'Контакт', content: 'contact', subject });
});


// Contact form submission
app.post('/contact', async (req, res) => {
  const { name, email, message, subject } = req.body;

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
      to: ['vellee.events@gmail.com'],
      replyTo: email,
      subject: `Запитване във Vellee Events от ${name}`,
      text: `
      Имате ново съобщение от сайта

      Име: ${name}
      Email: ${email}

      ${subject ? `Относно: ${subject}\n` : ''}
      Съобщение:
      ${message}`,
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