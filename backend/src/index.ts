import express from 'express'
import cors from 'cors'
import setupSwagger from './middleware/swagger'

import utilsRoute from './routes/utilsRoute'
import diariesRoute from './routes/diariesRoute'
import dotenv from 'dotenv'

dotenv.config()

const PORT = process.env.PORT || 5001
const app = express()

// middleware
app.use(express.json())
// ...

// routes
app.get('/', (_req, res) => res.json({ message: 'Bienvenido a la API TS!' }))
app.use('/api', utilsRoute)
app.use('/api/diaries', diariesRoute)
// ...

if (process.env.NODE_ENV !== 'production')
    setupSwagger(app)

app.use(cors({
    origin: '*'
}))

app.listen(PORT, () => {
    console.log('Servidor iniciado correctamente')
    console.log(`Corriendo en: http://localhost:${PORT}`)
})
