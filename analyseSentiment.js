const request = require('superagent');

module.exports = (API_KEY) => {
  const BASE_URL = 'https://commentanalyzer.googleapis.com/v1alpha1';
  const API_URL = `${BASE_URL}/comments:analyze?key=${API_KEY}`;

  const analyseSentiment = async ({ comment }) => {
    const commentBody = comment.body;
    try {
      const response = await request.post(API_URL)
      .set('Content-Type', 'application/json')
      .send({
        comment: {
          text: commentBody
        },
        languages: ['en'],
        requestedAttributes: { TOXICITY: {} }
      })

      const score = response.body.attributeScores.TOXICITY.summaryScore.value;
      return score > 0.6 ? 'toxic' : 'nontoxic';
    } catch (err) {
      console.log('err', err);
    }
  }

  return analyseSentiment;
}
