import * as express from "express";
import { hi } from "@services/hi";

// Our Express APP config
const app = express();
app.set("port", process.env.PORT || 3000);

// API Endpoints
app.get('/', (req, res) => {
  res.send(hi(req.body))
})

// export our app
export default app;