const {Pool, Client} = require('pg');
const connectionString = 'postgressql://postgres:password@localhost:5432/postgres';

const client = new Client({
    connectionString:connectionString
});

client.connect();

client.query('SELECT id, postfang FROM public.heimilisfong', (err, res) => {
    console.log(err, res);
    client.end()
})