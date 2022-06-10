function list (req, res) {
    res.status(200);
    res.type("text/html");
    res.render("template/todo.hbs", req.session);
}

function redirect(req, res) {
    res.redirect(303, "/todo/list");
}

function add (req, res) {
    res.type('application/x-www-form-urlencoded');
    if (req.session.todo) req.session.todo.push(req.body);
    else req.session.todo = [req.body];
    req.session.save(() => res.redirect(303, "list"));
}

function save (req, res) {
    res.type('application/x-www-form-urlencoded');
    for (s of req.session.todo) if (s.value) delete s.value;
    if (req.body) for (i in req.body) req.session.todo[i.split("-")[1]].value = "done";
    req.session.save(() => res.redirect(303, "list"));
}

function remove (req, res) {
    res.type('application/x-www-form-urlencoded');
    for (s of req.session.todo) if (s.value) delete s.value;
    if (req.body) for (i in req.body) req.session.todo[i.split("-")[1]].value = "done";
    req.session.todo = req.session.todo.filter(obj => !obj.value);
    req.session.save(() => res.redirect(303, "list"));
}

module.exports = {list, redirect, add, save, remove};