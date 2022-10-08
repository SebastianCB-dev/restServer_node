import express from 'express';
import cors from 'cors';

import { router } from '../routes/users.js'
import { dbConnection } from '../db/config.js';

export default class Server {

  constructor() {
    this.app = express();
    this.PORT = process.env.PORT;
    this.usersPath = '/api/users'; 
    
    // DB
    this.connectDB();

    // Middlewares
    this.middlewares();

    // Routes    
    this.routes();
  }

  async connectDB() {
    await dbConnection();
  }

  middlewares() {
    
    // CORS
    this.app.use(cors());

    // Parse JSON
    this.app.use(express.json());

    // Public Directory
    this.app.use(express.static('public'));
  }

  routes() {
    this.app.use(this.usersPath, router);
  }

  start() {
    this.app.listen(this.PORT, () => {
      console.log(`Listening on port ${this.PORT}`);
    });
  }

}