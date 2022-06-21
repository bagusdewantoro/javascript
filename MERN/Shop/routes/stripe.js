const router = require('express').Router();
const KEY = process.env.STRIPE_KEY;
const stripe = require('stripe')(KEY);

router.post('/payment', async (req, res) => {
  await stripe.charges.create({
    source: req.body.tokenId,
    amount: req.body.amount,
    currency: 'usd'
  }, (stripeErr, stripeRes) => {
    if (stripeErr) {
      res.status(500).json(stripeErr);
    } else {
      res.status(200).json(stripeRes);
    }
  })
})

// stripe docs
// router.post('/payment', async (req, res) => {
//   const session = await stripe.checkout.sessions.create({
//     payment_method_types: ['card'],
//     line_items: [{
//       price_data: {
//         amount: req.body.amount,
//         source: req.body.tokenId,
//         currency: 'usd',
//       },
//       quantity: 1,
//     }],
//     mode: 'payment',
//     success_url: 'http://localhost:3000/success',
//     cancel_url: 'http://localhost:3000/cart',
//   });
//   res.redirect(303, session.url);
// });


module.exports = router;
