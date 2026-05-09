# 23481A1243
# Stage 1

## Approach

The system fetches notifications from the protected API.

Notifications are prioritized using:
- Placement → Highest
- Result → Medium
- Event → Lowest

If priorities are equal, latest notifications are shown first using timestamp comparison.

## Efficient Top 10 Maintenance

To efficiently maintain top notifications:
- Sorting is performed using priority weights
- Recent timestamps are compared
- Only top 10 notifications are selected using slice()

This reduces unnecessary processing and improves scalability.

## Technologies Used

- Node.js
- Axios
- JavaScript
