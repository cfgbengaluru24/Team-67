const express = require('express');
const mongoose = require('mongoose');
const userRoute = require('./routes/userRoute');
const volunteerRoutes = require('./routes/voluntRoute'); 
const lclRoute = require('./routes/lclRoute');
const mappingRoute = require('./routes/mappingRoute');
const studentRoute = require('./routes/studentRoute');
// const authRoute = require('./routes/auth');
const app = express();

// Middleware setup
app.use(express.json());

// Use user routes
app.use('/api/v1/', userRoute);
app.use('/api/v1/',volunteerRoutes);
app.use('/api/v1/',lclRoute);
app.use('/api/v1/',mappingRoute);
app.use('/api/v1/',studentRoute);

// app.use('/api/auth', authRoute);
module.exports = app;
