const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://probuild112233:pronewdb123@cluster0.ift9r1j.mongodb.net/test?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log("connected sussusfully to mongoDB"))
  .catch((err) => console.log(err));
