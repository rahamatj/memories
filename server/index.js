import 'dotenv/config'
import express from 'express'
import bodyParser from "body-parser";
import cors from 'cors';
import mongoose from 'mongoose';

const app = express()

app.use(bodyParser.json({ limit: "30mb", extended: true }))
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }))

app.use(cors())

const port = process.env.PORT || 5000

mongoose.connect(process.env.CONNECTION_URL)
    .then(() => app.listen(
            port,
            () => console.log(`Server running on port: ${port}`)
        )
    )
    .catch((error) => console.error(error.message))
