module.exports = {
  'secret': 'no much secret', // Secret for JWT tokens
  'database':'mongodb://localhost:27017', //Local DB connection
  'port': process.env.PORT || 3000 //PORT number setting
}
