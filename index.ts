import express from 'express';
import { requestlog } from './middleware/log'
import scrapingRouter from './routes/scraping';
const port = 8080 || process.env.PORT
require("dotenv").config();



const app = express()
app.use(requestlog)

app.get("/", async (req, res) => {

    console.log("TS API console")
    return res.send("API Type script");
})


app.listen(port, () => {
    console.log(`Typescirpt : ${port}`);
});


app.use("/scrap", scrapingRouter)