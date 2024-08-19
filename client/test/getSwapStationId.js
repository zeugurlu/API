const { getCabinetList } = require("../controllers/apiController");

const req = {
  body: {
    pageSize: 10,
    currentPage: 1,
  },
};

const res = {
  json: (data) => {
    console.log("Response JSON:", data);
  },
  status: (code) => {
    return {
      json: (data) => {
        console.log(`Response Status ${code}:`, data);
      },
      send: (message) => {
        console.log(`Response Status ${code}: ${message}`);
      },
    };
  },
};

(async () => {
  console.log("Testing getCabinetList:");
  await getCabinetList(req, res);
})();
