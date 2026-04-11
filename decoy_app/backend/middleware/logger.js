module.exports = (req, res, next) => {
  const start = Date.now();
  const source = req.headers['x-forwarded-for'] || req.socket.remoteAddress;

  res.on('finish', () => {
    const latencyMs = Date.now() - start;
    console.log(
      `[LOG] ${new Date().toISOString()} ${source} ${req.method} ${req.originalUrl} ${res.statusCode} ${latencyMs}ms`
    );
  });

  next();
};
