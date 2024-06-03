const express = require("express");
const cors = require("cors");
require("dotenv").config();
const { ObjectId } = require("mongodb");
const admin = require("firebase-admin");
const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Stripe
const stripe = require("stripe")(process.env.STRIPE_KEY);

// Firebase
const serviceAccount = require(`./docfind-67618-firebase-adminsdk.json`);

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

// MongoDB
const { MongoClient, ServerApiVersion } = require("mongodb");
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@crud-mongodb.bkqhhcm.mongodb.net/?retryWrites=true&w=majority&appName=crud-mongodb`;

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function verifyToken(req, res, next) {
  if (req.headers?.authorization?.startsWith("Bearer")) {
    const token = req.headers.authorization.split(" ")[1];

    try {
      const decodedUser = await admin.auth().verifyIdToken(token);
      req.decodedEmail = decodedUser.email;
    } catch {}
  }
  next();
}

async function run() {
  try {
    const database = client.db("docFindPortal");
    const servicesCollection = database.collection("services");
    const appoinmentsCollection = database.collection("appoinments");
    const usersCollection = database.collection("users");
    const doctorsCollection = database.collection("doctors");
    const contactUsCollection = database.collection("contactUs");

    // ==========================
    // Servicess GET API Method
    // ==========================
    app.get("/services", async (req, res) => {
      const cursor = servicesCollection.find({});
      const result = await cursor.toArray();
      res.send(result);
    });

    // =====================================
    // Servicess Single Data GET API Method
    // =====================================
    app.get("/services/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await servicesCollection.findOne(query);
      res.send(result);
    });

    // ==========================
    // Servicess POST API Method
    // ==========================
    app.post("/services", async (req, res) => {
      const addServices = req.body;
      const result = await servicesCollection.insertOne(addServices);
      res.json(result);
    });

    // ==========================
    // Servicess DELETE API Method
    // ==========================
    app.delete("/services/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await servicesCollection.deleteOne(query);
      res.json(result);
    });

    // ==========================
    // Servicess PUT API Method
    // ==========================
    app.put("/services/:id", async (req, res) => {
      const id = req.params.id;
      const updateServiceData = req.body;
      const filter = { _id: new ObjectId(id) };
      const options = { upsert: true };
      const updateDoc = {
        $set: {
          serviceTitle: updateServiceData.serviceTitle,
          serviceTime: updateServiceData.serviceTime,
          serviceSpaces: updateServiceData.serviceSpaces,
          serviceFee: updateServiceData.serviceFee,
        },
      };

      const result = await servicesCollection.updateOne(
        filter,
        updateDoc,
        options
      );
      res.json(result);
    });

    // ==========================
    // Appoinments GET API Method
    // ==========================
    app.get("/appoinments", verifyToken, async (req, res) => {
      const email = req.query.email;
      const appoinmentDate = req.query.appoinmentDate;
      const query = { email: email, appoinmentDate: appoinmentDate };
      const cursor = appoinmentsCollection.find(query);
      const result = await cursor.toArray();
      res.send(result);
    });

    app.get("/appoinments/admin", async (req, res) => {
      const appoinmentDate = req.query.appoinmentDate;
      const queryDate = { appoinmentDate: appoinmentDate };
      const cursor = appoinmentsCollection.find(queryDate);
      const countNumber = await appoinmentsCollection.count();
      const TodayCountNumber = await cursor.count();
      const visitedCount = await appoinmentsCollection
        .find({
          "appoinmentAction.appoinmentAction": "Visited",
        })
        .count();
      const appoinmentPayment = req.query.appoinmentPayment;
      const totalNonPaid = await appoinmentsCollection
        .find({
          appoinmentPayment: appoinmentPayment,
        })
        .count();
      const totalPaid = countNumber - totalNonPaid;
      const appoinmentAdmin = await cursor.toArray();
      res.send({
        appoinmentAdmin,
        TodayCountNumber,
        countNumber,
        visitedCount,
        totalPaid,
      });
    });

    // =====================================
    // Appoinments Single Data GET API Method
    // =====================================
    app.get("/appoinments/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await appoinmentsCollection.findOne(query);
      res.send(result);
    });

    // ==========================
    // Appoinments POST API Method
    // ==========================
    app.post("/appoinments", async (req, res) => {
      const addServices = req.body;
      const result = await appoinmentsCollection.insertOne(addServices);
      res.json(result);
    });

    // ==============================
    // Appoinments Delete API Method
    // ==============================

    app.delete("/appoinments/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await appoinmentsCollection.deleteOne(query);
      res.json(result);
    });

    // ==============================
    // Appoinments PUT API Method
    // ==============================

    app.put("/appoinments/:id", async (req, res) => {
      const id = req.params.id;
      const appoinmentPayment = req.body;

      const filter = { _id: new ObjectId(id) };
      const updateDoc = {
        $set: {
          appoinmentPayment: appoinmentPayment,
        },
      };

      const result = await appoinmentsCollection.updateOne(filter, updateDoc);
      res.json(result);
    });

    // ==============================
    // Appoinments PATCH API Method
    // ==============================
    app.put("/appoinments/apoinmentAction/:id", async (req, res) => {
      const id = req.params.id;
      const appoinmentAction = req.body;
      const filter = { _id: new ObjectId(id) };
      const updateDoc = {
        $set: {
          appoinmentAction: appoinmentAction,
        },
      };

      const result = await appoinmentsCollection.updateOne(filter, updateDoc);
      res.json(result);
    });

    // ==========================
    // Users Admin GET API Method
    // ==========================

    app.get("/users/:email", async (req, res) => {
      const email = req.params.email;
      const query = { email: email };
      const user = await usersCollection.findOne(query);
      let isAdmin = false;
      if (user?.role === "admin") {
        isAdmin = true;
      }
      res.json({ admin: isAdmin });
    });

    // ==========================
    // Users GET API Method
    // ==========================

    app.get("/users", async (req, res) => {
      const cursor = usersCollection.find({});
      const result = await cursor.toArray();
      res.send(result);
    });

    // ==========================
    // Users Single GET API Method
    // ==========================

    // app.get("/users/:id", async (req, res) => {
    //   const id = req.params.id;
    //   const query = { _id: new ObjectId(id) };
    //   const result = await usersCollection.findOne(query);
    //   res.send(result);
    // });

    // ==========================
    // Users POST API Method
    // ==========================
    app.post("/users", async (req, res) => {
      const addUsers = req.body;
      const result = await usersCollection.insertOne(addUsers);
      res.json(result);
    });

    // ==========================
    // Users PUT API Method
    // ==========================
    app.put("/users", async (req, res) => {
      const user = req.body;
      const filter = { email: user.email };
      const options = { upsert: true };
      const updateDoc = {
        $set: {
          user,
        },
      };

      const result = await usersCollection.updateOne(
        filter,
        updateDoc,
        options
      );
      res.json(result);
    });

    // ==========================
    // Users Admin PUT API Method
    // ==========================
    app.put("/users/admin", verifyToken, async (req, res) => {
      const user = req.body;
      const requester = req.decodedEmail;
      if (requester) {
        const requesterAcount = await usersCollection.findOne({
          email: requester,
        });
        if (requesterAcount.role === "admin") {
          const filter = { email: user.adminEmail };
          const updateDoc = {
            $set: {
              role: "admin",
            },
          };

          const result = await usersCollection.updateOne(filter, updateDoc);
          res.json(result);
        }
      } else {
        res
          .status(403)
          .json({ message: "You do not have access to make Admin" });
      }
    });

    // ===============================
    // Stripe Payment POST API Method
    // ===============================
    app.post("/stripe-payment", async (req, res) => {
      const paymentInfo = req.body;
      const amount = paymentInfo.price * 100;

      const paymentIntent = await stripe.paymentIntents.create({
        amount: amount,
        currency: "inr",
        automatic_payment_methods: {
          enabled: true,
        },
      });
      res.send({
        clientSecret: paymentIntent.client_secret,
      });
    });

    // ==========================
    // Doctors GET API Method
    // ==========================
    app.get("/doctors", async (req, res) => {
      const result = await doctorsCollection.find({}).toArray();
      res.send(result);
    });

    // =====================================
    // Doctors Single Data GET API Method
    // =====================================
    app.get("/doctors/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await doctorsCollection.findOne(query);
      res.send(result);
    });

    // ==========================
    // Doctors POST API Method
    // ==========================
    app.post("/doctors", async (req, res) => {
      const addDoctors = req.body;
      const result = await doctorsCollection.insertOne(addDoctors);
      res.json(result);
    });

    // ==========================
    // Doctors PUT API Method
    // ==========================
    app.put("/doctors/:id", async (req, res) => {
      const id = req.params.id;
      const updateDoctorData = req.body;
      const filter = { _id: new ObjectId(id) };
      const options = { upsert: true };
      const updateDoc = {
        $set: {
          doctorName: updateDoctorData.doctorName,
          doctorCategory: updateDoctorData.doctorCategory,
          doctorProgram: updateDoctorData.doctorProgram,
          doctorImage: updateDoctorData.doctorImage,
        },
      };

      const result = await doctorsCollection.updateOne(
        filter,
        updateDoc,
        options
      );
      res.json(result);
    });

    // ==========================
    // Doctors DELETE API Method
    // ==========================
    app.delete("/doctors/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await doctorsCollection.deleteOne(query);
      res.json(result);
    });

    // ==========================
    // Contact Us GET API Method
    // ==========================
    app.get("/contactUs", async (req, res) => {
      const result = await contactUsCollection.find({}).toArray();
      res.send(result);
    });

    // ================================
    // Contact Us Single GET API Method
    // =================================

    app.get("/contactUs/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await contactUsCollection.findOne(query);
      res.send(result);
    });

    // ==========================
    // Contact Us POST API Method
    // ==========================
    app.post("/contactUs", async (req, res) => {
      const addContactUs = req.body;
      const result = await contactUsCollection.insertOne(addContactUs);
      res.json(result);
    });

    // ==========================
    // Contact Us DELETE API Method
    // ==========================
    app.delete("/contactUs/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await contactUsCollection.deleteOne(query);
      res.json(result);
    });
  } finally {
    // await client.close();
  }
}
run().catch(console.dir);

app.get("/", (req, res) => {
  res.send(
    "Hi, I'm a Node js server. Now, I'm working... Please don't disturbe me!"
  );
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
