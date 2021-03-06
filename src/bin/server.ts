import app from '../app'
import mongoose from 'mongoose'

const { PORT, DB_HOST } = process.env

mongoose
  .connect(DB_HOST as string)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server running. Use our API on port: ${PORT}`)
      console.log('Database connection successful')
    })
  })
  .catch(error => {
    console.log(error.message)
    process.exit(1)
  })
