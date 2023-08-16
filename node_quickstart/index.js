const { MongoClient } = require("mongodb");

const uri = "mongodb+srv://charlottenorajones:S23JSakFjF7wIPNh@cluster0.izr18ni.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoClient(uri);

async function run() {
    try {
        const database = client.db('sample_mflix');
        const movies = database.collection('movies');

        // Query for a movie that has the title 'Back to the Future'
        const query = { title: 'Back to the Future' };
        const movie = await movies.findOne(query);
        
        console.log(movie);
    } finally {
        await client.close();
    }
}

run().catch(console.dir);