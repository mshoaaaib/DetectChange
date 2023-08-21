const axios = require('axios');

// Accept the ticket number as a command-line argument
const Ticket_NO = process.argv[2];

if (!Ticket_NO) {
  console.error('Error: Ticket number not provided.');
  process.exit(1);
}

const url = 'https://testjiragitautomation.atlassian.net/rest/api/3/issue/' + Ticket_NO;
const auth = {
  // JIRA login email
  username: 'muhammadshoaibajk@gmail.com',

  // Token to be copied From JIRA
  password: 'ATATT3xFfGF0MsZE1cirJxVkX1B0dSskqdEvUJG0ZeV6PQBxzC7sg22e0rEc_jeaasfMAgoy4gkhYYZ0F8blgp2rKPUD8JUBWZtwwAy5Ihf1Iu-ish7zcggpoJFWisf7IFgkmh3-byFlP7YLWQZYFim1SycJ6fERYj7RWwROn3n8N1hTFeenJ5E=CAA656F8' // Replace with your actual API token
};

const requestBody = {
  update: {
    customfield_10037: [
      {
        set: 'Ticket Flagged Successfully'
      }
    ]
  }
};

axios
  .put(url, requestBody, { auth })
  .then(response => {
    console.log('Response:', response.status);
  })
  .catch(error => {
    console.error('Error:', error);
  });
