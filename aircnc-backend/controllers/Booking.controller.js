const Booking = require('../models/Booking')

const store = async (req,res) =>{
    const { user_id } = req.headers;
    const { spot_id } = req.params;
    const { data } = req.body;

    const booking = await Booking.create({
        user: user_id,
        spot: spot_id,
        data,
    })

    await booking.populate(['spot', 'user'])

    return res.json(booking)
}

module.exports = { store }
