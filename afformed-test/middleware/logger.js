require("dotenv").config();

const axios = require("axios");

const Log = async (
  stack,
  level,
  packageName,
  message
) => {

  try {

    await axios.post(

      "http://4.224.186.213/evaluation-service/logs",

      {
        stack,
        level,
        package: packageName,
        message
      },

      {
        headers: {
          Authorization: `Bearer ${process.env.ACCESS_TOKEN}`,
          "Content-Type": "application/json"
        }
      }
    );

    console.log("Log Sent Successfully");

  } catch (error) {

    console.log("Logging Failed");

    if (error.response) {
      console.log(error.response.data);
    } else {
      console.log(error.message);
    }
  }
};

module.exports = Log;