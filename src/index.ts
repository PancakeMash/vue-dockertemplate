import express from 'express'

const app = express()
const PORT = 8080

app.use(express.static('.'))

app.get('/api/healthz', (req, res) => {
  res.set('Content-Type', 'application/json')
  res.status(200).json({ status: 'ok' })
})

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`)
})
