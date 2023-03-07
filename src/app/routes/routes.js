module.exports = (app) => {
  app.get('/', (req, res) => {
    res.send("unyleya - pos")
  })

  app.get('/livros', (req, res) => {
    res.send("lista de livros")
  })
}
