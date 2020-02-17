const app = require('./app')

const PORT = process.env.PORT || 7079

app.listen(PORT, () => {
  console.log(`application listening on port ${PORT}`)
})