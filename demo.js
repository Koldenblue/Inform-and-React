const express = require("express");
const app = express();
const path = require("path");
const database = require('./currentSenate.json');
const proPublica = require('./proPublica.json');
const fs = require("fs")
app.use(express.json());
app.use(express.urlencoded({extended:true}));


app.get("/", (req,res)=> res.sendFile(path.join(__dirname, "demo.html")));
app.get("/api/pic/:name", ({params:{name}}, res)=> {
    const filtered = database.filter(a => {
        const regex = new RegExp(name, "gi");
        return Object.values(a).some(e => regex.test(e))
    });

    console.log(filtered);
    res.json(filtered[0])
});

app.get("/api/id/:id", ({params:{id}}, res)=> {
    const filtered = proPublica.filter(a => {
    return a.id.bioguide  === id;
    });

    console.log(filtered);
    res.json(filtered[0])
});
// app.get("/api/mapdata", (_,res)=> {
//     const mapped = database.map(a=> {
//         return {
//             id: a.id.bioguide,
//             namev1: a.id.ballotpedia,
//             namev2: a.name.first,
//             namev3: a.name.last,
//             namev4: a.name.official_full
//         }
//     });
//     fs.writeFile("currentSenate.json", JSON.stringify(mapped), ()=> res.json("ok"))
// })


app.listen(3000, ()=> console.log("ok"))