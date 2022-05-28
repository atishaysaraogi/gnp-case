const { Pool } = require('pg'); // import node-postgres

/*
console.log(process.env.DATABASE_URL)
const pool = new Pool({ // create connection to database
    connectionString: ???	// use DATABASE_URL environment variable from Heroku app 
    ssl: {
      rejectUnauthorized: false // don't check for SSL cert
    }
  });
*/

const pool = new Pool({
  host: 'ec2-34-207-12-160.compute-1.amazonaws.com',
  user: 'kxiyxppvnrnfoh',
  password: '9991fa3d2096615f4d1884684fc640bad5578f111b351a4b1bdfbada1f316ac6',
  database: 'd7sv7rqsmlauj0',
  port: 5432,
  max: 20,
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 2000,
})


const addCaseNoteToDB = (req,res) => {
  const casenote = [req.body.casenote]
  const addString = 'INSERT INTO CaseNotes (sub_first_name) VALUES ($1) RETURNING *';
  pool.query(addString, casenote)
    .then(result => res.json(result))
    .catch(err => console.log(err));
}

const getCaseNoteFromDB = (req,res) => {
  const casenote = [req.body.casenote]
  const addString = 'SELECT * FROM CaseNotes';
  pool.query(addString, casenote)
    .then(result => res.json(result))
    .catch(err => console.log(err));
}
  
exports.addCaseNoteToDB = addCaseNoteToDB
exports.getCaseNoteFromDB = getCaseNoteFromDB