const { setSwapStation } = require("../controllers/apiController");

const req = {
  body: {
    cabinetId: 2,
    code: 2,
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
  console.log("Testing setSwapStation:");
  await setSwapStation(req, res);
})();
