const express = require("express");
const cors = require('cors'); 
const PORT = process.env.PORT || 3000;
// cors() engedélyezi, hogy a 5500-as frontend hozzáférjen a 3000-es backend API-hoz.
// A CORS azt engedi meg, hogy a 5500-as oldal kommunikálhasson a 3000-as Express szerverrel
// app.use(express.json());  -> akkor kell, amikor a kliens JSON adatot küld a backendnek a body-ban
// A CORS pedig csak azért kell, mert most a Live Server 5500-as portjáról beszélgetünk az Express 3000-as portjával
const app = express();
app.use(cors());
app.get("/", function(req, res) {
    res.sendFile(__dirname + "/mp3_VU_meter.html");
});

app.get("/zene1", function(req, res) {
    res.sendFile(__dirname + "/zene1.mp3");
});
app.get("/zene2", function(req, res) {
    res.sendFile(__dirname + "/zene2.mp3");
});
app.get("/zene3", function(req, res) {
    res.sendFile(__dirname + "/zene3.mp3");
});
app.listen(PORT, function() {
    console.log("MP3 szerver elindult a " + PORT + "-es porton.");
});
