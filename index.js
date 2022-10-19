const express = require("express");
//import the new router into index file
const useRouter = require("./routes/patients");

//REST API -> set of architectural constraints

const app = express();

const PORT = 4000;

//Goals:
//1- What is middleware?
// It's a funciton that gets triggeredwhen accessing an endpoint.

//2- How to use routers

//body parser middleware
app.use(express.json());

app.use(useRouter);

app.listen(PORT, () => console.log(`Listening on ${PORT}`));
