const axios = require('axios');
const TelegramBot = require('node-telegram-bot-api');

// Replace with your Telegram bot token
const botToken = '7342437889:AAEBUfwnC1q3CtrqrG-BzcbRooKLHKhLhm4';
// Replace with your Telegram group chat ID
const chatId = '1255946304';

const bot = new TelegramBot(botToken);

async function getRandomWikipediaArticle() {
  try {
    const response = await axios.get('https://en.wikipedia.org/api/rest_v1/page/random/summary');
    return response.data;
  } catch (error) {
    console.error('Error fetching random Wikipedia article:', error);
    return null;
  }
}

async function postToTelegram(title, summary, url) {
  const message = `*${title}*\n\n${summary}\n\n[Read more](${url})`;
  
  try {
    await bot.sendMessage(chatId, message, { parse_mode: 'Markdown' });
    console.log('Message posted successfully to Telegram group');
  } catch (error) {
    console.error('Error posting to Telegram:', error);
  }
}

async function main() {
  const article = await getRandomWikipediaArticle();
  
  if (article) {
    const { title, extract, content_urls } = article;
    await postToTelegram(title, extract, content_urls.desktop.page);
  } else {
    console.log('Failed to fetch a random Wikipedia article');
  }
}

main();