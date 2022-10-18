const express = require("express");
const Patient = require("./models").patient;
const Doctor = require("./models").doctors;
//REST API -> set of architectural constraints

const app = express();

const PORT = 4000;

//Goals:
//1. Set up an express server
//2. Make GET, POST, UPDATE and DELETE requests

//body parser middleware
app.use(express.json());

//http :4000/
app.get("/", async (request, response, next) => {
  response.send("Hello from Express Server!");
});

// http :4000/patients
app.get("/patients", async (request, response, next) => {
  const patients = await Patient.findAll({ include: Doctor });
  response.send(patients);
});

// http :4000/doctors/2
app.get("/doctors/:id", async (request, response, next) => {
  const { id } = request.params;

  const doctor = await Doctor.findByPk(id);

  if (!doctor) {
    response.status(404).send("Doctor not found");
  } else {
    response.send(doctor);
  }
});

// http :4000/patients name=Karla email=karla@karla.com phone=1234 password=karla doctorId=2
app.post("/patients", async (request, response, next) => {
  //need body parser middleware, or it breaks with undefined
  const { name, email, phone, password, doctorId } = request.body;

  console.log(request.body);

  const newPatient = await Patient.create({
    name,
    email,
    phone,
    password,
    doctorId,
  });

  response.send(newPatient);
});

// http PATCH :4000/patients/4 name=Banana
app.patch("/patients/:id", async (request, response, next) => {
  //1. get id from params
  const { id } = request.params;
  const { name } = request.body;
  //2. find patient to update
  const patient = await Patient.findByPk(id);

  if (!patient) {
    response.status(404).send("No patient with that id");
  } else {
    const updatedPatient = await patient.update({ name });
    response.send(updatedPatient);
  }
});

// http DELETE :4000/patients/4
app.delete("/patients/:id", async (request, response, next) => {
  const { id } = request.params;

  const patient = await Patient.findByPk(id);

  if (!patient) {
    response.status(404).send("Patient with that id not found");
  } else {
    await patient.destroy();
    response.send("Patient terminated");
  }
});

app.listen(PORT, () => console.log(`Listening on ${PORT}`));
