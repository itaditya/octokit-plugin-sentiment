module.exports = (API_KEY) => {
  const analyseSentiment = require('./analyseSentiment')(API_KEY);
  const sentimentPlugin = (octokit) => {
    octokit.analyseSentiment = analyseSentiment;
  }
  return sentimentPlugin;
};
