let express = require("express");
let path = require('path');
let app = express();
const PORT = 8089;
let serverRoutes = require("./routes")

app.use(express.static('public'));

app.use(express.json());
app.use(express.urlencoded({extended:true}));


app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");


serverRoutes(app);

app.listen(PORT, ()=>{
    console.log(`Server on http://localhost:${PORT}`);
})