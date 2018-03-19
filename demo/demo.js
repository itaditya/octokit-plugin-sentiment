const octokit = require('@octokit/rest')();
const sentimentPlugin = require('octokit-plugin-sentiment')('provide-your-perspective-api-key');

octokit.plugin(sentimentPlugin);

(async () => {
  const owner = 'isaacs';
  const repo = 'github';
  const number = 6;
  
  const apiResponse = await octokit.issues.getComments({ owner, repo, number });
  const comment = apiResponse.data[29];
  console.log('comment', comment);
  const sentiment = await octokit.analyseSentiment({ comment });
  console.log('sentiment', sentiment);
})()
