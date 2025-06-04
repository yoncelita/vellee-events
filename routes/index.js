const express = require('express');
const router = express.Router();

// Home page
router.get('/', (req, res) => {
    res.render('layout', { title: 'Home', body: '<div class="text-center"><h1>Welcome to Our Website</h1><p>This is the home page.</p></div>' });
});

// About page
router.get('/about', (req, res) => {
    res.render('layout', { title: 'About', body: '<div class="text-center"><h1>About Us</h1><p>This is the about page.</p></div>' });
});

// Services page
router.get('/services', (req, res) => {
    res.render('layout', { title: 'Services', body: '<div class="text-center"><h1>Our Services</h1><p>This is the services page.</p></div>' });
});

// Contact page
router.get('/contact', (req, res) => {
    res.render('layout', { title: 'Contact', body: `<div class="container"><h1>Contact Us</h1>
    <form action="/contact" method="POST">
        <div class="mb-3">
            <label for="name" class="form-label">Name:</label>
            <input type="text" class="form-control" id="name" name="name" required>
        </div>
        <div class="mb-3">
            <label for="email" class="form-label">Email:</label>
            <input type="email" class="form-control" id="email" name="email" required>
        </div>
        <div class="mb-3">
            <label for="message" class="form-label">Message:</label>
            <textarea class="form-control" id="message" name="message" required></textarea>
        </div>
        <button type="submit" class="btn btn-primary">Send</button>
    </form>
    </div>` });
});

// Thank you page
router.post('/contact', (req, res) => {
    res.redirect('/thank-you');
});

router.get('/thank-you', (req, res) => {
    res.render('layout', { title: 'Thank You', body: '<div class="text-center"><h1>Thank You!</h1><p>Your message has been sent.</p></div>' });
});

module.exports = router;
