const axios = require("axios");

const useApi = async (req, res) => {
  try {
    const { username, password } = req.body;

    const response = await axios.post(
      "http://ems.vmotosoco-service.com/api/auth/login",
      {
        username,
        password,
      }
    );

    const { token, refreshToken } = response.data;

    res.json({ token, refreshToken });
  } catch (error) {
    console.error("Error fetching JWT token:", error);
    res.status(500).send("Error fetching JWT token");
  }
};

module.exports = { useApi };
