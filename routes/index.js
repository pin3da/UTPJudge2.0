
module.exports = function(app) {

  app.get('/', function(req, res) {
    res.render('index.html', {name : "some-data"});
  });
}
