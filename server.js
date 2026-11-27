const express = require('express');
const path = require('path');

const app = express();

// Serve static files from the public folder
app.use(express.static(path.join(__dirname, 'public')));

// API 1: Cloud Services
app.get('/api/services', (req, res) => {
    const services = [
        {
            serviceId: 1,
            serviceName: "Amazon EC2",
            category: "IaaS",
            pricingModel: "Pay-as-you-go"
        },
        {
            serviceId: 2,
            serviceName: "AWS Lambda",
            category: "PaaS",
            pricingModel: "Pay per request"
        },
        {
            serviceId: 3,
            serviceName: "Amazon S3",
            category: "IaaS",
            pricingModel: "Pay per storage"
        },
        {
            serviceId: 4,
            serviceName: "Google Cloud Run",
            category: "PaaS",
            pricingModel: "Pay per usage"
        }
    ];

    res.json(services);
});

// API 2: System Status
app.get('/api/status', (req, res) => {
    res.json({
        status: "Operational",
        developer: "ANWIN JOHNY",
        environment: "Cloud PaaS"
    });
});

// Port configuration
const PORT = process.env.PORT || 8080;

// Start server locally
if (!process.env.VERCEL) {
    app.listen(PORT, () => {
        console.log(`Server running at http://localhost:${PORT}`);
    });
}

// Export Express application for Vercel
module.exports = app;