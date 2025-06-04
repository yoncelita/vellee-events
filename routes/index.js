const express = require('express');
const router = express.Router();


// Home page
router.get('/', (req, res) => {
    res.render('layout', { title: 'Home', content: 'home' });
});

// Facilities & Services page
router.get('/facilities', (req, res) => {
    res.render('layout', { title: 'Facilities', content: 'facilities' });
});

// Gallery
router.get('/gallery', (req, res) => {
    res.render('layout', { title: 'Gallery', content: 'gallery' });
});

// Courchevel
router.get('/courchevel', (req, res) => {
    res.render('layout', { title: 'Courchevel', content: 'courchevel' });
});

// Availability
router.get('/availability', (req, res) => {
    res.render('layout', { title: 'Availability', content: 'availability' });
});

// Contact page
router.get('/contact', (req, res) => {
    res.render('layout', { title: 'Contact', content: 'contact' });
});

// Thank you page
router.post('/contact', (req, res) => {
    res.redirect('/thank-you');
});

router.get('/thank-you', (req, res) => {
    res.render('layout', { title: 'Thank You', content: 'thank-you' });
});


// TODO: 404 page


module.exports = router;
