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
  res.render("pages/index", {"title": title} );
});

app.get('/About', (req, res) => {
  try {
    let title = "About Us";
    res.render("pages/About", { "title": title });
  } catch (error) {
    // Handle the error
    console.error("Error rendering About page:", error);
    res.status(500).send("Internal Server Error");
  }
});

//
app.get('/Contact', (req, res) => {

  let title = "Contact"
  res.render("pages/Contact", {"title": title} );
});

//
app.get('/Locations', (req, res) => {

  let title = "Locations "
  res.render("pages/Locations", {"title": title} );
});

//socialism page 
app.get('/News', (req, res) => {

  let title = "News"
  res.render("pages/News", {"title": title} );
});

//contact page
app.get('/Services', (req, res) => {

  let title = "Services"
  res.render("pages/Services", {"title": title} );
});


