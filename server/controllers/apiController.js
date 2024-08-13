const axios = require("axios");

const useLoginApi = async (req, res) => {
  try {
    const { userAccount, userPassword, isRememberMe } = req.body;

    const response = await axios.post(
      "https://ems.vmotosoco-service.com/vmoto-authority-api/auth/account/login",
      {
        userAccount,
        userPassword,
        isRememberMe,
      }
    );
    console.log(response.data);
    if (response.data.isSuccess) {
      // const { accessToken, expireDate } = response.data.data;
      const user = response.data.data;
      res.json({ user });
    } else {
      res.status(400).json({ error: "Error in API response" });
    }
  } catch (error) {
    console.error("Error fetching access token:", error);
    res.status(500).send("Error fetching access token");
  }
};

module.exports = { useLoginApi };
