const {Client } = require('pg')
/*
const client = new Client({
    host: 'ec2-34-207-12-160.compute-1.amazonaws.com',
    user: 'kxiyxppvnrnfoh',
    password: '9991fa3d2096615f4d1884684fc640bad5578f111b351a4b1bdfbada1f316ac6',
    database: 'd7sv7rqsmlauj0',
    port: 5432,
    ssl: { rejectUnauthorized: false }
  })
*/

const client = new Client({
    connectionString: 'postgresql://kxiyxppvnrnfoh:9991fa3d2096615f4d1884684fc640bad5578f111b351a4b1bdfbada1f316ac6@ec2-34-207-12-160.compute-1.amazonaws.com:5432/d7sv7rqsmlauj0',
	// use DATABASE_URL environment variable from Heroku app 
    ssl: {
      rejectUnauthorized: false // don't check for SSL cert
    }
})
client.connect()
client.query('SELECT * FROM Client', (err, res) => {
    console.log(err, res)
    client.end()
  })
  