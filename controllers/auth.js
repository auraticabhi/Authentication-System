const logoutController = (req, res) => {
    req.logout((err) => {
        if (err) {
            console.log(err)
        } else {
            res.redirect("/pages/login");
        }
    })
}

module.exports = logoutController;