const hostname = '127.0.0.1';
const port = 3000;
const express = require("express");
const app = express();
const cors = require('cors');
const path = require('path')


const interestRates = require("./routes/interestRates");
app.use(express.json()); 
app.use(cors());

// Serve static files from the React frontend app
app.use(express.static(path.join(__dirname, '../frontend/build')))

// AFTER defining routes: Anything that doesn't match what's above, send back index.html; (the beginning slash ('/') in the string is important!)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/../frontend/build/index.html'))
})


app.use("/interestRates", interestRates);

app.listen(port, hostname, function() {
  console.log('Server running at http://'+ hostname + ':' + port + '/');
});
