// a middlewares for express to judge is user had login
module.exports = function(options) {
    const options = options || {};
    const sessionName = options["sessionName"] || "user";
    const redirect = options["redirect"] || "/login";
    return function(req,res,next) {
        if(!req.session[sessionName]) {
            return res.redirect(redirect);
        }
        next();
    }
}