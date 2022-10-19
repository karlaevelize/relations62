const { Router } = require("express");

//Import required models
const Patient = require("../models").patient;
const Doctor = require("../models").doctors;

//1-Import and use router from express
const router = new Router();

//List of routes

// http :4000/patients
router.get("/patients", async (request, response, next) => {
  const patients = await Patient.findAll({ include: Doctor });
  response.send(patients);
});

// http :4000/patients name=Karla email=karla@karla.com phone=1234 password=karla doctorId=2
router.post("/patients", async (request, response, next) => {
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
router.patch("/patients/:id", async (request, response, next) => {
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
router.delete("/patients/:id", async (request, response, next) => {
  const { id } = request.params;

  const patient = await Patient.findByPk(id);

  if (!patient) {
    response.status(404).send("Patient with that id not found");
  } else {
    await patient.destroy();
    response.send("Patient terminated");
  }
});

//Export the module
module.exports = router;
