// let data = [
//   {
//     name: "Hospital Service",
//     img: "https://image.freepik.com/free-psd/medical-mock-up-with-capsules_23-2148478001.jpg",
//     id: 1,
//   },
//   {
//     name: "Consultation Service",
//     img: "https://image.freepik.com/free-photo/doctor-examine-x-ray-film-white-background_1150-6251.jpg",
//     id: 2,
//   },
//   {
//     name: "Dental Services",
//     img: "https://image.freepik.com/free-photo/elderly-woman-doctor-appointment-modern-private-clinic-while-she-sitts-hospital-bed-physician-is-listening-her-heart-beat-health-care-medicine-treatment-specialist-consultation_482257-4267.jpg",
//     id: 3,
//   },
//   {
//     name: "Restaurent Services",
//     img: "https://image.freepik.com/free-photo/little-girl-doctor-examination-child-african-doctor_1157-47178.jpg",
//     id: 4,
//   },
//   {
//     name: "Diagnostic services",
//     img: "https://image.freepik.com/free-photo/medium-shot-doctor-showing-results-patient_23-2148302133.jpg",
//     id: 5,
//   },
//   {
//     name: "Critical Care Services",
//     img: "https://image.freepik.com/free-photo/girl-looking-pensive-mother-sitting-dental-chair-wearing-coverall-because-coronavirus-outbreak-stomatologist-during-covid19-wearing-ppe-suit-doing-teeth-procedure-child-sitting-chair_482257-12158.jpg",
//     id: 6,
//   },
//   {
//     name: "Physiotherapi Services",
//     img: "https://image.freepik.com/free-photo/woman-with-marked-face-receiving-botox-injection_107420-74124.jpg",
//     id: 7,
//   },
//   {
//     name: "Free Medical Services",
//     img: "https://image.freepik.com/free-photo/diabetes-test-health-medical-concept-obesity-blood-test-diabetes_292052-1086.jpg",
//     id: 8,
//   },
//   {
//     name: "Consultance Services",
//     img: "https://image.freepik.com/free-photo/patient-couch-doctor-makes-ultrasound-diagnosis-man-white-uniform_1157-46168.jpg",
//     id: 9,
//   },
// ];
let fs = require("fs");
let rawdata = fs.readFileSync("data.json");
let data = JSON.parse(rawdata);

// const rando = require("rando-js");
// const randoMonth = rando.fromArray(data);

module.exports.getAllUser = (req, res, next) => {
  const { limit, pages } = req.query;
  console.log(limit);
  res.json(data.slice(0, limit));
};
//save user
module.exports.saveATool = (req, res) => {
  console.log(req.query);
  data.push(req.body);
  res.send(data);
};
//update tool
module.exports.updateTool = (req, res) => {
  // const newData = req.body;
  const { id } = req.params;
  const filter = { _id: id };

  const newData = data.find((data) => data.Id === Number(id));

  newData.Id = req.body.Id;
  newData.gender = req.body.gender;
  newData.name = req.body.name;
  newData.contact = req.body.contact;
  newData.address = req.body.address;
  newData.photoUrl = req.body.photoUrl;

  res.send(newData);
};

//delete
module.exports.deleteTool = (req, res) => {
  const { id } = req.params;
  const filter = { _id: id };

  datas = data.filter((data) => data.Id !== Number(id));

  res.send(datas);
};

module.exports.randomUser = (req, res, next) => {
  res.json("hii");
};
