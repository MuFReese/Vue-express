import path from 'path'
import express from "express"
import serverRouter  from './routes/server.js'

const __dirname = path.resolve()
const PORT = 3000
const app = express()

app.set('view engine', 'ejs')
app.set('views', path.resolve(__dirname, 'ejs'))

app.use(express.static(path.resolve(__dirname, 'static')))
app.use(express.json())
app.use(express.urlencoded({ extended: false}))

app.use(serverRouter)

app.get('/', (req, res) => {
  res.render('index')
})

app.get('/form', (req, res) => {
  res.render('form')
})

app.listen(PORT, () => {
  console.log(`Server has been sterted on port ${PORT}...`)
})
