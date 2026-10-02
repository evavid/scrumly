const mongoose = require("mongoose");

// Set MONGODB_URI in .env (see .env.example); falls back to a local MongoDB.
var dbURI = process.env.MONGODB_URI || "mongodb://localhost/mongodb-community";
mongoose.connect(dbURI);

mongoose.connection.on("connected", () => {
    console.log("Mongoose je povezan.");
  });

  mongoose.connection.on("error", (napaka) => {
    console.log("Mongoose napaka pri povezavi: ", napaka);
  });

  mongoose.connection.on("disconnected", () => {
    console.log("Mongoose ni povezan.");
  });


  const pravilnaUstavitev = (sporocilo, povratniKlic) => {
    mongoose.connection.close(() => {
      console.log(`Mongoose je zaprl povezavo preko '${sporocilo}'.`);
      povratniKlic();
    });
  };

  // Ponovni zagon nodemon
  process.once("SIGUSR2", () => {
    pravilnaUstavitev("nodemon ponovni zagon", () => {
      process.kill(process.pid, "SIGUSR2");
    });
  });

  // Izhod iz aplikacije
  process.on("SIGINT", () => {
    pravilnaUstavitev("izhod iz aplikacije", () => {
      process.exit(0);
    });
  });

//   reference na sheme


require("./user");
require("./project");
