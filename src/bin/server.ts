import app from '../app'

const { PORT, DB_HOST } = process.env || 3000

app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`)
})
