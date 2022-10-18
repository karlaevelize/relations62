const Doctor = require("./models").doctors;
const Patient = require("./models").patient;

const getPatients = async () => {
  const patients = await Patient.findAll({ raw: true, include: Doctor });
  console.log("patients", patients);
};

// getPatients();

const getDoctors = async () => {
  const doctors = await Doctor.findAll({ raw: true, include: Patient });
  console.log("docs", doctors);
};

// getDoctors();
