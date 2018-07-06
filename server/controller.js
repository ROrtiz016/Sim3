module.exports = {

  create: (req, res, next) => {
    const dbInstance = req.app.get('db');
    const { username, password } = req.body;

    dbInstance.create_user([username, password])
      .then(() => res.sendStatus(200))
      .catch(err => {
        res.status(500).send({ errorMessage: "Oops! Something went wrong." });
        console.log(err)
      })
  },

  login:(req, res) => {
    const dbInstance = req.app.get('db');
    dbInstance.getUser('db')
    .then(username => res.status(200).send(username))
  }


}