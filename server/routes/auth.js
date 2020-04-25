const auth = require("../middleware/auth");
const User = require("../models/Users");

module.exports = (app) => {

  app.post('/api/auth/signup', async (req, res) => {

    try {
      const user = new User(req.body);
      await user.save();
      const token = await user.generateAuthToken();
      res.status(201).send({user, token})
    } catch (error) {
      console.log(error);
      res.status(400).send(error)
    }
  });

  app.post('/api/auth/login', async (req, res) => {
    //Login a registered user
    try {
      const {email, password} = req.body;
      const user = await User.findByCredentials(email, password);
      if (!user) {
        return res.status(401).send({error: 'Login failed! Check authentication credentials'})
      }
      const token = await user.generateAuthToken();
      res.send({user, token})
    } catch (error) {
      res.status(400).send(error)
    }
  });

  app.post('/api/auth/logout', auth, async (req, res) => {
    // Log user out of the application
    try {
      req.user.tokens = req.user.tokens.filter((token) => {
        return token.token !== req.token;
      })
      await req.user.save();
      res.send()
    } catch (error) {
      res.status(500).send(error)
    }
  });

  app.post('/api/auth/logoutall', auth, async (req, res) => {
    // Log user out of all devices
    try {
      req.user.tokens.splice(0, req.user.tokens.length);
      await req.user.save();
      res.send()
    } catch (error) {
      res.status(500).send(error)
    }
  })

  app.get('/users/me', auth, async (req, res) => {
    // View logged in user profile
    res.send(req.user)
  })

};
