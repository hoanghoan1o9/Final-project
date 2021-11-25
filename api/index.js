const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const authRoute = require("./routes/auth");
const userRoute = require("./routes/users");
const movieRoute = require("./routes/movies");
const listRoute = require("./routes/lists");
const bmiRoute = require("./routes/bmis");

dotenv.config();

main().catch((err) => console.log(err));

async function main() {
  await mongoose
    .connect(process.env.MONGO_URL)
    .then(() => console.log("DB connection"))
    .catch((err) => console.log(err));
}

app.use(express.json());

app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/movies", movieRoute);
app.use("/api/lists", listRoute);
app.use("/api/bmis", bmiRoute);

app.listen(8800, () => {
  console.log("server is running");
});
