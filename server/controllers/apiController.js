const asyncHandler = require("express-async-handler");

const useApi = async (req, res) => {
  try {
  } catch (error) {
    console.error("Internal Server Error:", error);
    res.status(500).json({
      state: "fail",
      message: "An internal server error occurred",
    });
  }
};
module.exports = {
  useApi,
};
