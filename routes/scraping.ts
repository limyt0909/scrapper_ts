import express, { Router } from 'express';
const router: Router = express.Router();

router.get("/", async (req, res) => {
    return res.send("scrapping Router")
})


export default router;