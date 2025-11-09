// db.js
require('dotenv').config();
const MongoClient = require('mongodb').MongoClient;

// MongoDB connection URL with authentication options
let url = `${process.env.MONGO_URL}`;

let dbInstance = null;
const dbName = "giftdb";

async function connectToDatabase() {
    if (dbInstance){
        return dbInstance
    };

    const client = new MongoClient(url);      

   // models/db.js

import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI || "fsijlmongodbdjlks";

let dbInstance;

export async function connectToDatabase() {
  // Task 1: Connect to MongoDB
  const client = new MongoClient(uri);
  await client.connect();

  // Task 2: Connect to database giftDB and store in variable dbInstance
  dbInstance = client.db("giftDB");

  // Task 3: Return database instance
  return dbInstance;
}

}

module.exports = connectToDatabase;
