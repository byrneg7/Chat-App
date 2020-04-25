const express = require('express');
const mongoose = require('mongoose');
var path = require('path');
var fs = require('fs');
var morgan = require('morgan');

const keys = require('./config/keys');

// ------------------------------------------------------------------------------------


const app = express();
const PORT = process.env.PORT || 9000;

mongoose
    .connect(keys.mongoURI, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(console.log(`MongoDB connected ${keys.mongoURI}`))
    .catch(err => console.log(err));


// Middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// Log requests with morgan
var accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), {flags: 'a'})
app.use(morgan('combined', {stream: accessLogStream}))

// Express Session

if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
    const path = require('path');
    app.get("*", (req, res) => {
        res.sendFile(path.resolve(__dirname, "client", "build", "index.html"))
    });
}

// Routes
require('./routes/testRoutes')(app);
require('./routes/auth')(app);

app.listen(PORT, () => console.log(`Backend listening on port ${PORT}`));
