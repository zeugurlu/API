const { openSwapStationSlot } = require("../controllers/apiController");

const req = {
  body: {
    cabinetId: 2,
    code: 2,
    doorId: 1,
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
  console.log("Testing openSwapStationSlot:");
  await openSwapStationSlot(req, res);
})();
