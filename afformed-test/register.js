const axios = require("axios");

const register = async () => {

  try {

    const response = await axios.post(
      "http://4.224.186.213/evaluation-service/register",

      {
        email: "cherukunandini05@gmail.com",
        name: "Ch Nandini",
        mobileNo: "9951193210",
        githubUsername: "nandini04112005",
        rollNo: "23481A1243",
        accessCode: "eJdCuC"
      }
    );

    console.log(response.data);

  } catch (error) {

    console.log(error.response.data);
  }
};

register();