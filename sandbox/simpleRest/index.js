const {Pool, Client} = require('pg');
const connectionString = 'postgressql://postgres:postgres@localhost:5432/typegraphql';

const client = new Client({
    connectionString:connectionString
});

client.connect();

client.query('SELECT id, postfang FROM public.heimilisfong', (err, res) => {
    console.log(err, res);
    client.end()
})