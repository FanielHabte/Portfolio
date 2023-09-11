const express = require('express');
const app = express();
const port = process.env.PORT || 3000; // Use port 3000 as a fallback
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

app.set("view engine", "ejs");


//this will allow us to serve up static files, CSS, images & JS
app.use(express.static(__dirname));



app.get('/', (req, res) => {

  let title = "Home"
  res.render("pages/", {"title": title} );
});

app.get('/about', (req, res) => {
    let title = "About Us";
    res.render("pages/about", { "title": title });
});

//
app.get('/Portofolio', (req, res) => {

  let title = "Portofolio"
  res.render("pages/Portofolio", {"title": title} );
});





//



// const port = 3000; // Change this to a port that is not in use
// app.listen(port, () => {
//   console.log(`Server is running on port ${port}`);
// });

