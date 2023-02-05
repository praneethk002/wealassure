const express = require("express");
const createUserRouter = require("./createUser");
const createHospitalRouter = require("./createHospital");
const createCompanyRouter = require("./createCompany");
const createBillRouter = require("./createBill");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(express.json());

app.use(
  cors({
    origin: ["http://localhost:3000"],
    credentials: true,
  })
);

app.use("/api", createUserRouter);
app.use("/api", createHospitalRouter);
app.use("/api", createCompanyRouter);
app.use("/api", createBillRouter);

app.listen(2000, () => {
  console.log("Server is running on port 2000");
});

mongoose
  .connect(
    `mongodb+srv://admin:admin@cluster0.plk2g.mongodb.net/healocode?retryWrites=true&w=majority`
  )
  .then(() => {
    console.log("Database Connected");
  });
