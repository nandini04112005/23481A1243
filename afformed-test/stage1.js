require("dotenv").config();

const axios = require("axios");

const AUTH_TOKEN = process.env.ACCESS_TOKEN;

/* Priority Weights */
const priorityMap = {
  Placement: 3,
  Result: 2,
  Event: 1
};

async function getNotifications() {

  try {

    const response = await axios.get(
      "http://4.224.186.213/evaluation-service/notifications",
      {
        headers: {
          Authorization: `Bearer ${AUTH_TOKEN}`
        }
      }
    );

    const notifications = response.data.notifications;

    /* Sort Notifications */
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

    /* Top 10 */
    const top10 = notifications.slice(0, 10);

    console.log("\nTOP 10 PRIORITY NOTIFICATIONS\n");

    top10.forEach((item, index) => {

      console.log(`
${index + 1}.
Type      : ${item.Type}
Message   : ${item.Message}
Timestamp : ${item.Timestamp}
      `);

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

getNotifications();