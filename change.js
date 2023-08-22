const axios = require('axios');

const endpoint = 'https://api.github.com/repos/mshoaaaib/FlowTest/compare/main...2';
const username = 'muhammadshoaibajk@gmail.com';
const apiToken = 'ATATT3xFfGF0MsZE1cirJxVkX1B0dSskqdEvUJG0ZeV6PQBxzC7sg22e0rEc_jeaasfMAgoy4gkhYYZ0F8blgp2rKPUD8JUBWZtwwAy5Ihf1Iu-ish7zcggpoJFWisf7IFgkmh3-byFlP7YLWQZYFim1SycJ6fERYj7RWwROn3n8N1hTFeenJ5E=CAA656F8';

const headers = {
  Authorization: `Basic ${Buffer.from(`${username}:${apiToken}`).toString('base64')}`
};

axios.get(endpoint, { headers })
  .then(response => {
    const filesChanged = response.data.files.length;
    const changeStatus = filesChanged > 0 ? 1 : 0;
    console.log('Change Status:', changeStatus);
  })
  .catch(error => {
    console.error('Error:', error.response ? error.response.data : error.message);
  });
