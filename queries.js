const db = require("./models");

const Doctors = require("./models").doctors;

const getAllDoctors = async () => {
  const allDoctors = await Doctors.findAll({ raw: true });
  // console.log(allDoctors.map((doctor) => doctor.dataValues));
  // console.log(allDoctors.map((doctor) => JSON.stringify(doctor)));
  console.log(allDoctors);
};

const getAllDoctorsOnDuty = async () => {
  const allDoctorsOnDuty = await Doctors.findAll({
    where: { onDuty: true },
    raw: true
  });
  console.log(allDoctorsOnDuty);
};

const getDoctorById = async (id) => {
  const doctor = await Doctors.findByPk(id, { raw: true });
  console.log(doctor);
};

const getDoctorByName = async (doctorName) => {
  const doctor = await Doctors.findOne({
    where: { name: doctorName },
    raw: true
  });
  return doctor;
};

const setDoctorActive = async (id) => {
  const doctor = await Doctors.findByPk(id);
  await doctor.update({ onDuty: true });
  console.log("Done updating");
};

const createDoctor = async () => {
  const newDoctor = await Doctors.create({
    name: "House",
    onDuty: false,
    email: true
  });
  console.log(newDoctor);
};

const killDoctor = async (id) => {
  const doctor = await Doctors.findByPk(id);
  await doctor.destroy();
};

// killDoctor(16);
createDoctor();
// setDoctorActive(13);

// getAllDoctorsOnDuty();
// getDoctorById(99);
// getDoctorByName("strange");

// getDoctorByName("Strange").then((doc) => console.log(doc));
