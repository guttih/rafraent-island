import {connection} from './connection/Connection';
import app from './App';


const PORT = 3000;

app.listen(PORT, () => {
    console.info(`Express server listening on http://localhost:${PORT}`);
});