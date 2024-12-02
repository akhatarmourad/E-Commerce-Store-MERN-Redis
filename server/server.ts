import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.route";

dotenv.config();
const app = express();

const PORT = process.env.PORT ?? 7500;

/* Routes */
app.use("/api/v1/auth", authRoutes);


/* Server is running */
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}...`);
});