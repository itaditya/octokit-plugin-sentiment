const analyseSentiment = require('./analyseSentiment');

function sentimentPlugin (octokit) {
  octokit.analyseSentiment = analyseSentiment;
}

module.exports = sentimentPlugin;

