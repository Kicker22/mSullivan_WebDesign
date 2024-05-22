const express = require('express');
const path = require('path');
const bodyParser = require('body-parser')
// require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from the 'public' directory
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

// Import route files
const htmlRoutes = require('./routes/htmlRoutes');

app.use('/', htmlRoutes)


// middleware 
app.use((req, res, next) => {
    res.status(404).send("Sorry can't find that!");
});


app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
