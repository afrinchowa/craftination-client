const express = require('express');
const cors = require('cors');
const { MongoClient, ServerApiVersion } = require('mongodb');
const app = express();
const port = process.env.PORT || 5001;

// middleware
app.use(cors());
app.use(express.json());

// craftination
// x8NTcVZXISbVGO23


// const uri = "mongodb+srv://<username>:<password>@cluster0.033buvy.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const uri = "mongodb+srv://craftination:x8NTcVZXISbVGO23@cluster0.033buvy.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);


app.get('/' ,(req,res)=>{
    res.send(`craftination server is running on port : ${port}`)
})

app.listen(port, () => {
    console.log(`craftination server is running on port :${port}`)
})