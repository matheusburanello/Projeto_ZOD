const mongoose = require('mongoose');

const BookingSchema = new mongoose.Schema({
    data: String,
    approved: Boolean,
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    spot:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'Spots'
    }

});

module.exports = mongoose.model('Booking', BookingSchema)