import express from "express"
const app = express()
const PORT = 4000

app.get("/geo/:lati/:long", (req, res) => {
    const latitude = req.params.lati;
    const longitude = req.params.long;

    const urlGoogle = `https://www.google.com/maps?q=${latitude},${longitude}`;
    const urlOpen = `https://www.openstreetmap.org/?mlat=${latitude}&mlon=${longitude}&zoom=15`;

    res.json({
        GoogleMaps: urlGoogle,
        OpenStreetMap: urlOpen
    });
});


app.listen(PORT,()=>{
        console.log("api rodando")
})
