import express, { Router } from 'express';
const router: Router = express.Router();
import http from "http"
import fs from "fs"

var url = "http://mainia.tistory.com/2884";
var path = "article.html";

var outfile = fs.createWriteStream(path);

router.get("/", async (req, res) => {
    http.get(url, (res) => {
        res.pipe(outfile);
        res.on('end', function () {
            outfile.close();
            console.log("file down end.");
        });

    });
    console.log(outfile)
    return res.send("scrapping Router")
})


export default router;