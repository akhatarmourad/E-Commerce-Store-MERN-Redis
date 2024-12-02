import express from "express";

const router = express.Router();

router.get("/signup", (request, response) => {
    console.log("Auth Route...");
});

export default router;