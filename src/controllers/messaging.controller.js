const messagingService= require('../services/messaging.controller')

async function get(req, res, next) {
    try {
        res.json(await messagingService.sendMessage());
    } catch (err) {
        next(err)
    }

}

module.exports = {
    get
};
