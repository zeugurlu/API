const { useLoginApi } = require("./controllers/apiController");

const req = {
  body: {
    userAccount: "TUR_TRGREEGO",
    userPassword: "TURTRGREEGO123",
    isRememberMe: true,
  },
};

const res = {
  json: (data) => {
    console.log("Response JSON:", data);
  },
  status: (code) => {
    return {
      send: (message) => {
        console.log(`Response Status ${code}: ${message}`);
      },
    };
  },
};

(async () => {
  console.log("Testing useLoginApi:");
  await useLoginApi(req, res);
})();
