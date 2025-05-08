import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import cors from 'cors'
import { createServer } from 'http'
import productRoutes from './routes/product.routes.js'

dotenv.config()
const app = express()
const httpServer = createServer(app)

app.use(express.json())
app.use(cors({ origin: 'http://localhost:5173' }))

mongoose.connect(process.env.MONGO_URI)

app.use('/products', productRoutes)

const PORT = process.env.PORT || 4000
httpServer.listen(PORT)
