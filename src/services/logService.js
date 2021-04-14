function init() {}

function log(error) {
  console.log(error);
  // Raven.captureException(error);
}

const logger = {
  init,
  log,
};
export default logger;
