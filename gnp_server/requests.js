const fetch = require('node-fetch'); // import node-fetch (enables the fetch API to be used server-side)
const { Pool } = require('pg'); // import node-postgres

const pool = new Pool({ // create connection to database
    connectionString: process.env.DATABASE_URL,	// use DATABASE_URL environment variable from Heroku app 
    ssl: {
      rejectUnauthorized: false // don't check for SSL cert
    }
  });

const addCaseNoteToDB = (req,res) => {
  const casenote = [req.body.casenote]
  const addString = 'INSERT INTO CaseNotes (sub_first_name) VALUES ($1) RETURNING *';
  pool.query(addString, casenote)
    .then(result => res.json(result))
    .catch(err => console.log(err));
}
  