const axios = require('axios');

// Configuration for the GitHub API
const githubEndpoint = 'https://api.github.com/repos/mshoaaaib/FlowTest/compare/main...2';
const githubUsername = 'muhammadshoaibajk@gmail.com';
const githubApiToken = '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'; // Replace with your GitHub API token

const githubHeaders = {
  Authorization: `Basic ${Buffer.from(`${githubUsername}:${githubApiToken}`).toString('base64')}`
};

// Configuration for the JIRA API
const jiraTicketNumber = process.argv[2];

if (!jiraTicketNumber) {
  console.error('Error: Ticket number not provided.');
  process.exit(1);
}

const jiraUrl = 'https://testjiragitautomation.atlassian.net/rest/api/3/issue/' + jiraTicketNumber;
const jiraApiToken = 'ATATT3xFfGF0MsZE1cirJxVkX1B0dSskqdEvUJG0ZeV6PQBxzC7sg22e0rEc_jeaasfMAgoy4gkhYYZ0F8blgp2rKPUD8JUBWZtwwAy5Ihf1Iu-ish7zcggpoJFWisf7IFgkmh3-byFlP7YLWQZYFim1SycJ6fERYj7RWwROn3n8N1hTFeenJ5E=CAA656F8'; // Replace with your JIRA API token

const jiraHeaders = {
  Authorization: `Basic ${Buffer.from(`${jiraUsername}:${jiraApiToken}`).toString('base64')}`
};

// Check for changes in the GitHub repository
axios.get(githubEndpoint, { headers: githubHeaders })
  .then(response => {
    const filesChanged = response.data.files.length;
    const changeStatus = filesChanged > 0 ? 1 : 0;
    console.log('Change Status:', changeStatus);

    if (changeStatus === 1) {
      // Run the JIRA API only if there are changes
      const requestBody = {
        update: {
          customfield_10037: [
            {
              set: 'Ticket Flagged Successfully'
            }
          ]
        }
      };

      axios.put(jiraUrl, requestBody, { headers: jiraHeaders })
        .then(response => {
          console.log('JIRA Response:', response.status);
        })
        .catch(error => {
          console.error('JIRA Error:', error);
        });
    }
  })
  .catch(error => {
    console.error('GitHub Error:', error.response ? error.response.data : error.message);
  });











  // Token to be copied From JIRA
  password: 'ATATT3xFfGF0MsZE1cirJxVkX1B0dSskqdEvUJG0ZeV6PQBxzC7sg22e0rEc_jeaasfMAgoy4gkhYYZ0F8blgp2rKPUD8JUBWZtwwAy5Ihf1Iu-ish7zcggpoJFWisf7IFgkmh3-byFlP7YLWQZYFim1SycJ6fERYj7RWwROn3n8N1hTFeenJ5E=CAA656F8' // Replace with your actual API token
};
