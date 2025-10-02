const express = require ('express');
const router = express.Router();
const BookingController = require ('../controllers/Booking.controller')

// localhost:3335/bookings/11313131313/spots

router.post('/:spot_id/spots', BookingController.store);

module.exports = router;