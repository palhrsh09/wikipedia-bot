##Wikipedia Bot
Technology Stack: Node.js, Express.js, Telegram API, Wikipedia API

# Description:
Developed a sophisticated bot using Node.js that automatically posts random Wikipedia articles to a Telegram group chat at scheduled intervals. This bot leverages a combination of APIs and asynchronous JavaScript to ensure a seamless user experience and continuous flow of diverse content.

Key Features:

Automated Article Posting: The bot fetches random articles from Wikipedia and posts them to a specified Telegram group chat at regular intervals. This provides group members with a steady stream of interesting and informative content.

Server-Side Logic: Implemented robust server-side logic using Node.js and Express.js. This includes handling API requests, scheduling posts, and ensuring reliable performance.

Asynchronous Processing: Utilized asynchronous JavaScript to manage multiple API calls and handle responses efficiently. This ensures that the bot can fetch and post articles without delays or interruptions.

Integration with APIs: Integrated with both the Telegram API and Wikipedia API. The Telegram API is used for sending messages to the group chat, while the Wikipedia API is used to retrieve a wide range of articles.

Setup Instructions:

Clone the Repository:

bash
Copy code
git clone <repository-url>
Install Dependencies:

bash
Copy code
cd <project-directory>
npm install
Configure Environment Variables:
Create a .env file in the root directory and add your Telegram bot token and other configuration details.

Run the Bot:

bash
Copy code
npm start
Usage:

Once the bot is up and running, it will automatically post random Wikipedia articles to the specified Telegram group chat according to the defined schedule. Adjust the schedule and other settings in the configuration file as needed.
