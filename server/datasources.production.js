module.exports = {
  database: {
    url: process.env.MONGO_URL,
    name: 'database',
    connector: 'mongodb'
  }
}