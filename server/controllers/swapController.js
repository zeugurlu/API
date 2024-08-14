const axios = require("axios");

const getCabinetList = async (req, res) => {
  try {
    const { pageSize, currentPage } = req.body;

    const response = await axios.post(
      "https://ems.vmotosoco-service.com/vmoto-admin-api/cabinetInfo/list",
      {
        pageSize,
        currentPage,
      }
    );

    console.log("Response data:", response.data);

    if (response.data.isSuccess) {
      return response.data.data.list;
    } else {
      res.status(501).json({ error: "Error in API response" });
    }
  } catch (error) {
    console.error("Error fetching cabinet list:", error.message);
    throw error;
  }
};

const setSwapStation = async (req, res) => {
  try {
    const { cabinetId, code } = req.body;
    const response = await axios.post(
      "https://ems.vmotosoco-service.com/vmoto-admin-api/iot/cabinetControl",
      {
        cabinetId,
        code,
      }
    );
    console.log("Response data:", response.data);

    if (response.data.isSuccess) {
      return response.data;
    } else {
      res.status(501).json({ error: "Error in API response" });
    }
  } catch (error) {
    console.error("Error fetching cabinet list:", error.message);
    throw error;
  }
};

const setSwapSlot = async (req, res) => {
  try {
    const { cabinetId, code, doorId } = req.body;
    const response = await axios.post(
      "https://ems.vmotosoco-service.com/vmoto-admin-api/iot/cabinetControl",
      {
        cabinetId,
        code,
        doorId,
      }
    );
    console.log("Response data:", response.data);

    if (response.data.isSuccess) {
      return response.data;
    } else {
      res.status(501).json({ error: "Error in API response" });
    }
  } catch (error) {
    console.error("Error fetching cabinet list:", error.message);
    throw error;
  }
};

const openSwapStationSlot = async (req, res) => {
  try {
    const { cabinetId, code, doorId } = req.body;
    const response = await axios.post(
      "https://ems.vmotosoco-service.com/vmoto-admin-api/iot/cabinetControl",
      {
        cabinetId,
        code,
        doorId,
      }
    );
    console.log("Response data:", response.data);

    if (response.data.isSuccess) {
      return response.data;
    } else {
      res.status(501).json({ error: "Error in API response" });
    }
  } catch (error) {
    console.error("Error fetching cabinet list:", error.message);
    throw error;
  }
};

module.exports = { getCabinetList };
