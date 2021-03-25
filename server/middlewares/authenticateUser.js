module.exports = function (req, res, nest) {
    if (!req.session.user.admin) {
        res.status(403).send('You shouldnt be here!')
    } else {
        next();
    }
}