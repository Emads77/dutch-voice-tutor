import express from 'express';
import cors from "cors";
import statusCodes from "http-status-codes";

const app = express();

const PORT = process.env.PORT || 7000;
const HOST = '0.0.0.0';
const CLIENT_ORIGIN = process.env.CLIENT_ORIGIN || 'http://localhost:5173';

app.use(cors({ origin: CLIENT_ORIGIN }));

app.get('/health', (req, res) => {
    res.send('the server is working fine');
});

// 404 — unmatched routes
app.use((req, res) => {
    res.status(statusCodes.NOT_FOUND).json({ error: 'Endpoint not found' });
});

// Global error handler
app.use((err, req, res, next) => {
    if (res.headersSent) return next(err);

    console.error(`Error on ${req.method} ${req.url}:`, err);

    res
        .status(err.status || statusCodes.INTERNAL_SERVER_ERROR)
        .json({ message: 'Something went wrong!' });
});

const server = app.listen(PORT, HOST, () => {
    console.log(`Server listening on ${HOST}:${PORT}`);
});

server.on('error', (err) => {
    if (err.code === 'EADDRINUSE') {
        console.error(`Port ${PORT} is already in use.`);
    } else {
        console.error('Server failed to start:', err.message);
    }
    process.exit(1);
});