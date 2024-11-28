const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const express = require("express");
const cors = require("cors");
require("dotenv").config();
const app = express();
const cookieParser = require("cookie-parser");
const jwt = require("jsonwebtoken");
const port = process.env.PORT || 5000;

//middleware
app.use(
  cors({
    origin: [
      "http://localhost:5173", "http://localhost:5174"
      // "https://car-doctor-c8a12.firebaseapp.com",
      // "https://car-doctor-c8a12.web.app"
    ],
    credentials: true,
  })
);
app.use(express.json());
app.use(cookieParser());
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.rmmjiwd.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    const serverCollection = client.db("cardoctorDB").collection("services");
    const bookingCollection = client.db("cardoctorDB").collection("bookings");

    //middleware
    const logger = async (req, res, next) => {
      console.log("Called:", req.host, req.originalUrl);
      next();
    };
    //token verify
    const verifyToken = async (req, res, next) => {
      const token = req.cookies?.token;
      if (!token) {
        return res.status(401).send({ message: "not found token" });
      }
      jwt.verify(token, process.env.ACCESS_TOKEN, (err, decoded) => {
        if (err) {
          console.log(err);
          return res.status(401).send({ message: "unathorize" });
        }
        console.log("value in the token", decoded);
        req.user = decoded;
        next();
      });
    };

    //jwt api
    app.post("/jwt", logger, async (req, res) => {
      const user = req.body;
      console.log(user);
      const token = jwt.sign(user, process.env.ACCESS_TOKEN, {
        expiresIn: "1h",
      });
      res
        .cookie("token", token, {
          httpOnly: true,
          secure: true,
          sameSite: "none",
        })
        .send({ success: true });
    });

    //logout clear cookie
    app.post("/logout", async (req, res) => {
      const user = req.body;
      console.log("logout", user);
      res.clearCookie("token", { maxAge: 0 }).send({ success: true });
    });

    //services api
    app.get("/services", logger, async (req, res) => {
      const result = await serverCollection.find().toArray();
      res.send(result);
    });

    app.get("/services/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const options = {
        projection: { _id: 0, title: 1, img: 1, price: 1, service_id: 1 },
      };
      const result = await serverCollection.findOne(query, options);
      res.send(result);
    });
    //booking api
    app.post("/bookings", async (req, res) => {
      const query = req.body;
      const result = await bookingCollection.insertOne(query);
      res.send(result);
    });

    app.get("/bookings", logger, verifyToken, async (req, res) => {
      console.log("token", req.cookies);
      if (req.query.email !== req.query.email) {
        return res.status(403).send({ message: "forbidden" });
      }
      let query = {};
      if (req.query?.email) {
        query = { email: req.query.email };
      }
      const result = await bookingCollection.find(query).toArray();
      res.send(result);
    });

    app.delete("/bookings/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await bookingCollection.deleteOne(query);
      res.send(result);
    });

    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
  }
}
run().catch(console.dir);

app.get("/", (req, res) => {
  res.send("Car doctor server is running");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
