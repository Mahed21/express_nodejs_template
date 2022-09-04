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
  //console.log(req.query);
  data.push(req.body);
  //console.log(data);
  fs.writeFile("data.json", JSON.stringify(data), (err) => {
    if (err) {
      res.write("failed to load data");
      res.end();
    } else {
      res.write("successfull load data");
      res.end();
    }
  });
  //res.send(data);
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
  fs.writeFile("data.json", JSON.stringify(data), (err) => {
    if (err) {
      res.write("failed to load data");
      res.end();
    } else {
      res.write("successfull update data");
      res.end();
    }
  });

  // console.log(newData);
  // res.send(newData);
};

//delete
module.exports.deleteTool = (req, res) => {
  const { id } = req.params;
  const filter = { _id: id };

  datas = data.filter((data) => data.Id !== Number(id));
  console.log(datas);
  fs.writeFile("data.json", JSON.stringify(datas), (err) => {
    if (err) {
      res.write("failed to load data");
      res.end();
    } else {
      res.write("successfull deleted");
      res.end();
    }
  });
};

//random user

module.exports.randomUser = (req, res, next) => {
  let value = Math.floor(Math.random() * 10);
  const newData = data.find((data) => data.Id === value);

  res.send(newData);
  res.end();
};
