let requestCount = 0;

exports.track = (req, res, next) => {
    requestCount++;
    next();
};

exports.getMetrics = (req, res) => {
    res.json({
        requests: requestCount,
        status: "running"
    });
};
