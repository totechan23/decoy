const serviceStart = Date.now();
let requestCount = 0;
const routes = {};

exports.track = (req, res, next) => {
  requestCount += 1;
  const key = `${req.method} ${req.path}`;
  routes[key] = (routes[key] || 0) + 1;
  next();
};

exports.getMetrics = (req, res) => {
  res.json({
    status: 'running',
    requests: requestCount,
    uptimeSeconds: Math.floor((Date.now() - serviceStart) / 1000),
    routes,
  });
};
