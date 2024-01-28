import  express, { urlencoded }  from "express";
import { engine } from "express-handlebars";
import __dirname from "./utils.js";
import * as path from "path";
import  { Server }  from "socket.io";


const app = express ()
const PORT = 8080

app.use(express.json())
app.use(urlencoded({extended: true}));

//Handlebars
app.engine("handlebars", engine());
app.set("view engine", "handlebars")
app.set("views", path.resolve(__dirname + "/views") );

//Archivos
app.use("/", express.static(__dirname + "/public"))

const products = [
    {
        "Title":"Aire Acondicionado",
        "Description":" Aire acondicionado fantastico",
        "Code":123099,
        "Price":350,
        "Status":true,
        "Stock":55,
        "Category":"Electronic",
        "Thumbnails":"No img",
        "id":"gd2Fh7cdaTiClXl3svlrW"
     
    },
     
    {
        "Title":"Television",
        "Description":"Television full HD",
        "Code":127459,
        "Price":550,
        "Status":true,
        "Stock":90,
        "Category":"Electronic",
        "Thumbnails":"No img",
        "id":"eCP5QXvoJ_gl3Rl3X-VXT"
    },
      
    {"Title":"Impresora",
    "Description":"Una maquina multifuncional",
    "Code":128855,
    "Price":600,
    "Status":true,
    "Stock":77,
    "Category":"Electronic",
    "Thumbnails":"No img",
    "id":"QYXDwpNXzHdHZaAOnrPUu" },
       
    { "Title":"Lavadora",
    "Description":"Una maquina multifuncional",
    "Code":128899,
    "Price":650,
    "Status":true,
    "Stock":75,
    "Category":"Electronic",
    "Thumbnails":"No img",
    "id":"HwjsqoJJMTMEWZ7xLc10J"
    },
]

app.get("/", (req, res) => {
res.render("home",{
    title: "backend | handlebars",
    admin: true,
    products: products,
});
});


const server = app.listen(PORT, () => {
    console.log(`Servidor por Puerto: ${PORT}`);
});

//const io = new server(server);