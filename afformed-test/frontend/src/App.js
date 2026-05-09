const axios = require("axios");
require("dotenv").config();

const token = process.env.ACCESS_TOKEN;

const priorityMap = {
  Placement: 3,
  Result: 2,
  Event: 1
};

async function fetchNotifications() {
  try {
    const response = await axios.get(
      "http://4.224.186.213/evaluation-service/notifications",
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    );

    const notifications = response.data.notifications;

    // Sort notifications
    notifications.sort((a, b) => {
      const priorityDiff =
        priorityMap[b.Type] - priorityMap[a.Type];

      if (priorityDiff !== 0) {
        return priorityDiff;
      }

      return (
        new Date(b.Timestamp) -
        new Date(a.Timestamp)
      );
    });

    // Top 10 notifications
    const topNotifications = notifications.slice(0, 10);

    console.log("\nTop 10 Notifications:\n");

    topNotifications.forEach((item, index) => {
      console.log(`${index + 1}.`);
      console.log(`Type: ${item.Type}`);
      console.log(`Message: ${item.Message}`);
      console.log(`Timestamp: ${item.Timestamp}`);
      console.log("---------------------------");
    });

  } catch (error) {
    console.log("Error Fetching Notifications");

    if (error.response) {
      console.log(error.response.data);
    } else {
      console.log(error.message);
    }
  }
}

fetchNotifications();