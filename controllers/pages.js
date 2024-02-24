const loginPageController = (req, res) => {
    res.render("login");
}

const dashboardPageController = (req, res) => {
    if (req.isAuthenticated()) {
        //console.log(req.user);
        res.render("dashboard.ejs", { user: req.user });
    } else {
        res.redirect("/pages/login");
    }
}

module.exports = { loginPageController, dashboardPageController };