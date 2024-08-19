const https = require("https");

const makeRequest = (options, postData) => {
  return new Promise((resolve, reject) => {
    const req = https.request(options, (res) => {
      let data = "";

      res.on("data", (chunk) => {
        data += chunk;
      });

      res.on("end", () => {
        try {
          const parsedData = JSON.parse(data);
          resolve(parsedData);
        } catch (e) {
          reject(new Error("Error parsing response data"));
        }
      });
    });

    req.on("error", (e) => {
      reject(new Error(`Request error: ${e.message}`));
    });

    req.write(postData);
    req.end();
  });
};

const useLoginApi = async (req, res) => {
  try {
    const { userAccount, userPassword, isRememberMe } = req.body;

    const postData = JSON.stringify({
      userAccount,
      userPassword,
      isRememberMe,
    });

    const options = {
      hostname: "ems.vmotosoco-service.com",
      port: 443,
      path: "/vmoto-authority-api/auth/account/login",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Content-Length": Buffer.byteLength(postData),
      },
    };

    const response = await makeRequest(options, postData);

    console.log("Login Response:", response);

    if (response.isSuccess) {
      const user = response.data;
      res.json({ user });
    } else {
      res.status(400).json({ error: "Error in API response" });
    }
  } catch (error) {
    console.error("Error fetching access token:", error.message);
    res.status(500).send("Error fetching access token");
  }
};

const getCabinetList = async (req, res) => {
  try {
    const { pageSize, currentPage } = req.body;

    const postData = JSON.stringify({ pageSize, currentPage });

    const options = {
      hostname: "ems.vmotosoco-service.com",
      port: 443,
      path: "/vmoto-admin-api/cabinetInfo/list",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Content-Length": Buffer.byteLength(postData),
      },
    };

    const response = await makeRequest(options, postData);

    console.log("Cabinet List Response:", response);

    if (response.isSuccess) {
      res.json(response.data.list);
    } else {
      res.status(501).json({ error: "Error in API response" });
    }
  } catch (error) {
    console.error("Error fetching cabinet list:", error.message);
    res.status(500).json({ error: error.message });
  }
};

const setSwapStation = async (req, res) => {
  try {
    const { cabinetId, code } = req.body;

    const postData = JSON.stringify({ cabinetId, code });

    const options = {
      hostname: "ems.vmotosoco-service.com",
      port: 443,
      path: "/vmoto-admin-api/iot/cabinetControl",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Content-Length": Buffer.byteLength(postData),
      },
    };

    const response = await makeRequest(options, postData);

    console.log("Set Swap Station Response:", response);

    if (response.isSuccess) {
      res.json(response);
    } else {
      res.status(501).json({ error: "Error in API response" });
    }
  } catch (error) {
    console.error("Error setting swap station:", error.message);
    res.status(500).json({ error: error.message });
  }
};

const setSwapSlot = async (req, res) => {
  try {
    const { cabinetId, code, doorId } = req.body;

    const postData = JSON.stringify({ cabinetId, code, doorId });

    const options = {
      hostname: "ems.vmotosoco-service.com",
      port: 443,
      path: "/vmoto-admin-api/iot/cabinetControl",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Content-Length": Buffer.byteLength(postData),
      },
    };

    const response = await makeRequest(options, postData);

    console.log("Set Swap Slot Response:", response);

    if (response.isSuccess) {
      res.json(response);
    } else {
      res.status(501).json({ error: "Error in API response" });
    }
  } catch (error) {
    console.error("Error setting swap slot:", error.message);
    res.status(500).json({ error: error.message });
  }
};

const openSwapStationSlot = async (req, res) => {
  try {
    const { cabinetId, code, doorId } = req.body;

    const postData = JSON.stringify({ cabinetId, code, doorId });

    const options = {
      hostname: "ems.vmotosoco-service.com",
      port: 443,
      path: "/vmoto-admin-api/iot/cabinetControl",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Content-Length": Buffer.byteLength(postData),
      },
    };

    const response = await makeRequest(options, postData);

    console.log("Open Swap Station Slot Response:", response);

    if (response.isSuccess) {
      res.json(response);
    } else {
      res.status(501).json({ error: "Error in API response" });
    }
  } catch (error) {
    console.error("Error opening swap station slot:", error.message);
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getCabinetList,
  setSwapStation,
  setSwapSlot,
  openSwapStationSlot,
  useLoginApi,
};
