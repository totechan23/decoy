const express = require('express');
const logger = require('./middleware/logger');
const { track } = require('./controllers/metricsController');

const userRoutes = require('./routes/userRoutes');
const adminRoutes = require('./routes/adminRoutes');
const metricsRoutes = require('./routes/metricsRoutes');

const app = express();

app.use(express.json());
app.use(logger);
app.use(track);

app.use('/user', userRoutes);
app.use('/admin', adminRoutes);
app.use('/metrics', metricsRoutes);

app.get('/', (req, res) => {
    res.send("SecureCorp Backend Running");
});

app.listen(3000, () => {
    console.log("🚀 Backend running on port 3000");
});
