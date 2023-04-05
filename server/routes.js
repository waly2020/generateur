const express = require("express");
const routes = express.Router();
const createCsvWriter = require('csv-writer').createObjectCsvWriter;

const csvWriter = createCsvWriter({
    path: 'public/cvs/numero.csv',
    header: [
        { id: 'id', title: 'ID' },
        { id: 'numero', title: 'numero' }
    ]
});

function random(maxValue) {
    const value = Math.floor(Math.random() * maxValue);
    return value < 10 ? "0" + value : value;
}

routes.get("/", (req, res) => {
    res.render("pages/index");
})

routes.post("/getDatas", (req, res) => {
    const datas = req.body;
    const tab = [];

    for (let i = 0; i < parseInt(datas.quant); i++) {
        tab.push({ id: i, numero: `${datas?.ind ? "+241" : ""}${datas?.ind ? datas.sep : ""}${datas?.zero ? "0" : ""}${datas.chif}${datas.sep}${random(99)}${datas.sep}${random(99)}${datas.sep}${random(99)}` });
    }
    csvWriter.writeRecords(tab)       // returns a promise
        .then(() => {
            console.log('...Done');
            // console.log("datas\n", tab);
            res.render("pages/succes", { datas: tab });
        });
})

module.exports = routes;