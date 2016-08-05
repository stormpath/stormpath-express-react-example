var stormpath = require('express-stormpath');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var path = require('path');
var express = require('express');
var webpack = require('webpack');
var config = require('./webpack.config');
var ora = require('ora');

var PORT = process.env.PORT || 3000;

var app = express();
var compiler = webpack(config);

var spinner = ora({
  interval: 100
});

function failAndExit(err) {
  spinner.fail();
  console.error(err.stack);
  process.exit(1);
}

app.use(morgan('combined'));

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.get('/css/bootstrap.min.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'build/css/bootstrap.min.css'));
});

app.use(stormpath.init(app, {
  // Disable logging until startup, so that we can catch errors
  // and display them nicely
  debug: 'none',
  web: {
    produces: ['application/json'],
    login: {
      nextUri: '/profile'
    }
  }
}));

app.post('/me', bodyParser.json(), stormpath.loginRequired, function (req, res) {
  function writeError(message) {
    res.status(400);
    res.json({ message: message, status: 400 });
    res.end();
  }

  function saveAccount() {
    req.user.givenName = req.body.givenName;
    req.user.surname = req.body.surname;
    req.user.email = req.body.email;

    req.user.save(function (err) {
      if (err) {
        return writeError(err.userMessage || err.message);
      }
      res.end();
    });
  }

  if (req.body.password) {
    var application = req.app.get('stormpathApplication');

    application.authenticateAccount({
      username: req.user.username,
      password: req.body.existingPassword
    }, function (err) {
      if (err) {
        return writeError('The existing password that you entered was incorrect.');
      }

      req.user.password = req.body.password;

      saveAccount();
    });
  } else {
    saveAccount();
  }
});

app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, 'build/index.html'));
});

spinner.text = 'Starting Dev Sever on port ' + PORT,
spinner.start();

app.listen(PORT, function () {
  spinner.succeed();
  spinner.text = 'Initializing Stormpath';
  spinner.start();
  app.on('stormpath.ready', function () {
    spinner.succeed();
    console.log('\nListening at http://localhost:' + PORT);
    // Now bring back error logging
    app.get('stormpathLogger').transports.console.level = 'error';
  });
}).on('error', failAndExit);



app.on('stormpath.error', failAndExit);
