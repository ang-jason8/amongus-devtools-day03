const server = require('./server');

const port = process.env.PORT || 3000;
server.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log('j650n', port);
  console.log('UP AND RUNNING @', port);
});
